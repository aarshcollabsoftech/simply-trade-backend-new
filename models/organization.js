const mongoose = require("mongoose");

const orgSchema = new mongoose.Schema(
  {
    // adminId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'user', 
    // },
    GSTIN: {
      type: String,
      trim: true,
    },
    orgName: {
      type: String,
      trim: true,
    },
    primaryAddress: {
      type: String,
      trim: true,
    },
    addresslineOne: {
      type: String,
      trim:  true,
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
      type: String,
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
    country: {
      type: String,
      trim: true,
    },
    mobile: {
      type: String,
      trim: true,
    },
    telephone: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    companyRegType: {
      type: String,
      trim: true,
    },
    dealingCurrency: {
      type: String,
      trim: true,
    },
    financialYear: {
      type: String,
      trim: true,
    },
    defaultStockCalcMethod: {
      type: String,
      trim: true,
    },
    uploadDocs: {
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
    isAccess: {
      type: Array,
      default: Array,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("organization",orgSchema)
