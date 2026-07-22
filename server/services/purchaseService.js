const Purchase = require("../models/Purchase");
const Product = require("../models/Product");

// Create Purchase
const createPurchase = async (purchaseData) => {
  // Product exists?
  const product = await Product.findById(purchaseData.product);

  if (!product) {
    throw new Error("Product not found");
  }

  // Increase Stock
  product.stock += Number(purchaseData.quantity);

  await product.save();

  // Save Purchase
  const purchase = await Purchase.create(purchaseData);

  return purchase;
};

// Get All Purchases
const getAllPurchases = async () => {
  return await Purchase.find()
    .populate("product", "name category brand")
    .populate("supplier", "supplierName companyName")
    .sort({ createdAt: -1 });
};

// Delete Purchase
const deletePurchase = async (id) => {
  const purchase = await Purchase.findById(id);

  if (!purchase) {
    throw new Error("Purchase not found");
  }

  // Reduce stock again
  const product = await Product.findById(purchase.product);

  if (product) {
    product.stock -= purchase.quantity;

    if (product.stock < 0) {
      product.stock = 0;
    }

    await product.save();
  }

  await Purchase.findByIdAndDelete(id);

  return purchase;
};

module.exports = {
  createPurchase,
  getAllPurchases,
  deletePurchase,
};