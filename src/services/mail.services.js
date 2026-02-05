import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

import { onlineEmailTemplate } from "../templates/onlineEmailTemplate.js";
import { onsiteEmailTemplate } from "../templates/onsiteEmailTemplate.js";
import { text } from "express";
import { confirmInterviewLinkTemplate } from "../templates/confirmInterviewLinkTemplate.js";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Main entry
 */
export async function sendMail(payload) {
  const { type } = payload;

  if (!type) {
    return sendDefaultMail(payload);
  }

  if (type === "CALL_LINK") {
    return sendCallLinkMail(payload);
  } else {
    return sendMailByType(payload);
  }
}

/**
 * Service: ส่งตามประเภท (ONLINE / ONSITE)
 */
async function sendMailByType({
  to,
  eventName,
  buName,
  fullname,
  date,
  timePeriod,
  location,
  type,
}) {
  let html;
  let subject;
  const fullEventName = `${eventName}-${buName}`;

  switch (type) {
    case "ONLINE":
      html = onlineEmailTemplate({ fullname, date, timePeriod, fullEventName });
      subject = `[COM7] ${eventName}-${buName} : ยืนยันการลงทะเบียนและสัมภาษณ์งาน`;
      break;

    case "ONSITE":
      html = onsiteEmailTemplate({
        fullname,
        date,
        timePeriod,
        location,
        fullEventName,
      });
      subject = `[COM7] ${eventName}-${buName} : ยืนยันการลงทะเบียนและสัมภาษณ์งาน`;
      break;

    default:
      throw new Error("Invalid email type");
  }

  const msg = {
    to,
    from: {
      email: process.env.MAIL_FROM,
      name: "COM7 Interview",
    },
    subject,
    html,
  };

  const [response] = await sgMail.send(msg);

  return formatSendgridResponse(response);
}

/**
 * Service: Default mail (มีแค่ to)
 */
async function sendDefaultMail({ to, fullname }) {
  const msg = {
    to,
    from: {
      email: process.env.MAIL_FROM,
      name: "COM7 Interview",
    },
    subject: "[COM7] Notification: แจ้งผลการพิจารณาใบสมัครงาน",
    text: `
เรียน คุณ${fullname},

          บริษัท คอมเซเว่น จำกัด (มหาชน) ขอขอบพระคุณที่ท่านให้ความสนใจและสมัครเข้าร่วมกระบวนการคัดเลือกกับทางบริษัทฯ
ภายหลังจากการพิจารณาใบสมัครในรอบปัจจุบัน บริษัทฯ ขอเรียนแจ้งว่า ขณะนี้ตำแหน่งงานที่เปิดรับอาจยังไม่ตรงกับประสบการณ์และคุณสมบัติของท่านอย่างเหมาะสมที่สุด บริษัทฯ จึงขออนุญาตเก็บข้อมูลใบสมัครของท่านไว้ในฐานข้อมูล เพื่อพิจารณาในโอกาสต่อไป
ทั้งนี้ หากในอนาคตมีตำแหน่งงานที่สอดคล้องกับประสบการณ์และความสามารถของท่าน บริษัทฯ จะติดต่อกลับไปอีกครั้งโดยเร็ว

          บริษัทฯ ขอขอบพระคุณในความสนใจที่มีต่อบริษัท คอมเซเว่น จำกัด (มหาชน)และหวังเป็นอย่างยิ่งว่าจะได้มีโอกาสร่วมงานกับท่านในอนาคต


ขอแสดงความนับถือ
บริษัท คอมเซเว่น จำกัด (มหาชน)
    `.trim(),
  };

  const [response] = await sgMail.send(msg);
  return formatSendgridResponse(response);
}

async function sendCallLinkMail({ to, date, eventName }) {
  const htmlContent = confirmInterviewLinkTemplate({ date, eventName });

  const msg = {
    to,
    from: {
      email: process.env.MAIL_FROM,
      name: "COM7 Interview",
    },
    subject: `[COM7] ยืนยันสัมภาษณ์งาน ${eventName}`,
    html: htmlContent,
  };

  const [response] = await sgMail.send(msg);
  return formatSendgridResponse(response);
}

/**
 * Normalize SendGrid response
 */
function formatSendgridResponse(response) {
  return {
    success: true,
    statusCode: response.statusCode,
    headers: response.headers,
  };
}
