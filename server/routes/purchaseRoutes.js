const express = require("express");
const router = express.Router();

const {
  createPurchase,
  getAllPurchases,
  deletePurchase,
} = require("../controllers/purchaseController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Create Purchase
router.post("/", protect, authorize("admin"), createPurchase);

// Get Purchase History
router.get("/", protect, getAllPurchases);

// Delete Purchase
router.delete("/:id", protect, authorize("admin"), deletePurchase);

module.exports = router;