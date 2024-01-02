const Org = require("../models/organization");

/*************** Create Organization  ***************/

exports.createorg = async (req, res) => {
  try {
    const {
      adminId,
      GSTIN,
      orgName,
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
      companyRegType,
      dealingCurrency,
      financialYear,
      defaultStockCalcMethod,
      uploadDocs,
    } = req.body;

    const findEmail = await Org.find({ email });

    if (findEmail && findEmail.length > 0) {
      return res
        .status(400)
        .json({ error: false, message: "Email already exists" });
    }

    const org = await Org.create({
      adminId,
      GSTIN,
      orgName,
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
      companyRegType,
      dealingCurrency,
      financialYear,
      defaultStockCalcMethod,
      uploadDocs,
    });

    return res.status(200).json({ error: false, data: org });
  } catch (error) {
    return res.status(400).json({ error, message: "Something went wrong" });
  }
};

/*************** Get  Organization  By Admin Id ***************/

exports.getorgbyadminid = async (req, res) => {
  const { aId } = req.params;

  try {
    const gorgbyadmin = await Org.find({ adminId: aId, isDelete: "0" }).sort({
      createdAt: -1,
    });

    return res.status(200).json({ error: false, data: gorgbyadmin });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

/*************** Get  Organization  ***************/  

exports.getorg = async (req, res) => {
  try {
    const gorg = await Org.find({ isDelete: "0" }).sort({ createdAt: -1 });

    return res.status(200).json({ error: false, data: gorg });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/*************** Get  Organization  By  Id ***************/

exports.getorgbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const gidorg = await Org.findById(id).sort({ createdAt: -1 });
    return res.status(200).json({ error: false, data: gidorg });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/*************** Update Organization  By  Id ***************/

exports.updateorgbyid = async (req, res) => {
  try {
    const { id } = req.params;

    const uidorg = await Org.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ error: false, data: uidorg });
  } catch (error) {
    return res.status(400).json({ error, message: "Something went wrong" });
  }
};

/*************** Delete Organization By Id ***************/
exports.deleteorgbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const dorg = await Org.findByIdAndUpdate(
      id,
      { isDelete: 1 },
      { new: true }
    );
    return res.status(200).json({ error: false, data: dorg });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/*************** Block  Organization By Id   ***************/

exports.blockorgbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const borg = await Org.findByIdAndUpdate(id, { isBlock: 1 }, { new: true });
    return res.status(200).json({ error: false, data: borg });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
