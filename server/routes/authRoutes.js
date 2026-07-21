const express = require("express");
const router = express.Router();
const { authorize } = require("../middleware/roleMiddleware");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected test route
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected Route Accessed Successfully",
    user: req.user,
  });
});

router.get(
  "/admin",
  protect,
  authorize("admin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin 🚀",
      user: req.user,
    });
  }
);

module.exports = router;