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
