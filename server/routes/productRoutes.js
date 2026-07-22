const express = require("express");

const router = express.Router();

const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Create Product (Admin only)
router.post(
  "/",
  protect,
  authorize("admin"),
  createProduct
);

// Get All Products
router.get(
  "/",
  protect,
  getAllProducts
);

// Update Product (Admin only)
router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateProduct
);

// Delete Product (Admin only)
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteProduct
);

module.exports = router;