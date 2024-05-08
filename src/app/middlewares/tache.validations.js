const joi = require('joi');

const createTacheValidations = joi.object({
  Title: joi.string().required().min(3).max(15),
  Description: joi.string().required(),
  CreationDate: joi.date().iso().default(new Date()), // Définir une date par défaut pour CreationDate
  Deadline: joi.date().iso().min(joi.ref('CreationDate')).required(),
  Status: joi.string().required(),
  Priority: joi.number().required(),
});

const getTacheByIdValidations = joi.object({
  id: joi.string().required(),
});

const updateTacheValidations = joi.object({
  id: joi.string().required(),
  Title: joi.string().required().min(3).max(15),
  Description: joi.string().required(),
  CreationDate: joi.date().iso().default(new Date()), // Définir une date par défaut pour CreationDate
  Deadline: joi.date().iso().min(joi.ref('CreationDate')).required(),
  Status: joi.string().required(),
  Priority: joi.number().required(),
});

module.exports = {
  createTacheValidations,
  getTacheByIdValidations,
  updateTacheValidations,
};
