const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    adminId: {
      type: String,
      default: null,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    isBlock: {
      type: String,
      enum: [1, 0],
      default: 0,
      trim: true,
    },
    isDelete: {
      type: String,
      enum: [1, 0],
      default: 0,
      trim: true,
    },
    role: {
      type: String,
      enum: ["SA", "A", "U"],
      default: "U",
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
