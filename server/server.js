const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/login", loginRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
