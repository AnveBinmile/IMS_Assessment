const Joi = require("joi");



const insertSchema = Joi.object({
  date: Joi.date().required(),
  account: Joi.string().required(),
  inventoryType: Joi.string().required(),
  amount: Joi.number().integer().required(),
  description: Joi.string().allow(null,''),
});


module.exports = {
  insertSchema,
};
