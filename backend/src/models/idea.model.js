const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
},

    likes: {
  type: Number,
  default: 0,
},

likedBy: [
  {
    type: require("mongoose").Schema.Types.ObjectId,
    ref: "User",
  },
],

    comments: {
      type: Number,
      default: 0,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Idea", ideaSchema);
