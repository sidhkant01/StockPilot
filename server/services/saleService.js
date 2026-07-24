const Sale = require("../models/Sale");
const Product = require("../models/Product");

// Create Sale
const createSale = async (saleData) => {
  // Find Product
  const product = await Product.findById(saleData.product);

  if (!product) {
    throw new Error("Product not found");
  }

  // Check Stock
  if (product.stock < saleData.quantity) {
    throw new Error("Insufficient stock");
  }

  // Decrease Stock
  product.stock -= Number(saleData.quantity);
  await product.save();

  // Calculate Total Amount
  const totalAmount =
    Number(saleData.quantity) * Number(saleData.sellingPrice);

  // Save Sale
  const sale = await Sale.create({
    ...saleData,
    totalAmount,
  });

  return sale;
};

// Get All Sales
const getAllSales = async () => {
  return await Sale.find()
    .populate("product", "name category brand")
    .sort({ createdAt: -1 });
};

// Delete Sale
const deleteSale = async (id) => {
  const sale = await Sale.findById(id);

  if (!sale) {
    throw new Error("Sale not found");
  }

  // Restore Stock
  const product = await Product.findById(sale.product);

  if (product) {
    product.stock += sale.quantity;
    await product.save();
  }

  await Sale.findByIdAndDelete(id);

  return sale;
};

module.exports = {
  createSale,
  getAllSales,
  deleteSale,
};