const { register } = require("../services/authService");

const registerUser = async (req, res) => {
  try {
    const user = await register(req.body);

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
};