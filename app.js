const express = require("express");
const app = express();
const DB = require("./DB");
require("./DB");

const accountsRoutes = require("./api/accounts/accounts.routes");

app.use(express.json());

app.use("/accounts", accountsRoutes);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
