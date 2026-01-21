import express from "express";
import { sendMail } from "../services/mail.services.js";

const router = express.Router();

router.post("/send-mail", async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const { to, type, location } = req.body;

    if (!to) {
      return res.status(400).json({
        success: false,
        message: "Missing 'to' field",
      });
    }

    if (type === "ONSITE" && !location) {
      return res.status(400).json({
        success: false,
        message: "Missing location for ONSITE interview",
      });
    }

    const result = await sendMail(req.body);

    res.json({
      success: true,
      message: "Email sent successfully",
      data: result,
    });
  } catch (error) {
    console.error("Send mail error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to send email",
    });
  }
});

export default router;
