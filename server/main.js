import dotenv from "dotenv";
import express from "express";

import connectDB from "#config/db.config.js";
import products from "#data/products.data.js";
import morgan from "morgan";

dotenv.config();

connectDB();

const port = process.env.PORT || 5001;

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Api is running....");
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:id", (req, res) => {
  const product = products.find((prod) => prod._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`);
});
