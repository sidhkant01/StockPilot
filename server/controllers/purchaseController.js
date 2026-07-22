const purchaseService = require("../services/purchaseService");

// Create Purchase
const createPurchase = async (req, res) => {
  try {
    const purchase = await purchaseService.createPurchase(req.body);

    res.status(201).json({
      success: true,
      message: "Purchase created successfully",
      purchase,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Purchases
const getAllPurchases = async (req, res) => {
  try {
    const purchases = await purchaseService.getAllPurchases();

    res.status(200).json({
      success: true,
      purchases,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Purchase
const deletePurchase = async (req, res) => {
  try {
    await purchaseService.deletePurchase(req.params.id);

    res.status(200).json({
      success: true,
      message: "Purchase deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPurchase,
  getAllPurchases,
  deletePurchase,
};