const express = require('express');
const Subproduct = require('../models/product');
const router = express.Router();

router.get("/search", async (req, res) => {
  const { query } = req.query;

  if (!query || query.trim() === "") {
    return res.status(400).json({ error: "Query is required" });
  }

  const regex = new RegExp(query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");

  try {
    const data = await Subproduct.find();
    const results = [];

    data.forEach((cat) => {
      cat.subcategories.forEach((subcat) => {
        subcat.products.forEach((prod) => {
          if (regex.test(prod.name) || regex.test(prod.content)) {
            results.push({
              ...prod.toObject(),
              category: cat.name,
              subcategory: subcat.name,
            });
          }
        });
      });
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
