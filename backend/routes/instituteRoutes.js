const express = require('express');
const InstituteData = require('../models/institutedata');
const router = express.Router();

router.post("/register-institute", async (req, res) => {
  try {
    const { name, email, phone, address, category, description } = req.body;

    if (!name || !email || !phone || !address || !category) {
      return res.status(400).json({ error: "Please fill in all required fields." });
    }

    const institute = new InstituteData({
      name,
      email,
      phone,
      address,
      category,
      description,
    });

    await institute.save();

    res.status(201).json({
      message: "Institute data saved successfully",
      institute,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to save institute data" });
  }
});

module.exports = router;
