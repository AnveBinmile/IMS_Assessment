const {DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Inventory = sequelize.define(
  "Inventory",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
    account: {
      type: DataTypes.STRING,
    },
    inventoryType: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.BIGINT,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "Inventories",
  }
);

module.exports = Inventory;
