const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Subproduct = require("../models/product");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = "uploads/products";
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, ""));
  },
});
const upload = multer({ storage });

const deleteFile = (filepath) => {
  fs.unlink(filepath, (err) => {
    if (err) console.error("Failed to delete file:", filepath, err.message);
  });
};

router.get("/getproducts", async (req, res) => {
  try {
    const categories = await Subproduct.find();
    const allProducts = [];

    categories.forEach((category) => {
      category.subcategories.forEach((subcategory) => {
        subcategory.products.forEach((product) => {
          allProducts.push({
            ...product.toObject(),
            category: category.name,
            subcategory: subcategory.name,
          });
        });
      });
    });

    res.json({ products: allProducts });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.delete("/products/delete/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const category = await Subproduct.findOne({ "subcategories.products._id": productId });
    if (!category) return res.status(404).json({ message: "Product not found" });

    for (let subcategory of category.subcategories) {
      const originalLength = subcategory.products.length;
      subcategory.products = subcategory.products.filter(p => p._id.toString() !== productId);
      if (subcategory.products.length < originalLength) break;
    }

    await category.save();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error deleting product" });
  }
});

router.put("/products/update-product/:id", upload.fields([
  { name: "mainImage", maxCount: 1 },
  { name: "subImages", maxCount: 10 },
]), async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const category = await Subproduct.findOne({ "subcategories.products._id": id });
    if (!category) return res.status(404).json({ error: "Product not found" });

    for (let subcat of category.subcategories) {
      const product = subcat.products.id(id);
      if (product) {
        if (req.files.mainImage) {
          if (product.image) {
            const oldPath = path.join(__dirname, "..", product.image);
            if (fs.existsSync(oldPath)) deleteFile(oldPath);
          }
          updateData.image = `/uploads/products/${req.files.mainImage[0].filename}`;
        }

        if (req.files.subImages) {
          product.subImages.forEach((img) => {
            const oldPath = path.join(__dirname, "..", img);
            if (fs.existsSync(oldPath)) deleteFile(oldPath);
          });
          updateData.subImages = req.files.subImages.map(
            (file) => `/uploads/products/${file.filename}`
          );
        }

        Object.assign(product, updateData);
        await category.save();

        return res.json({ success: true, product });
      }
    }

    res.status(404).json({ error: "Product not found in subcategories" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to update product" });
  }
});

router.post("/categories/:categoryId/subcategories/:subcategoryId/add-product", upload.fields([
  { name: "image", maxCount: 1 },
  { name: "subImages", maxCount: 10 },
]), async (req, res) => {
  try {
    const { categoryId, subcategoryId } = req.params;
    const { name, product_code, content, price } = req.body;

    const category = await Subproduct.findById(categoryId);
    if (!category) return res.status(404).json({ message: "Category not found" });

    const subcategory = category.subcategories.id(subcategoryId);
    if (!subcategory) return res.status(404).json({ message: "Subcategory not found" });

    const product = {
      name,
      product_code,
      content,
      price: parseFloat(price),
      image: req.files.image?.[0] ? `/uploads/products/${req.files.image[0].filename}` : "",
      subImages: req.files.subImages?.map(f => `/uploads/products/${f.filename}`) || [],
    };

    subcategory.products.push(product);
    await category.save();

    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get('/filter-products', async (req, res) => {
  try {
    const { category, subcategory } = req.query;
    const filter = {};

    if (category) filter.name = category;

    const matchedCategories = await Subproduct.find(filter).lean();
    const filteredProducts = [];

    matchedCategories.forEach(cat => {
      cat.subcategories.forEach(sub => {
        if (!subcategory || sub.name === subcategory) {
          sub.products.forEach(prod => {
            filteredProducts.push({
              ...prod,
              category: cat.name,
              subcategory: sub.name,
            });
          });
        }
      });
    });

    res.json({ products: filteredProducts });
  } catch (error) {
    res.status(500).json({ error: 'Server error filtering products' });
  }
});

router.get("/:category/:productName", async (req, res) => {
  try {
    const { category, productName } = req.params;

    const cat = await Subproduct.findOne({ name: category });
    if (!cat) return res.status(404).json({ error: "Category not found" });

    const subcat = cat.subcategories.find(
      (sub) => sub.name.toLowerCase() === decodeURIComponent(productName).toLowerCase()
    );
    if (!subcat) return res.status(404).json({ error: "Subcategory not found" });

    res.json(subcat.products || []);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:category/:productName/:subproduct", async (req, res) => {
  try {
    const { category, productName, subproduct } = req.params;

    const doc = await Subproduct.findOne({ name: category });
    if (!doc) return res.status(404).json({ message: "Category not found" });

    const subcat = doc.subcategories.find(
      (s) => s.name.toLowerCase() === productName.toLowerCase()
    );
    if (!subcat) return res.status(404).json({ message: "Subcategory not found" });

    const product = subcat.products.find(
      (p) => p.name.toLowerCase() === decodeURIComponent(subproduct).toLowerCase()
    );
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
