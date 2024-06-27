const joi = require('joi');

const createTeletravailValidations = joi.object({
  StartDate: joi.date().iso().min('now').required(),
  EndDate: joi.date().iso().min(joi.ref('StartDate')).required(),
  Reason: joi.string().required(),
});

const getTeletravailByIdValidations = joi.object({
  id: joi.string().required(),
});

const updateTeletravailValidations = joi.object({
  id: joi.string().required(),
  StartDate: joi.date().iso().min('now').required(),
  EndDate: joi.date().iso().min(joi.ref('StartDate')).required(),
  Reason: joi.string().required(),
});

module.exports = {
  createTeletravailValidations,
  getTeletravailByIdValidations,
  updateTeletravailValidations,
};
