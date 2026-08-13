import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    service: {
      type: String,
      required: true,
      enum: [
        "Individual Therapy",
        "Couples Counseling",
        "Family Therapy",
        "Psychiatric Consultation",
        "Telehealth Session",
      ],
    },
    clinician: { type: String, trim: true },
    date: { type: String, required: true }, // e.g. "2026-08-19"
    time: { type: String, required: true }, // e.g. "10:30 AM"
    paymentMethod: { type: String, enum: ["insurance", "direct"], default: "direct" },
    insuranceProvider: { type: String, trim: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    notes: { type: String, trim: true, maxlength: 1000 },
  },
  { timestamps: true }
);

appointmentSchema.index({ date: 1, time: 1, clinician: 1 });

export default mongoose.model("Appointment", appointmentSchema);
