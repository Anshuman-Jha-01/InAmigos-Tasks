import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    excerpt: { type: String, trim: true, maxlength: 300 },
    body: { type: String, required: true },
    tag: { type: String, trim: true }, // e.g. "Anxiety", "Mindfulness"
    author: { type: String, trim: true },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("BlogPost", blogPostSchema);
