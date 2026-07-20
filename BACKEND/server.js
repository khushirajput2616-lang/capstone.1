const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // CORS ko require kiya
require('dotenv').config();

const foodRoutes = require('./routes/foodroutes'); // Make sure path and casing are correct

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // <-- Sabse zaroori: Frontend errors ko rokne ke liye
app.use(express.json());

// Routes
app.use('/api/food', foodRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/craveexpress')
    .then(() => {
        console.log("MongoDB connected successfully!");
        app.listen(PORT, () => {
            console.log(`Server is running running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });