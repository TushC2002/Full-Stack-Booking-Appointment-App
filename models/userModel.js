const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userName: Sequelize.STRING,
  contact: Sequelize.DOUBLE,
  email: Sequelize.STRING,
});

module.exports = User;
