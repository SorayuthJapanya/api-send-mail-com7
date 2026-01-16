import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

import { onlineEmailTemplate } from "../templates/onlineEmailTemplate.js";
import { onsiteEmailTemplate } from "../templates/onsiteEmailTemplate.js";
import { defaultEmailTemplate } from "../templates/defaultEmailTemplate.js";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Main entry
 */
export async function sendMail(payload) {
  const { to, type } = payload;

  if (!type) {
    return sendDefaultMail({ to });
  }

  // 👉 ส่งตาม type
  return sendMailByType(payload);
}

/**
 * Service: ส่งตามประเภท (ONLINE / ONSITE)
 */
async function sendMailByType({
  to,
  eventName,
  fullname,
  date,
  timePeriod,
  location,
  type,
}) {
  let html;
  let subject;

  switch (type) {
    case "ONLINE":
      html = onlineEmailTemplate({ fullname, date, timePeriod });
      subject = `[COM7] ${eventName} : ยืนยันการลงทะเบียนและสัมภาษณ์งาน`;
      break;

    case "ONSITE":
      html = onsiteEmailTemplate({ fullname, date, timePeriod, location });
      subject = `[COM7] ${eventName} : ยืนยันการลงทะเบียนและสัมภาษณ์งาน`;
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
    subject: "[COM7] Notification",
    html: defaultEmailTemplate({ fullname }),
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
