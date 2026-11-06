import mongoose from "mongoose";

// Review Schema

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User's ID is required"],
      ref: "User",
    },

    name: {
      type: String,
      required: [true, "User's name is required"],
      trim: true,
    },

    rating: {
      type: Number,
      required: [true, "Review rating is required"],
      min: [1, "Rating must be at least 1"],
      max: [1, "Rating must be at least 5"],
    },

    comment: {
      type: String,
      required: [true, "User's comment is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// Product Schema

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User's ID is required"],
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },

    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
    },

    image: {
      type: String,
      required: [true, "Product image is required"],
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Product category name is required"],
      trim: true,
    },

    brand: {
      type: String,
      required: [true, "Product brand name is required"],
      trim: true,
    },

    countInStock: {
      type: Number,
      required: [true, "Product count in stock is required"],
      default: 0,
      min: [0, "Stock cannot be negative"],
    },

    rating: {
      type: Number,
      default: 0,
      min: [1, "Rating cannot be less than 1"],
      max: [5, "Rating cannot exceed 5"],
    },

    content: {
      type: String,
      required: [true, "Product content is required"],
      trim: true,
    },

    reviews: [reviewSchema],
  },

  {
    timestamps: true,
    collection: "products",
  },
);

const ProductModel = mongoose.model("ProductModel", productSchema);

export default ProductModel;
