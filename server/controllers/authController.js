const { register, login } = require("../services/authService");

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

const loginUser = async (req, res) => {
  try {
    const result = await login(req.body.email, req.body.password);

    res.status(200).json({
      success: true,
      message: "Login Successful",
      ...result,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};