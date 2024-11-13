// const mongoose = require("mongoose");
// // MongoDB connection
// mongoose
//   .connect(
//     "mongodb+srv://khadeejah:khadeejah@cluster0.mongodb.net/test?retryWrites=true&w=majority"
//   )

//   // mongoose
//   //   .connect("mongodb+srv://khadeejah:khadeejah@cluster0.pwlxf.mongodb.net/")
//   //   // i think this line should be added to save the data in the write folder (BankingAPI?retryWrites=true&w=majority)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("MongoDB connection error:", error));
// index.js
const mongoose = require("mongoose");

// MongoDB connection
// mongoose
//   .connect(
//     "mongodb+srv://khadeejah:khadeejah@cluster0.mongodb.net/test?retryWrites=true&w=majority",
//     { serverSelectionTimeoutMS: 30000 } // 30 seconds timeout
//   )
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("MongoDB connection error:", error));
mongoose
  .connect("mongodb+srv://khadeejah:khadeejah@cluster0.pwlxf.mongodb.net/", {
    serverSelectionTimeoutMS: 30000,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

module.exports = mongoose;
