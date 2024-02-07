const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "add the ad title"],
    },
    description: {
      type: String,
      required: [true, "add the ad description"],
    },
    price: {
      type: Number,
      required: [true, "add the price"],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Ad", adSchema);
