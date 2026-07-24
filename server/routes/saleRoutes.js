const express = require("express");
const router = express.Router();

const {
  createSale,
  getAllSales,
  deleteSale,
} = require("../controllers/saleController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Create Sale (Admin)
router.post("/", protect, authorize("admin"), createSale);

// Get All Sales
router.get("/", protect, getAllSales);

// Delete Sale (Admin)
router.delete("/:id", protect, authorize("admin"), deleteSale);

module.exports = router;