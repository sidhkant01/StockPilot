const Supplier = require("../models/Supplier");

// Create Supplier
const createSupplier = async (supplierData) => {
  const existingSupplier = await Supplier.findOne({
    email: supplierData.email,
  });

  if (existingSupplier) {
    throw new Error("Supplier with this email already exists");
  }

  return await Supplier.create(supplierData);
};

// Get All Suppliers
const getAllSuppliers = async (query) => {
  const {
    search = "",
    page = 1,
    limit = 10,
  } = query;

  const filter = {
    isActive: true,
  };

  if (search) {
    filter.$or = [
      {
        supplierName: {
          $regex: search,
          $options: "i",
        },
      },
      {
        companyName: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  const suppliers = await Supplier.find(filter)
    .skip((Number(page) - 1) * Number(limit))
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  const total = await Supplier.countDocuments(filter);

  return {
    suppliers,
    total,
    currentPage: Number(page),
    totalPages: Math.ceil(total / Number(limit)),
  };
};

// Update Supplier
const updateSupplier = async (id, supplierData) => {
  return await Supplier.findByIdAndUpdate(id, supplierData, {
    new: true,
    runValidators: true,
  });
};

// Delete Supplier
const deleteSupplier = async (id) => {
  return await Supplier.findByIdAndDelete(id);
};

module.exports = {
  createSupplier,
  getAllSuppliers,
  updateSupplier,
  deleteSupplier,
};