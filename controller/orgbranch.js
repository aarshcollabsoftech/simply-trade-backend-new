const orgBranch = require("../models/orgbranch");

/**********************   Create Organization Branch *********/

exports.createorgbranch = async (req, res) => {
  try {
    const {
      organizationId,
      branchName,
      primaryAddress,
      addresslineOne,
      addresslineTwo,
      city,
      pinCode,
      district,
      state,
      country,
      mobile,
      telephone,
      email,
    } = req.body;

    const branchdata = await orgBranch.create({
      organizationId,
      branchName,
      primaryAddress,
      addresslineOne,
      addresslineTwo,
      city,
      pinCode,
      district,
      state,
      country,
      mobile,
      telephone,
      email,
    });
    return res
      .status(200)
      .json({
        error: false,
        data: branchdata,
        message: "Branch Created Successfully",
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

/********************** Get  Organization Branch By Organization Id *********/

exports.getbranchbyorgid = async (req, res) => {
  const { oId } = req.params;
  try {
    const getbranchbyorgid = await orgBranch
      .find({ organizationId: oId, isDelete: "0" })
      .sort({ createdAt: -1 });
    return res.status(200).json({ error: false, data: getbranchbyorgid });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

/**************************Get  Organization Branch By Id ********************************/

exports.getorgbranchbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const getorgbranchbyid = await orgBranch
      .findById(id)
      .sort({ createdAt: -1 });
    return res.status(200).json({ error: false, data: getorgbranchbyid });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/*************** Get  Organization  Branch ***************/

exports.getorgbranch = async (req, res) => {
  try {
    const getorgbranch = await orgBranch
      .find({ isDelete: "0" })
      .sort({ createdAt: -1 });
    return res.status(200).json({ error: false, data: getorgbranch });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/*************** Update Organization Branch ********************/

exports.updateorgbranchbyid = async (req, res) => {
  try {
    const { id } = req.params;

    const updateorgbranchbyid = await orgBranch.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    return res.status(200).json({ error: false, data: updateorgbranchbyid });
  } catch (error) {
    return res.status(400).json({ error, message: "Something went wrong" });
  }
};

/*************** Delete Organization Branch ***************/

exports.deleteorgbranchbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const dorg = await orgBranch.findByIdAndUpdate(
      id,
      { isDelete: 1 },
      { new: true }
    );
    return res.status(200).json({ error: false, data: dorg });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/*************** Block  Organization Branch  ***************/

exports.blockorgbranchbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const borg = await orgBranch.findByIdAndUpdate(
      id,
      { isBlock: 1 },
      { new: true }
    );
    return res.status(200).json({ error: false, data: borg });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
