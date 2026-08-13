import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import appointmentsRouter from "./routes/appointments.js";
import contactRouter from "./routes/contact.js";
import testimonialsRouter from "./routes/testimonials.js";
import blogRouter from "./routes/blog.js";
import eventsRouter from "./routes/events.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json({ limit: "10kb" }));

// Basic abuse protection on public-facing write endpoints
const writeLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 50 });
app.use(["/api/appointments", "/api/contact", "/api/testimonials"], writeLimiter);

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/appointments", appointmentsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/testimonials", testimonialsRouter);
app.use("/api/blog", blogRouter);
app.use("/api/events", eventsRouter);

// Central error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong. Please try again." });
});

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/mindharbor")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`MindHarbor API running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
