const mongoose = require("mongoose");
const Category = require("./models/category");
const categories = require("./data/categories"); // Import category data
require("dotenv").config();


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB ✅");

const seedDatabase = async () => {
  try {
    await Category.deleteMany(); // Clear existing data
    await Category.insertMany(categories);
    console.log("Categories Seeded Successfully!");
    
  } catch (error) {
    console.error("❌ Seeding Failed:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB 🛑");
  }
};

seedDatabase();
