import mongoose, { Mongoose } from "mongoose";

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User's ID is required"],
    ref: "User",
  },

  orderItem: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: String, required: true },
      product: {
        type: Mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "ProductModel",
      },
    },
  ],

  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { true: String, required: true },
  },

  paymentMethod: {
    type: String,
    required: [true, "Payment method is required"],
  },

  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },

  itemsPrice: {
    type: String,
    required: [true, "Items price is required"],
    default: 0.0,
  },

  taxPrice: {
    type: Number,
    required: [true, "Tax price is required"],
  },

  shippingPrice: {
    type: Number,
    required: [true, "Total price is required"],
    default: 0.0,
  },

  isPaid: {
    type: Boolean,
    default: false,
    required: [true, "Payment status is required"],
  },

  paidAt: {
    type: Date,
  },

  isDeliverd: {
    type: Boolean,
    default: false,
    required: [true, "Delivery status is required"],
  },

  deliverdAt: {
    type: Date,
    collection: "orders",
  },
});

const OrderModel = mongoose.model("OrderModel", orderSchema);

export default OrderModel;
