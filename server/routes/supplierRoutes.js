const express = require("express");
const router = express.Router();

const {
  createSupplier,
  getAllSuppliers,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");
// Create Supplier (Admin Only)
router.post("/", protect, authorize("admin"), createSupplier);

// Get All Suppliers (Logged-in Users)
router.get("/", protect, getAllSuppliers);

// Update Supplier (Admin Only)
router.put("/:id", protect, authorize("admin"), updateSupplier);

// Delete Supplier (Admin Only)
router.delete("/:id", protect, authorize("admin"), deleteSupplier);

module.exports = router;