require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();

// --- Middleware ---
app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

// --- MongoDB Connection ---
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
const blogRoutes = require("./routes/blogRoutes")

// --- Register Routes ---
app.use("/api/blogs", blogRoutes);
app.use("/api", categoryRoutes);
app.use("/api", subcategoryRoutes);
app.use("/api", productRoutes);
app.use("/", emailRoutes); // For /send-email
app.use("/api", adminRoutes);
app.use("/api", bannerRoutes);
app.use("/api", searchRoutes);
app.use("/api", instituteRoutes);


// --- Serve Frontend ---
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));



// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const jwt = require("jsonwebtoken");
// const { Resend } = require("resend");
// const Subproduct = require("./models/product");
// const Slide = require("./models/banner");
// const InstituteData = require("./models/institutedata");
// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.error("MongoDB Connection Error:", err));


// // Ensure upload folders exist
// const ensureUploadDirs = () => {
//   const dirs = ["uploads", "uploads/products", "uploads/subcategories"];
//   dirs.forEach(dir => {
//     if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
//   });
// };
// ensureUploadDirs();

// // Delete file utility
// const deleteFile = (filepath) => {
//   fs.unlink(filepath, err => {
//     if (err) console.error("Failed to delete file:", filepath, err.message);
//   });
// };

// // Serve static uploads
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Multer storage setup
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     let folder = "uploads/misc";
//     const url = req.originalUrl;

//     if (url.includes("add-product") || url.includes("update-product")) {
//       folder = "uploads/products";
//     } else if (url.includes("add-subcategory") || url.includes("edit-subcategory")) {
//       folder = "uploads/subcategories";
//     }

//     if (!fs.existsSync(folder)) {
//       fs.mkdirSync(folder, { recursive: true });
//     }

//     cb(null, folder);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, ""));
//   }
// });
// const upload = multer({ storage });


// // Email setup
// const resend = new Resend(process.env.RESEND_API_KEY);
// app.post("/send-email", async (req, res) => {
//   const { name, email, phone, companyname, location, message } = req.body;
//   try {
//     const response = await resend.emails.send({
//       from: "no-reply@coachingpromo.in",
//       to: "sales@mfglobalservices.com",
//       reply_to: email,
//       subject: "New Enquiry from CoachingPromo",
//       text: `
//         Hi Team,

//         You have received a new inquiry through Coachingpromo.in. Please find the details below:

//         Name: ${name}
//         Company: ${companyname}
//         Email: ${email}
//         Phone: ${phone}
//         Location: ${location}
//         Message: ${message}

//         Please reach out to the user as soon as possible.

//         Best regards,
//         CoachingPromo
//       `,
//     });
//     res.status(200).json({ success: true, message: "Email sent successfully!", response });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ success: false, error: "Failed to send email" });
//   }
// });

// // --- CATEGORY ROUTES ---
// // app.post("/api/add-category", async (req, res) => {
// //   try {
// //     const { name } = req.body;
// //     if (!name || name.trim() === "") {
// //       return res.status(400).json({ error: "Category name is required" });
// //     }

// //     const newCategory = new Subproduct({ name, subcategories: [] });
// //     await newCategory.save();
// //     res.status(201).json({ message: "Category added", category: newCategory });
// //   } catch (err) {
// //     res.status(500).json({ error: "Server error while adding category" });
// //   }
// // });

// // // Update Category
// // app.put('/api/update-category/:id', async (req, res) => {
// //   try {
// //     const { name } = req.body;
// //     const { id } = req.params;

// //     if (!name?.trim()) return res.status(400).json({ error: 'Category name is required' });

// //     const category = await Subproduct.findById(id);
// //     if (!category) return res.status(404).json({ error: 'Category not found' });

// //     category.name = name;
// //     await category.save();

// //     res.json({ message: 'Category updated successfully', category });
// //   } catch (error) {
// //     console.error('Update category error:', error);
// //     res.status(500).json({ error: 'Failed to update category' });
// //   }
// // });

// // app.delete("/api/delete-category/:id", async (req, res) => {
// //   try {
// //     const deleted = await Subproduct.findByIdAndDelete(req.params.id);
// //     if (!deleted) return res.status(404).json({ error: "Category not found" });
// //     res.status(200).json({ message: "Category deleted" });
// //   } catch (err) {
// //     res.status(500).json({ error: "Server error deleting category" });
// //   }
// // });

// // app.get("/api/get-categories", async (req, res) => {
// //   try {
// //     const categories = await Subproduct.find({}, "name");
// //     res.status(200).json(categories);
// //   } catch (err) {
// //     res.status(500).json({ error: "Server error fetching categories" });
// //   }
// // });

// // --- SUBCATEGORY ROUTES ---
// app.post("/api/add-subcategory", upload.single("image"), async (req, res) => {
//   try {
//     const { categoryId, name } = req.body;
//     const file = req.file;

//     const category = await Subproduct.findById(categoryId);
//     if (!category) return res.status(404).json({ error: "Category not found" });

//     const exists = category.subcategories.find(
//       s => s.name.toLowerCase() === name.toLowerCase()
//     );
//     if (exists) return res.status(409).json({ error: "Subcategory already exists" });

//     const newSub = {
//       name,
//       image: `/uploads/subcategories/${file.filename}`,
//       price: null,
//       products: [],
//     };

//     category.subcategories.push(newSub);
//     await category.save();

//     res.status(201).json({ message: "Subcategory added", subcategory: newSub });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error while adding subcategory" });
//   }
// });

// app.put(
//   '/api/edit-subcategory/:categoryId/:subcategoryName',
//   upload.single('image'),
//   async (req, res) => {
//     try {
//       const { categoryId, subcategoryName } = req.params;
//       const { name: newName } = req.body;
//       const file = req.file;

//       const category = await Subproduct.findById(categoryId);
//       if (!category) {
//         return res.status(404).json({ error: 'Category not found' });
//       }

//       const sub = category.subcategories.find(
//         (s) => s.name.toLowerCase() === subcategoryName.toLowerCase()
//       );

//       if (!sub) {
//         return res.status(404).json({ error: 'Subcategory not found' });
//       }

//       // Update fields
//       if (newName) sub.name = newName;
//       // if (price !== undefined) sub.price = price;
//       if (file) sub.image = `/uploads/subcategories/${file.filename}`;

//       await category.save();

//       res.status(200).json({ message: 'Subcategory updated successfully', subcategory: sub });
//     } catch (error) {
//       console.error('Update Subcategory Error:', error);
//       res.status(500).json({ error: 'Server error while updating subcategory' });
//     }
//   }
// );

// app.get("/api/get-subcategories/:categoryId", async (req, res) => {
//   try {
//     const category = await Subproduct.findById(req.params.categoryId);
//     if (!category) return res.status(404).json({ error: "Category not found" });

//     res.json(category.subcategories);
//   } catch (err) {
//     res.status(500).json({ error: "Server error fetching subcategories" });
//   }
// });

// app.delete("/api/delete-subcategory/:categoryId/:subcategoryName", async (req, res) => {
//   try {
//     const { categoryId, subcategoryName } = req.params;

//     const category = await Subproduct.findById(categoryId);
//     if (!category) return res.status(404).json({ error: "Category not found" });

//     const updatedSubcategories = category.subcategories.filter(
//       sub => sub.name.toLowerCase() !== subcategoryName.toLowerCase()
//     );

//     category.subcategories = updatedSubcategories;
//     await category.save();

//     res.json({ message: "Subcategory deleted", category });
//   } catch (err) {
//     res.status(500).json({ error: "Server error deleting subcategory" });
//   }
// });

// // GET /api/related-subcategories/:category
// app.get("/api/related-subcategories/:category", async (req, res) => {
//   try {
//     const { category } = req.params;
//     const categoryDoc = await Subproduct.findOne({ name: category });

//     if (!categoryDoc) {
//       return res.status(404).json({ message: "Category not found" });
//     }

//     res.json(categoryDoc.subcategories);
//   } catch (err) {
//     console.error("Server error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // --- PRODUCT ROUTES ---
// app.get("/api/getproducts", async (req, res) => {
//   try {
//     const categories = await Subproduct.find();
//     const allProducts = [];

//     categories.forEach((category) => {
//       category.subcategories.forEach((subcategory) => {
//         subcategory.products.forEach((product) => {
//           allProducts.push({
//             ...product.toObject(),
//             category: category.name,
//             subcategory: subcategory.name,
//           });
//         });
//       });
//     });

//     res.json({ products: allProducts });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch products" });
//   }
// });

// app.delete("/api/products/delete/:id", async (req, res) => {
//   const productId = req.params.id;

//   try {
//     const category = await Subproduct.findOne({ "subcategories.products._id": productId });
//     if (!category) return res.status(404).json({ message: "Product not found" });

//     for (let subcategory of category.subcategories) {
//       const originalLength = subcategory.products.length;
//       subcategory.products = subcategory.products.filter(p => p._id.toString() !== productId);
//       if (subcategory.products.length < originalLength) break;
//     }

//     await category.save();
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error deleting product" });
//   }
// });

// app.put("/api/products/update-product/:id", upload.fields([
//   { name: "mainImage", maxCount: 1 },
//   { name: "subImages", maxCount: 10 },
// ]), async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updateData = req.body;

//     const category = await Subproduct.findOne({ "subcategories.products._id": id });
//     if (!category) return res.status(404).json({ error: "Product not found" });

//     for (let subcat of category.subcategories) {
//       const product = subcat.products.id(id);
//       if (product) {
//         // Replace main image
//         if (req.files.mainImage) {
//           if (product.image) {
//             const oldPath = path.join(__dirname, product.image);
//             if (fs.existsSync(oldPath)) deleteFile(oldPath);
//           }
//           updateData.image = `/uploads/products/${req.files.mainImage[0].filename}`;
//         }

//         // Replace sub images
//         if (req.files.subImages) {
//           if (Array.isArray(product.subImages)) {
//             product.subImages.forEach(img => {
//               const oldPath = path.join(__dirname, img);
//               if (fs.existsSync(oldPath)) deleteFile(oldPath);
//             });
//           }
//           updateData.subImages = req.files.subImages.map(file => `/uploads/products/${file.filename}`);
//         }

//         Object.assign(product, updateData);
//         await category.save();

//         return res.json({ success: true, product });
//       }
//     }

//     res.status(404).json({ error: "Product not found in subcategories" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: "Failed to update product" });
//   }
// });

// app.post("/api/categories/:categoryId/subcategories/:subcategoryId/add-product", upload.fields([
//   { name: "image", maxCount: 1 },
//   { name: "subImages", maxCount: 10 }
// ]), async (req, res) => {
//   try {
//     const { categoryId, subcategoryId } = req.params;
//     const { name, product_code, content, price } = req.body;

//     const category = await Subproduct.findById(categoryId);
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     const subcategory = category.subcategories.id(subcategoryId);
//     if (!subcategory) return res.status(404).json({ message: "Subcategory not found" });

//     const product = {
//       name,
//       product_code,
//       content,
//       price: parseFloat(price),
//       image: req.files.image?.[0] ? `/uploads/products/${req.files.image[0].filename}` : "",
//       subImages: req.files.subImages?.map(f => `/uploads/products/${f.filename}`) || [],
//     };

//     subcategory.products.push(product);
//     await category.save();

//     res.status(201).json({ message: "Product added successfully", product });
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// //filter-products
// app.get('/api/filter-products', async (req, res) => {
//   try {
//     const { category, subcategory } = req.query;
//     const filter = {};

//     if (category) filter.name = category;

//     const matchedCategories = await Subproduct.find(filter).lean();
//     const filteredProducts = [];

//     matchedCategories.forEach(cat => {
//       cat.subcategories.forEach(sub => {
//         if (!subcategory || sub.name === subcategory) {
//           sub.products.forEach(prod => {
//             filteredProducts.push({
//               ...prod,
//               category: cat.name,
//               subcategory: sub.name,
//             });
//           });
//         }
//       });
//     });

//     res.json({ products: filteredProducts });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error filtering products' });
//   }
// });

// // --- Other Routes ---

// app.get("/api/categories", async (req, res) => {
//   try {
//     const categories = await Subproduct.find();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch categories" });
//   }
// });

// app.get("/api/:category/:productName", async (req, res) => {
//   try {
//     const { category, productName } = req.params;

//     const cat = await Subproduct.findOne({ name: category });
//     if (!cat) return res.status(404).json({ error: "Category not found" });

//     const subcat = cat.subcategories.find(
//       (sub) => sub.name.toLowerCase() === decodeURIComponent(productName).toLowerCase()
//     );
//     if (!subcat) return res.status(404).json({ error: "Subcategory not found" });

//     res.json(subcat.products || []);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/api/:category/:productName/:subproduct", async (req, res) => {
//   try {
//     const { category, productName, subproduct } = req.params;

//     const doc = await Subproduct.findOne({ name: category });
//     if (!doc) return res.status(404).json({ message: "Category not found" });

//     const subcat = doc.subcategories.find(
//       (s) => s.name.toLowerCase() === productName.toLowerCase()
//     );
//     if (!subcat) return res.status(404).json({ message: "Subcategory not found" });

//     const product = subcat.products.find(
//       (p) => p.name.toLowerCase() === decodeURIComponent(subproduct).toLowerCase()
//     );
//     if (!product) return res.status(404).json({ message: "Product not found" });

//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // --- Banners ---
// app.get("/api/banners", async (req, res) => {
//   try {
//     const banners = await Slide.find();
//     res.json(banners);
//   } catch (err) {
//     res.status(500).json({ message: "Server error fetching banners" });
//   }
// });

// // --- Search ---
// app.get("/api/search", async (req, res) => {
//   const { query } = req.query;
//   if (!query || query.trim() === "") {
//     return res.status(400).json({ error: "Query is required" });
//   }

//   const regex = new RegExp(query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");

//   try {
//     const data = await Subproduct.find();

//     const results = [];
//     data.forEach((cat) => {
//       cat.subcategories.forEach((subcat) => {
//         subcat.products.forEach((prod) => {
//           if (regex.test(prod.name) || regex.test(prod.content)) {
//             results.push({
//               ...prod.toObject(),
//               category: cat.name,
//               subcategory: subcat.name,
//             });
//           }
//         });
//       });
//     });

//     res.json(results);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });



// app.post("/api/register-institute", async (req, res) => {
//   try {
//     const { name, email, phone, address, category, description } = req.body;

//     // Basic validation (optional but recommended)
//     if (!name || !email || !phone || !address || !category) {
//       return res.status(400).json({ error: "Please fill in all required fields." });
//     }

//     const institute = new InstituteData({
//       name,
//       email,
//       phone,
//       address,
//       category,
//       description,
//     });

//     await institute.save();

//     res.status(201).json({
//       message: "Institute data saved successfully",
//       institute,
//     });
//   } catch (error) {
//     console.error("Error saving institute data:", error);
//     res.status(500).json({ error: "Failed to save institute data" });
//   }
// });
// // --- Admin Login ---
// const SECRET_KEY = process.env.JWT_SECRET;
// app.post("/api/login", (req, res) => {
//   const { email, password } = req.body;

//   if (email === "admin@coachingpromo.in" && password === "mfcoachingpromo") {
//     const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
//     return res.json({ token, user: { email } });
//   }

//   res.status(401).json({ message: "Invalid credentials" });
// });

// // Serve frontend
// app.use(express.static(path.join(__dirname, '../frontend/dist')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
// });



// // --- Start Server ---
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
