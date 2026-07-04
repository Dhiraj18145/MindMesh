const express = require("express");
const router = express.Router();

const Idea = require("../models/idea.model");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, async (req, res) => {
  try {
    const idea = await Idea.create({

    title:req.body.title,

    description:req.body.description,

    tags:req.body.tags,

    likes:req.body.likes,

    comments:req.body.comments,

    user:req.user.id,
    });

    res.status(201).json(idea);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();

    res.json(ideas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/myideas", authMiddleware, async (req, res) => {
  try {
    const ideas = await Idea.find({
      user: req.user.id,
    });

    res.json(ideas);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Get Liked Ideas
router.get("/liked", authMiddleware, async (req, res) => {
  try {
    const ideas = await Idea.find({
      likedBy: req.user.id,
    });

    res.json(ideas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Logged-in User Ideas
router.get("/my", authMiddleware, async (req, res) => {
  try {
    const ideas = await Idea.find({
      user: req.user.id,
    });

    res.json(ideas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);

    res.json({
      message: "Idea Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedIdea =
      await Idea.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updatedIdea);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id/like", authMiddleware, async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({
        message: "Idea not found",
      });
    }

    const userId = req.user.id;

    const alreadyLiked = idea.likedBy.includes(userId);

    if (alreadyLiked) {
      idea.likedBy = idea.likedBy.filter(
        (id) => id.toString() !== userId
      );

      idea.likes -= 1;
    } else {
      idea.likedBy.push(userId);

      idea.likes += 1;
    }

    await idea.save();

    res.json(idea);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
