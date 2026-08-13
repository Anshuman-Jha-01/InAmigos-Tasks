import { Router } from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email, and message are required" });
    }
    const entry = await ContactMessage.create(req.body);
    res.status(201).json({ message: "Message received. Our team will reply within one business day.", id: entry._id });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

export default router;
