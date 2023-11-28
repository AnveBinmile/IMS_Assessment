const { createInventory, readInventory, updateInventory, deleteInventory } =
  require("../dblayer/index").Inventory;
const to = require("await-to-js").default;
const responseHandler = require("../core/responseHandler");
const { RESPONSE_MESSAGES, RESPONSE_CODES } = require("../core/constants");
const readInventoryService = async (req, res) => {
  const [error, data] = await to(readInventory(req.query));

  if (data) {
    return responseHandler({
      statusCode: RESPONSE_CODES.SUCCESS_CREATED,
      res: res,
      success: true,
      error: false,
      data: data,
      message: RESPONSE_MESSAGES.REGISTER_SUCCESS,
    });
  } else {
    return responseHandler({
      statusCode: RESPONSE_CODES.FAILURE_NOT_FOUND,
      res: res,
      success: false,
      error: true,
      message: error.message,
    });
  }
};

const createInventoryService = async (req, res) => {
  const [error, data] = await to(createInventory(req.body));
  if (error) {
    return responseHandler({
      statusCode: RESPONSE_CODES.SUCCESS_NO_CONTENT,
      res,
      message: error.message,
      success: false,
      error: true,
    });
  }

  const { account, id, inventoryType, description, date, amount } =
    data.dataValues;

  responseHandler({
    statusCode: RESPONSE_CODES.SUCCESS_CREATED,
    success: true,
    error: false,
    data: {
      id,
      date,
      account,
      inventoryType,
      amount,
      description,
    },
    res: res,
    message: RESPONSE_MESSAGES.INSERT_SUCCESS,
  });
};

const updateInventoryService = async (req, res) => {
  const id = Number(req.query.id);
  const data = req.body;
  const [error, result] = await to(updateInventory({ id, data }));
  if (error) {
    return responseHandler({
      statusCode: RESPONSE_CODES.SUCCESS_NO_CONTENT,
      res,
      message: error.message,
      success: false,
      error: true,
    });
  }
  responseHandler({
    statusCode: RESPONSE_CODES.SUCCESS_OK,
    data: result,
    res,
    success: true,
    error: false,
    message: RESPONSE_MESSAGES.UPDATE_SUCCESS,
  });
};

const deleteInventoryService = async (req, res) => {
  const [error, result] = await to(deleteInventory(req.query));
  if (error) {
    return responseHandler({
      statusCode: RESPONSE_CODES.SUCCESS_OK,
      res,
      message: error.message,
      success: false,
      error: true,
    });
  }

  responseHandler({
    statusCode: RESPONSE_CODES.SUCCESS_OK,
    data: {
      "deleted data_id": req.query.id,
    },
    success: true,
    error: false,
    res,
    message: RESPONSE_MESSAGES.DELETE_SUCCESS,
  });
};

module.exports = {
  createInventoryService,
  readInventoryService,
  updateInventoryService,
  deleteInventoryService,
};
