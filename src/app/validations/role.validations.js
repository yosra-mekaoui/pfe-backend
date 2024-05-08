const joi = require('joi');

const createRoleValidations = joi.object({
  Role_Name: joi.string().required().min(3).max(15),
});

const getRoleByIdValidations = joi.object({
  id: joi.string().required(),
});

const updateRoleValidations = joi.object({
  id: joi.string().required(),
  Role_Name: joi.string().required().min(3).max(15),
});

module.exports = {
  createRoleValidations,
  getRoleByIdValidations,
  updateRoleValidations,
};
