const { off } = require("../app");
const sequelize = require("../database/database");
const { Inventory } = require("../models/index");

const readInventory = async ({ limit = 200, offset = 0, ...filter }) => {
  limit = Number(limit);
  offset = Number(offset) * limit;
  return {
    totalCount: await Inventory.count({
      where: filter,
    }),
    result: await Inventory.findAll({
      where: filter,
      order: [["id", "ASC"]],
      limit,
      offset,
    }),
  };
};

const createInventory = async (data) => {
  return Inventory.create(data);
};

const updateInventory = async (data) => {
  return Inventory.update(data.data, {
    where: {
      id: data.id,
    },
  });
};

const deleteInventory = async (data) => {
  return Inventory.destroy({
    where: {
      id: data.id,
    },
  });
};

module.exports = {
  readInventory,
  createInventory,
  updateInventory,
  deleteInventory,
};
