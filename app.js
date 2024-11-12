//let accounts = require('./accounts');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// MongoDB connection
mongoose
  .connect("mongodb+srv://khadeejah:khadeejah@cluster0.pwlxf.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));
const accountsRoutes = require("./api/accounts/accounts.routes");

app.use(express.json());

app.use("/accounts", accountsRoutes);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
