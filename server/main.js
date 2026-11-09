import dotenv from "dotenv";
import express from "express";
import colors from "colors";

import connectDB from "#config/db.config.js";
import productRoutes from "#routes/product.route.js";
import { errorHandler } from "#middlewares/error.middleware.js";

import morgan from "morgan";

dotenv.config();

connectDB();

const port = process.env.PORT || 5001;

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Api is running....");
});

app.use("/api/v1/products", productRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${port}`.cyan.bold,
  );
});
