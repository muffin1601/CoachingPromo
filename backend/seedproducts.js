const mongoose = require("mongoose");
const Subproduct = require("./models/product");
const allproducts = require("./data/allproducts"); // Make sure this exports the array
require("dotenv").config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB ✅");

    await Subproduct.deleteMany();
    console.log("Existing data cleared 🗑️");

    const formattedData = allproducts.map((category) => ({
      name: category.name,
      subcategories: category.subcategories.map((subcategory) => ({
        name: subcategory.name,
        image: subcategory.image,
        price: parseFloat(subcategory.price.toString().replace(/[₹,]/g, "").trim()),
        products: subcategory.products.map((product) => ({
          product_code: "",
          name: product.name,
          image: product.image || "",
          subImages: product.subImages || [],
          content: product.content || "",
          price: parseFloat(product.price.toString().replace(/[₹,]/g, "").trim()),
        })),
      })),
    }));

    await Subproduct.insertMany(formattedData);
    console.log("✅ Subproducts seeded successfully!");
  } catch (error) {
    console.error("❌ Seeding Failed:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB 🛑");
  }
};

seedDatabase();
