const paymentaccount = require("../models/paymentaccountmaster");

/************************** Add Payment Account **********************/

exports.addpaymentAccount = async (req, res) => {
  try {
    const { customerId, amount, accountName } = req.body;

    const account = await paymentaccount.create({
      customerId,
      amount,
      accountName,
    });

    return res.status(200).json({
      error: false,
      data: account,
    });
  } catch (error) {
    return res.status(400).json({ error: true, message: error.message });
  }
};

/*************************** Get Payment Account  *************************/

exports.getpaymentAccount = async (req, res) => {
  try {
    const getAccount = await paymentaccount
      .find({ isDelete: "0" })
      .sort({ createdAt: -1 });
    return res.status(200).json({ error: false, data: getAccount });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/***************  Get Payment Account By Id  ****************************/

exports.getpaymentAccountById = async (req, res) => {
  try {
    const { id } = req.params;
    const getAccountById = await paymentaccount
      .findById(id)
      .sort({ createdAt: -1 });
    return res.status(200).json({ error: false, data: getAccountById });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**************** Update Payment Account By Id ***************/

exports.updatepaymentAccountById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateAccount = await paymentaccount.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json({ error: false, data: updateAccount });
  } catch (error) {
    return res.status(400).json({ error, message: error.message });
  }
};

/******************* Delete Payment Account By Id ************************/

exports.deletepaymentAccountById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAccount = await paymentaccount.findByIdAndUpdate(
      id,
      { isDelete: 1 },
      { new: true }
    );
    return res.status(200).json({ error: false, data: deleteAccount });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
