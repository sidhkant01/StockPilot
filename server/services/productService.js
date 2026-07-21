const Product = require("../models/Product");

// Create Product
const createProduct = async (productData) => {
  return await Product.create(productData);
};

// Get All Products
const getAllProducts = async () => {
  return await Product.find();
};

module.exports = {
  createProduct,
  getAllProducts,
};