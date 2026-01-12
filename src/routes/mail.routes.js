import express from "express";
import { sendMail } from "../services/mail.services.js";

const router = express.Router();

router.post("/send-mail", async (req, res) => {
  try {
    const { to, eventName, fullname, date, timePeriod, type, location } = req.body;

    if (!to || !eventName || !fullname || !date || !timePeriod || !type) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    if (type === "ONSITE" && !location) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    console.log("Body:", req.body);

    const result = await sendMail(req.body);

    res.json({
      success: true,
      message: "Email sent successfully",
      data: result
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

export default router;
