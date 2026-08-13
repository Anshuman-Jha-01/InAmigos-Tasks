import { Router } from "express";
import BlogPost from "../models/BlogPost.js";

const router = Router();

// GET /api/blog
router.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.find({ published: true })
      .select("title slug excerpt tag author createdAt")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch articles" });
  }
});

// GET /api/blog/:slug
router.get("/:slug", async (req, res) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug, published: true });
    if (!post) return res.status(404).json({ error: "Article not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch article" });
  }
});

export default router;
