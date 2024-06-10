const joi = require('joi');

const createDocValidations = joi.object({
  Title: joi.string().required().min(3).max(15),
  Path: joi.string().required(),
  Type: joi.string().required(),
});

const getDocByIdValidations = joi.object({
  id: joi.string().required(),
});

const updateDocValidations = joi.object({
  id: joi.string().required(),
  Title: joi.string().required().min(3).max(15),
  Path: joi.string().required(),
  Type: joi.string().required(),
});

module.exports = {
  createDocValidations,
  getDocByIdValidations,
  updateDocValidations,
};
