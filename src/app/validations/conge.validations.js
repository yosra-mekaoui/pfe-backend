const joi = require('joi');

const createCongeValidations = joi.object({
  StartDate: joi.date().iso().min('now').required(),
  EndDate: joi.date().iso().min(joi.ref('StartDate')).required(),
  Type: joi.string().required(),
  Status: joi.string().required(),
  File: joi.string().required(),
});

const getCongeByIdValidations = joi.object({
  id: joi.string().required(),
});

const updateCongeValidations = joi.object({
  id: joi.string().required(),
  StartDate: joi.date().iso().min('now').required(),
  EndDate: joi.date().iso().min(joi.ref('StartDate')).required(),
  Type: joi.string().required(),
  Status: joi.string().required(),
  File: joi.string().required(),
});

module.exports = {
  createCongeValidations,
  getCongeByIdValidations,
  updateCongeValidations,
};
