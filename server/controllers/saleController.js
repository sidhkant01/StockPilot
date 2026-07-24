const saleService = require("../services/saleService");

// Create Sale
const createSale = async (req, res) => {
  try {
    const sale = await saleService.createSale(req.body);

    res.status(201).json({
      success: true,
      message: "Sale created successfully",
      sale,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Sales
const getAllSales = async (req, res) => {
  try {
    const sales = await saleService.getAllSales();

    res.status(200).json({
      success: true,
      sales,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Sale
const deleteSale = async (req, res) => {
  try {
    await saleService.deleteSale(req.params.id);

    res.status(200).json({
      success: true,
      message: "Sale deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createSale,
  getAllSales,
  deleteSale,
};