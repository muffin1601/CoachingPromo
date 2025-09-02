require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();


app.use(cors());

app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));


const ensureUploadDirs = () => {
  const dirs = ["uploads", "uploads/products", "uploads/subcategories"];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });
};
ensureUploadDirs();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const categoryRoutes = require("./routes/categoryRoutes");
const subcategoryRoutes = require("./routes/subcategoryRoutes");
const productRoutes = require("./routes/productRoutes");
const emailRoutes = require("./routes/emailRoutes");
const adminRoutes = require("./routes/adminRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const searchRoutes = require("./routes/searchRoutes");
const instituteRoutes = require("./routes/instituteRoutes");
const blogRoutes = require("./routes/blogRoutes");
const visitorRoutes = require("./routes/visitor");


app.use("/api/blogs", blogRoutes);
app.use ("/api/visitors", visitorRoutes);
app.use("/api", categoryRoutes);
app.use("/api", subcategoryRoutes);
app.use("/api", productRoutes);
app.use("/", emailRoutes);
app.use("/api", adminRoutes);
app.use("/api", bannerRoutes);
app.use("/api", searchRoutes);
app.use("/api", instituteRoutes);


// --- Serve Frontend ---
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));

