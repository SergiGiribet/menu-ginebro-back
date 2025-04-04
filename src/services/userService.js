const User = require("../models/User");

const getAllUsers = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const createUser = async (userData) => {
  return await User.create(userData);
};

module.exports = { getAllUsers, getUserById, createUser };
