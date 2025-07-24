const mongoose = require("mongoose");

const slideSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  type: { type: String, enum: ["video", "image"] },
  title: { type: String },
  subtitle: { type: String },
  src: { type: String, required: true }, // Path to video or image
});

module.exports = mongoose.models.Slide || mongoose.model("Slide", slideSchema);
