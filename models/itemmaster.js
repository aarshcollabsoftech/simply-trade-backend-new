const mongoose = require("mongoose");
const itemSchema = mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customerMaster",
    },
    invoiceNumber: {
      type: String,
      trim: true,
    },
    model: {
      type: String,
      trim: true,
    },
    imeiNumber: {
      type: String,
      required: true,
    },
    serialNumber: {
      type: String,
      trim: true,
    },
    gb: {
      type: String,
      trim: true,
    },
    amount: {
      type: String,
      trim: true,
    },
    paymentDetails: {
      type: Array,
      default: Array,
    },
    attachmentDetails: {
      type: Array,
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
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("itemMaster", itemSchema);
   



