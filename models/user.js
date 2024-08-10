const { sequelize } = require("../config/db-config");
const { DataTypes } = require("sequelize");

const User = sequelize.define("users", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
