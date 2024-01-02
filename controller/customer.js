const Customer = require("../models/customer");

/****************** Create Customer *************************/

exports.createcustomer = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      primaryAddress,
      addresslineOne,
      addresslineTwo,
      city,
      pinCode,
      district,
      state,
      isSupplier,
    } = req.body;

    const customer = await Customer.create({
      name,
      phone,
      email,
      primaryAddress,
      addresslineOne,
      addresslineTwo,
      city,
      pinCode,
      district,
      state,
      isSupplier,
    });

    return res.status(200).json({ error: false, data: customer });
  } catch (error) {
    return res.status(400).json({ error: true, message: error.message });
  }
};

/*************** Get Customers ***************/

exports.getcustomer = async (req, res) => {
  try {
    const getcustomer = await Customer.find({
      isDelete: "0",
      isBlock: "0",
    }).sort({ createdAt: -1 });

    return res.status(200).json({ error: false, data: getcustomer });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/***************  Get Customer By Id  ***************/

exports.getcustomerbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const getcustomerbyid = await Customer.findById(id).sort({ createdAt: -1 });

    return res.status(200).json({ error: false, data: getcustomerbyid });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/********** Update Customer By Id ***********/

exports.updatecustomerbyid = async (req, res) => {
  try {
    const { id } = req.params;

    const updatecustomer = await Customer.findByIdAndUpdate(id, req.body, {new: true,});

    return res.status(200).json({
      error: false,
      data: updatecustomer,
    });
  } catch (error) {
    return res.status(400).json({ error, message: error.message });
  }
};

/*************** Delete Customer By Id ***************/

exports.deletecustomerbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const deletecustomer = await Customer.findByIdAndUpdate(
      id,
      { isDelete: 1 },
      { new: true }
    );

    return res.status(200).json({ error: false, data: deletecustomer });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
 
/*************** Block Customer By Id ***************/

exports.blockcustomerbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const blockcustomer = await Customer.findByIdAndUpdate(
      id,
      { isBlock: 1 },
      { new: true }
    );
    return res.status(200).json({ error: false, data: blockcustomer });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/********************* Convert Customer to Supplier *************************/

exports.converttosupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Customer.findByIdAndUpdate(
      id,
      { isSupplier: 1 },
      { new: true }
    );
    return res.status(200).json({ error: false, data: supplier });
  } catch (error) {
    return res.status(400).json(error);
  }
};
