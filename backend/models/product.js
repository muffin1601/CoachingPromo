// models/product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_code: { type: String},
  name: { type: String},
  image: { type: String }, // main image
  subImages: [{ type: String }], // additional images
  content: { type: String },
  price: { type: Number},
});

const subcategorySchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
  price: { type: Number},
  products: [productSchema],
  sec_head: String,
  third_head: String,
  foot_head: String,
  foot_subhead: String,
  foot_content: String,
});

const categorySchema = new mongoose.Schema({
  name: { type: String},
  subcategories: [subcategorySchema],
});

module.exports = mongoose.models.Subproduct || mongoose.model("Subproduct", categorySchema);
