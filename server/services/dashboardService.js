const Product = require("../models/Product");

const getDashboardStats = async () => {
  // Total Products
  const totalProducts = await Product.countDocuments({
    isActive: true,
  });

  // Low Stock (<10)
  const lowStockProducts = await Product.countDocuments({
    stock: { $lt: 10 },
    isActive: true,
  });

  // Out of Stock
  const outOfStockProducts = await Product.countDocuments({
    stock: 0,
    isActive: true,
  });

  // Inventory Value
  const products = await Product.find({ isActive: true });

  const totalInventoryValue = products.reduce((total, product) => {
    return total + product.price * product.stock;
  }, 0);

  // Categories
  const totalCategories = await Product.distinct("category");

  return {
    totalProducts,
    lowStockProducts,
    outOfStockProducts,
    totalInventoryValue,
    totalCategories: totalCategories.length,
  };
};

module.exports = {
  getDashboardStats,
};