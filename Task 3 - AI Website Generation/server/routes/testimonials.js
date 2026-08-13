import { Router } from "express";
import Testimonial from "../models/Testimonial.js";

const router = Router();

// GET /api/testimonials?featured=true
router.get("/", async (req, res) => {
  try {
    const filter = { approved: true };
    if (req.query.featured === "true") filter.featured = true;
    const testimonials = await Testimonial.find(filter).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
});

// POST /api/testimonials (submitted for review, not auto-published)
router.post("/", async (req, res) => {
  try {
    const { quote, attribution } = req.body;
    if (!quote || !attribution) {
      return res.status(400).json({ error: "quote and attribution are required" });
    }
    const testimonial = await Testimonial.create({ ...req.body, approved: false });
    res.status(201).json({ message: "Thank you — your story will be reviewed before publishing.", id: testimonial._id });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit testimonial" });
  }
});

export default router;
