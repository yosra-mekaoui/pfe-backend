const joi = require('joi');

const createProjectValidations = joi.object({
  Name: joi.string().required().min(3).max(15),
  Description: joi.string().required(),
  StartDate: joi.date().iso().min('now').required(),
  EndDate: joi.date().iso().min(joi.ref('StartDate')).required(),
  Status: joi.string().required(),
});

const getProjectByIdValidations = joi.object({
  id: joi.string().required(),
});

const updateProjectValidations = joi.object({
  id: joi.string().required(),
  Name: joi.string().min(3).max(15),
  Description: joi.string(),
  StartDate: joi.date().iso().min('now').required(),
  EndDate: joi.date().iso().min(joi.ref('StartDate')).required(),
  Status: joi.string(),
});

module.exports = {
  createProjectValidations,
  getProjectByIdValidations,
  updateProjectValidations,
};
