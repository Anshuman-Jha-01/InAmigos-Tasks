import { Router } from "express";
import Appointment from "../models/Appointment.js";

const router = Router();

// GET /api/appointments/availability?date=2026-08-19
router.get("/availability", async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) return res.status(400).json({ error: "date query param is required" });

    const allSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];
    const booked = await Appointment.find({
      date,
      status: { $in: ["pending", "confirmed"] },
    }).select("time -_id");

    const bookedTimes = booked.map((b) => b.time);
    const availability = allSlots.map((time) => ({
      time,
      available: !bookedTimes.includes(time),
    }));

    res.json({ date, availability });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch availability" });
  }
});

// POST /api/appointments
router.post("/", async (req, res) => {
  try {
    const { clientName, email, service, date, time } = req.body;
    if (!clientName || !email || !service || !date || !time) {
      return res.status(400).json({ error: "clientName, email, service, date, and time are required" });
    }

    const clash = await Appointment.findOne({ date, time, status: { $in: ["pending", "confirmed"] } });
    if (clash) return res.status(409).json({ error: "That time slot was just taken. Please pick another." });

    const appointment = await Appointment.create({ ...req.body, status: "pending" });
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ error: "Failed to create appointment" });
  }
});

// GET /api/appointments/:id
router.get("/:id", async (req, res) => {
  try {
    const appt = await Appointment.findById(req.params.id);
    if (!appt) return res.status(404).json({ error: "Appointment not found" });
    res.json(appt);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch appointment" });
  }
});

// PATCH /api/appointments/:id/cancel
router.patch("/:id/cancel", async (req, res) => {
  try {
    const appt = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: "cancelled" },
      { new: true }
    );
    if (!appt) return res.status(404).json({ error: "Appointment not found" });
    res.json(appt);
  } catch (err) {
    res.status(500).json({ error: "Failed to cancel appointment" });
  }
});

export default router;
