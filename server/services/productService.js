const Product = require("../models/Product");

// Create Product
const createProduct = async (productData) => {
  const product = await Product.create(productData);
  return product;
};

// Get All Products (Search + Filter + Pagination)
const getAllProducts = async (query) => {
  const {
    search = "",
    category,
    brand,
    page = 1,
    limit = 10,
  } = query;

  const filter = {
    isActive: true,
  };

  // Search by product name
  if (search) {
    filter.name = {
      $regex: search,
      $options: "i",
    };
  }

  // Filter by category
  if (category) {
    filter.category = category;
  }

  // Filter by brand
  if (brand) {
    filter.brand = brand;
  }

  const products = await Product.find(filter)
    .skip((Number(page) - 1) * Number(limit))
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  const total = await Product.countDocuments(filter);

  return {
    products,
    total,
    currentPage: Number(page),
    totalPages: Math.ceil(total / Number(limit)),
  };
};

// Update Product
const updateProduct = async (id, productData) => {
  return await Product.findByIdAndUpdate(id, productData, {
    new: true,
    runValidators: true,
  });
};

// Delete Product
const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};