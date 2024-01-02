const Items = require("../models/itemmaster");
const paymentaccountmaster = require("../models/paymentaccountmaster");

exports.createItem = async (req, res) => {
  try {
    // single  
    const {
      customerId,
      phones,
      invoiceNumber,
      model,
      imeiNumber,
      serialNumber,
      gb,
      amount,
      paymentDetails,
      attachmentDetails,
    } = req.body;

    let lowbalance = false;
    //multiple 
    if (phones) {
      for (const phone of phones) {
        const {
          invoiceNumber,
          model,
          imeiNumber,
          serialNumber,
          gb,
          amount,
          paymentDetails,
          attachmentDetails,
        } = phone;

        for (const element of paymentDetails) {
          let payer = await paymentaccountmaster.findById(element.paymentAccount);
          const paymentdifference = payer.amount - element.paymentAmount;

          if (paymentdifference < 0 || payer.amount < element.paymentAmount) {
            lowbalance = true;
            break;
          } else {
            payer.amount = paymentdifference;
            await payer.save();
          }
        }

        if (lowbalance) {
          return res.status(400).json({ error: true, message: "Your Payment Account has reached its Minimum limit." });
        }
         // multiple create
        await Items.create({
          customerId,
          invoiceNumber,
          model,
          imeiNumber,
          serialNumber,
          gb,
          amount,
          paymentDetails,
          attachmentDetails,
        });
      
      }
      // single create 
      // llll
    }
    else{
    for (const element of paymentDetails) {
      let payer = await paymentaccountmaster.findById(element.paymentAccount);
      const paymentdifference = payer.amount - element.paymentAmount;
      
      if (paymentdifference < 0 || payer.amount < element.paymentAmount) {
        lowbalance = true;
        break;
      }
       else {
        payer.amount = paymentdifference;
        await payer.save();
      }
    }

    if (lowbalance) {
      return res.status(400).json({ error: true, message: "Your Payment Account has reached its Minimum limit." });
    }
      for (const element of imeiNumber) {
        await Items.create({
          customerId,
          invoiceNumber,
          model,
          imeiNumber: element,
          serialNumber,
          gb,
          amount,
          paymentDetails,
          attachmentDetails,
        });
      }
      
    }
  return res.status(200).json({ error: false, data: "Phones Sold" });
} catch (error) {
  console.log(error);
  return res.status(400).json(error);
}
};
        


/********************** Get Items ********************/

exports.getItem = async (req, res) => {
  try {
    const getitem = await Items.find({ isDelete: "0", isBlock: "0" }).sort({
      createdAt: -1,
    });

    return res.status(200).json({ error: false, data: getitem });
  } catch (error) {
    return res.status(400).json(error);
  }
};

/****************** Get Items By Id ********************/

exports.getItemsById = async (req, res) => {
  try {
    const { id } = req.params;
    const getitemsbyid = await Items.findById(id).sort({ createdAt: -1 });
    return res.status(200).json({ error: false, data: getitemsbyid });
  } catch (error) {
    return res.status(400).json(error);
  }
};

/******************* Update Items By Id **********************/

exports.updateItemsById = async (req, res) => {
  try {
    const { id } = req.params;

    const updateitems = await Items.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).json({
      error: false,
      data: updateitems,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

/************************** Delete Items By Id ******************/

exports.deleteItemsById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteitems = await Items.findByIdAndUpdate(
      id,
      { isDelete: 1 },
      { new: true }
    );
    return res.status(200).json({ error: false, data: deleteitems });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/******************** Block Items By Id  ******************************/

exports.blockItemsById = async (req, res) => {
  try {
    const { id } = req.params;
    const blockitems = await Items.findByIdAndUpdate(
      id,
      { isBlock: 1 },
      { new: true },
    );
    return res.status(200).json({ error: false, data: blockitems });
  } catch (error) {
    return res.status(400).json({ error });
  }
}


