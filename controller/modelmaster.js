const modelSchema = require("../models/modelmaster");

/*************** Create Model ************************/

exports.addModel = async (req, res) => {
  try {
    const { modelName } = req.body;

    const Model = await modelSchema.create({
      modelName,
    });

    return res.status(200).json({
      error: false,
      data: Model,
    });
  } catch (error) {
    return res.status(400).json({ error: true, message: error.message });
  }
};

/*************** Get Model ***************/

exports.getModel = async (req, res) => {
  try {
    const Model = await modelSchema
      .find({
        isDelete: "0",
      })
      .sort({
        createdAt: -1,
      });

    return res.status(200).json({ error: false, data: Model });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/***************  Get Model By Id  ***************/
exports.getModelById = async (req, res) => {
  try {
    const { id } = req.params;
    const Model = await modelSchema.findById(id).sort({ createdAt: -1 });

    return res.status(200).json({ error: false, data: Model });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/********** Update Model By Id ***********/

exports.updateModelById = async (req, res) => {
  try {
    const { id } = req.params;

    const Model = await modelSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).json({
      error: false,
      data: Model,
    });
  } catch (error) {
    return res.status(400).json({ error, message: error.message });
  }
};

/*************** Delete Model By Id ***************/

exports.deleteModelById = async (req, res) => {
  try {
    const { id } = req.params;
    const Model = await modelSchema.findByIdAndUpdate(
      id,
      { isDelete: 1 },
      { new: true }
    );
    return res.status(200).json({ error: false, data: Model });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
