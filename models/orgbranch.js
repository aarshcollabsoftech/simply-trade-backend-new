const mongoose = require("mongoose");

const orgbranchSchema = new mongoose.Schema(
  {
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'organization', 
      required: true,
    },
    branchName: {
      type: String,
      trim: true,
      required: true,
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
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("orgbranch", orgbranchSchema);
