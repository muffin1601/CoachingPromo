const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Subproduct = require('../models/product');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = "uploads/subcategories";
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, ''));
  },
});
const upload = multer({ storage });

router.post("/add-subcategory", upload.single("image"), async (req, res) => {
  try {
    const { categoryId, name } = req.body;
    const file = req.file;

    const category = await Subproduct.findById(categoryId);
    if (!category) return res.status(404).json({ error: "Category not found" });

    const exists = category.subcategories.find(s => s.name.toLowerCase() === name.toLowerCase());
    if (exists) return res.status(409).json({ error: "Subcategory already exists" });

    const newSub = {
      name,
      image: `/uploads/subcategories/${file.filename}`,
      price: null,
      products: [],
    };

    category.subcategories.push(newSub);
    await category.save();

    res.status(201).json({ message: "Subcategory added", subcategory: newSub });
  } catch (error) {
    res.status(500).json({ error: "Server error while adding subcategory" });
  }
});

router.put("/edit-subcategory/:categoryId/:subcategoryName", upload.single("image"), async (req, res) => {
  try {
    const { categoryId, subcategoryName } = req.params;
    const { name: newName } = req.body;
    const file = req.file;

    const category = await Subproduct.findById(categoryId);
    if (!category) return res.status(404).json({ error: "Category not found" });

    const sub = category.subcategories.find(s => s.name.toLowerCase() === subcategoryName.toLowerCase());
    if (!sub) return res.status(404).json({ error: "Subcategory not found" });

    if (newName) sub.name = newName;
    if (file) sub.image = `/uploads/subcategories/${file.filename}`;

    await category.save();

    res.status(200).json({ message: "Subcategory updated successfully", subcategory: sub });
  } catch (error) {
    res.status(500).json({ error: "Server error while updating subcategory" });
  }
});

router.get("/get-subcategories/:categoryId", async (req, res) => {
  try {
    const category = await Subproduct.findById(req.params.categoryId);
    if (!category) return res.status(404).json({ error: "Category not found" });

    res.json(category.subcategories);
  } catch (err) {
    res.status(500).json({ error: "Server error fetching subcategories" });
  }
});

router.delete("/delete-subcategory/:categoryId/:subcategoryName", async (req, res) => {
  try {
    const { categoryId, subcategoryName } = req.params;

    const category = await Subproduct.findById(categoryId);
    if (!category) return res.status(404).json({ error: "Category not found" });

    category.subcategories = category.subcategories.filter(
      sub => sub.name.toLowerCase() !== subcategoryName.toLowerCase()
    );

    await category.save();

    res.json({ message: "Subcategory deleted", category });
  } catch (err) {
    res.status(500).json({ error: "Server error deleting subcategory" });
  }
});

module.exports = router;
