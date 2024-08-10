const User = require("../models/user");

exports.createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
    });

    console.log(user);

    res.status(201).json(user);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const user = await User.findAll();

    console.log(user);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findOne({ where: { id: userId } });

    console.log(user);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.update(req.body, { where: { id: userId } });

    console.log(user);

    res.status(200).json("Updated Successfully");
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.destroy({ where: { id: userId } });

    console.log(user);

    res.status(200).json("Deleted Successfully");
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
