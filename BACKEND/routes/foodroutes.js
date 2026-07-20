const express = require('express');
const router = express.Router();
const Food = require('../models/food'); // Make sure your model path and casing is correct

// @route   POST /api/food
// @desc    Create a single food item or bulk insert an array of items
router.post('/', async (req, res) => {
    try {
        // Agar data array [ ] ke roop mein aaya hai
        if (Array.isArray(req.body)) {
            const newFoods = await Food.insertMany(req.body);
            return res.status(201).json({
                message: "All food items added successfully!",
                data: newFoods
            });
        } 
        
        // Agar data single object { } ke roop mein aaya hai
        const { name, description, price, category, imageUrl } = req.body;
        
        if (!name || !price || !category) {
            return res.status(400).json({ error: "Name, price, and category are required" });
        }

        const newFood = new Food({
            name,
            description,
            price,
            category,
            imageUrl
        });

        await newFood.save();
        res.status(201).json({
            message: "Food item added successfully!",
            data: newFood
        });

    } catch (error) {
        res.status(500).json({ error: "Server Error: " + error.message });
    }
});

// @route   GET /api/food
// @desc    Get all food items (Read)
router.get('/', async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ error: "Server Error: " + error.message });
    }
});

module.exports = router;