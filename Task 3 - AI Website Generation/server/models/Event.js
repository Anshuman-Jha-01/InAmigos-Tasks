import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    type: { type: String, enum: ["Workshop", "Support group", "Event"], default: "Event" },
    description: { type: String, trim: true, maxlength: 1000 },
    capacity: { type: Number, default: 20 },
    registeredCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
