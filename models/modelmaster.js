const mongoose = require("mongoose");
const modelSchema = mongoose.Schema(
  {
    modelName: {
      type: String,
      unique:true,
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
module.exports = mongoose.model("modelMaster", modelSchema);
