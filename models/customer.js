const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    primaryAddress: {
      type: String,
      trim: true,
    },
    addresslineOne: {
      type: String,
      trim: true,
    },
    addresslineTwo: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    pinCode: {
      type: Number,
      trim: true,
    },
    district: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    isDelete: {
      type: String,
      enum: [1, 0],
      default: 0,
      trim: true,
    },
    isBlock: {
      type: String,
      enum: [1, 0],
      default: 0,
      trim: true,
    },
    isSupplier:{
      type:String,
      enum:[1,0],
      default:0,
      trim:true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("customerMaster", customerSchema);
