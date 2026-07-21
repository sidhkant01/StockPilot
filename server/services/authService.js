const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (userData) => {
  const { fullName, email, password, phone, role } = userData;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
    phone,
    role,
  });

  return {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
  };
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid Email or Password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid Email or Password");
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return {
    token,
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  };
};

module.exports = {
  register,
  login,
};