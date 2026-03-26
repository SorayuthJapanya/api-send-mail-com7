import express from "express";
import { sendConfirmMail } from "../services/confirm.services.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { emails } = req.body;

    if (!emails) {
      return res.status(400).json({
        success: false,
        message: "Missing 'emails' field",
      });
    }

    const result = await sendConfirmMail(req.body);

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
