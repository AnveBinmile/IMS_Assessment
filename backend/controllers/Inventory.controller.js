const { RESPONSE_MESSAGES, RESPONSE_CODES } = require("../core/constants");
const responseHandler = require("../core/responseHandler");

const {
  createInventoryService,
  readInventoryService,
  deleteInventoryService,
  updateInventoryService,
} = require("../service").Inventory;

const { insertSchema } =
  require("../schema/index").InventorySchema;

const createInventoryController = (req, res) => {
  const { error } = insertSchema.validate(req.body);
  if (error) {
    return responseHandler({
      error:true,
      success:false,
      res,
      message:RESPONSE_MESSAGES.VALIDATION_ERROR,
      statusCode:RESPONSE_CODES.FAILURE_BAD_REQUEST
    })
  }
  return createInventoryService(req, res);
};

const readInventoryController = (req, res) => {
  return readInventoryService(req, res);
};

const updateInventoryController = (req, res) => {
  return updateInventoryService(req, res);
};

const deleteInventoryController = async (req, res) => {
  await deleteInventoryService(req, res);
};

module.exports = {
  createInventoryController,
  readInventoryController,
  deleteInventoryController,
  updateInventoryController
};
