import nodemailer from "nodemailer";
import dotenv from "dotenv";

import { onlineEmailTemplate } from "../templates/onlineEmailTemplate.js";
import { onsiteEmailTemplate } from "../templates/onsiteEmailTemplate.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

transporter.verify((err) => {
  if (err) console.error("SMTP error:", err);
  else console.log("Brevo SMTP ready");
});

export async function sendMail({
  to,
  eventName,
  fullname,
  date,
  timePeriod,
  location,
  type,
}) {
  let html = "";

  if (type === "ONLINE") {
    html = onlineEmailTemplate({ fullname, date, timePeriod });
  } else if (type === "ONSITE") {
    html = onsiteEmailTemplate({ fullname, date, timePeriod, location });
  } else {
    throw new Error("Invalid email type");
  }

  const info = await transporter.sendMail({
    from: `"COM7 Interview" <sorayuthjaapanya@gmail.com>`,
    to,
    subject: `[COM7] ${eventName}: แจ้งเตือนการลงทะเบียนผู้สมัครสัมภาษณ์`,
    html,
  });

  return {
    success: true,
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
  };
}
