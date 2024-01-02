const mongoose = require("mongoose");
const paymentAccountSchema = mongoose.Schema(
  {
    customerId:{
      type: mongoose.Schema.Types.ObjectId,
        ref: 'customerMaster',
    },
    accountName: {
      type: String,
      trim: true,
    },
    amount: {
      type: String,
      trim: true,
    },
    isDelete: {
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
module.exports = mongoose.model("accountMaster", paymentAccountSchema);
