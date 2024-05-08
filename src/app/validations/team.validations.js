const joi = require('joi');

const createTeamValidations = joi.object({
  Name: joi.string().required().min(3).max(15),
  Membres: joi.array().required(),
});

const getTeamByIdValidations = joi.object({
  id: joi.string().required(),
});

const updateTeamValidations = joi.object({
  id: joi.string().required(),
  Name: joi.string().required().min(3).max(15),
  Membres: joi.array().required(),
});

module.exports = {
  createTeamValidations,
  getTeamByIdValidations,
  updateTeamValidations,
};
