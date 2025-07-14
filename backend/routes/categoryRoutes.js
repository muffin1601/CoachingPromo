const express = require('express');
const Subproduct = require('../models/product');
const router = express.Router();

router.get("/categories", async (req, res) => {
  try {
    const categories = await Subproduct.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

router.post("/add-category", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Category name is required" });
    }

    const newCategory = new Subproduct({ name, subcategories: [] });
    await newCategory.save();
    res.status(201).json({ message: "Category added", category: newCategory });
  } catch (err) {
    res.status(500).json({ error: "Server error while adding category" });
  }
});

router.put("/update-category/:id", async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    if (!name?.trim()) return res.status(400).json({ error: "Category name is required" });

    const category = await Subproduct.findById(id);
    if (!category) return res.status(404).json({ error: "Category not found" });

    category.name = name;
    await category.save();

    res.json({ message: "Category updated successfully", category });
  } catch (error) {
    res.status(500).json({ error: "Failed to update category" });
  }
});

router.delete("/delete-category/:id", async (req, res) => {
  try {
    const deleted = await Subproduct.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Category not found" });
    res.status(200).json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error deleting category" });
  }
});

router.get("/get-categories", async (req, res) => {
  try {
    const categories = await Subproduct.find({}, "name");
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: "Server error fetching categories" });
  }
});

router.get("/related-subcategories/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const categoryDoc = await Subproduct.findOne({ name: category });

    if (!categoryDoc) return res.status(404).json({ message: "Category not found" });

    res.json(categoryDoc.subcategories);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
