/*
const joi = require('joi');

const createUserValidations = joi.object({
  firstName: joi.string().required().min(3).max(15),
  lastName: joi.string().required().min(3).max(15),
  email: joi.string().required().email(),
});

const getUserByIdValidations = joi.object({
  id: joi.string().required(),
});

const updateUserValidations = joi.object({
  id: joi.string().required(),
  firstName: joi.string().min(3).max(15),
  lastName: joi.string().min(3).max(15),
  email: joi.string().email(),
});

module.exports = {
  createUserValidations,
  getUserByIdValidations,
  updateUserValidations,
};
*/
// project validations : "Name , Description , StartDate , EndDate , Status"
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
