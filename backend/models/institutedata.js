const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  address: String,
  category: String,
  description: String,
}, { timestamps: true });

module.exports = mongoose.model("InstituteData", instituteSchema);
