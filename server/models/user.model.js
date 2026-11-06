import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User's full name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "User's email address is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "User's password is required"],
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: "users",
  },
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
