const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

const port = process.env.PORT;
const mongoUri = process.env.MONGODB_URI;

mongoose
  .connect(mongoUri)
  .then(() => console.log("connection established successfully"))
  .catch((err) => console.log("Erron in establishing connection", err));

app.use(bodyParser.json());
app.use(cors());
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
