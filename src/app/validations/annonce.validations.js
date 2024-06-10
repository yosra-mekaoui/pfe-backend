const joi = require('joi');

const createAnnonceValidations = joi.object({
  Title: joi.string().required().min(3).max(15),
  Content: joi.string().required(),
  pic: joi.string().required(),
});

const getAnnonceByIdValidations = joi.object({
  id: joi.string().required(),
});

const updateAnnonceValidations = joi.object({
  id: joi.string().required(),
  Title: joi.string().required().min(3).max(15),
  Content: joi.string().required(),
  pic: joi.string().required(),
});

module.exports = {
  createAnnonceValidations,
  getAnnonceByIdValidations,
  updateAnnonceValidations,
};
