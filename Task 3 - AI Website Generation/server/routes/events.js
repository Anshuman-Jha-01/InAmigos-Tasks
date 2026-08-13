import { Router } from "express";
import Event from "../models/Event.js";

const router = Router();

// GET /api/events?upcoming=true
router.get("/", async (req, res) => {
  try {
    const filter = req.query.upcoming === "true" ? { date: { $gte: new Date() } } : {};
    const events = await Event.find(filter).sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

// POST /api/events/:id/register
router.post("/:id/register", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    if (event.registeredCount >= event.capacity) {
      return res.status(409).json({ error: "This event is full" });
    }
    event.registeredCount += 1;
    await event.save();
    res.json({ message: `You're registered for ${event.title}.`, event });
  } catch (err) {
    res.status(500).json({ error: "Failed to register for event" });
  }
});

export default router;
