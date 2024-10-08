const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI; // Default fallback URI
  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
