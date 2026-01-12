import nodemailer from "nodemailer";
import dotenv from "dotenv";

import { onlineEmailTemplate } from "../templates/onliteEmailTemplate.js";
import { onsiteEmailTemplate } from "../templates/onsiteEmailTemplate.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  logger: true,
  debug: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
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
    html = onlineEmailTemplate({
      fullname,
      date,
      timePeriod,
    });
  } else if (type === "ONSITE") {
    html = onsiteEmailTemplate({
      fullname,
      date,
      timePeriod,
      location,
    });
  }
  return transporter.sendMail({
    from: `${process.env.EMAIL_USER}`,
    to,
    subject: `[COM7] ${eventName}: แจ้งเตือนการลงละเบียนผู้สมัครสัมภาษณ์`,
    html,
  });
}
