const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
    return updateSubcategories();
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// --- Schema Definitions ---
const productSchema = new mongoose.Schema({
  product_code: String,
  name: String,
  image: String,
  subImages: [String],
  content: String,
  price: Number,
});

const subcategorySchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  products: [productSchema],
  sec_head: String,
  third_head: String,
  foot_head: String,
  foot_subhead: String,
  foot_content: String,
});

const categorySchema = new mongoose.Schema({
  name: String,
  subcategories: [subcategorySchema],
});

const Subproduct = mongoose.models.Subproduct || mongoose.model("Subproduct", categorySchema);

// --- Update Script ---
async function updateSubcategories() {
  try {
    const categories = await Subproduct.find();

    for (const category of categories) {
      let updated = false;
      for (const sub of category.subcategories) {
        if (
          sub.sec_head === undefined &&
          sub.third_head === undefined &&
          sub.foot_head === undefined &&
          sub.foot_subhead === undefined &&
          sub.foot_content === undefined
        ) {
          sub.sec_head = "";
          sub.third_head = "";
          sub.foot_head = "";
          sub.foot_subhead = "";
          sub.foot_content = "";
          updated = true;
        }
      }

      if (updated) {
        await category.save();
        console.log(`✅ Updated category: ${category.name}`);
      }
    }

    console.log("🎉 All done!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error updating subcategories:", err);
    process.exit(1);
  }
}
