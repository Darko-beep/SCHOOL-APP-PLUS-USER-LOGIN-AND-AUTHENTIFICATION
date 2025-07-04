// File: config/dbConnect.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load variables from .env

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DATABASE CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error("❌ DATABASE CONNECTION FAILED:", error.message);
  }
};

dbConnect();





