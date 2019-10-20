const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Express App
const app = express();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log(`Server started at port ${process.env.NODE_ENV} on port ${PORT}`);
});
