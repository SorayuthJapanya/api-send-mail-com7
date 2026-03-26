import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import { openHouseSendMailTemplate } from "../templates/OpenHouseSendMailTemplate.js";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendConfirmMail({ emails }) {
  if (!emails || emails.length === 0) return;

  const subject = "[COM7] ยืนยันสัมภาษณ์งาน Open House @COM7";
  const html = openHouseSendMailTemplate();

  const sendTasks = emails.map((email) => {
    const message = {
      to: email,
      from: {
        email: process.env.MAIL_FROM,
        name: "COM7 Career",
      },
      subject,
      html,
    };

    return sgMail.send(message);
  });

  const results = await Promise.allSettled(sendTasks);

  const success = results.filter((r) => r.status === "fulfilled").length;
  const failed = results.filter((r) => r.status === "rejected").length;

  console.log("====== Email Summary ======");
  console.log(`Total Emails : ${emails.length}`);
  console.log(`Success      : ${success}`);
  console.log(`Failed       : ${failed}`);

  if (failed > 0) {
    results.forEach((result, index) => {
      if (result.status === "rejected") {
        console.error(`Failed email: ${emails[index]}`);
        console.error(result.reason);
      }
    });
  }

  return {
    total: emails.length,
    success,
    failed,
  };
}
