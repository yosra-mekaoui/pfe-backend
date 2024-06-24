const joi = require('joi');

const allowedTypes = ['Annual', 'Sick', 'Maternity', 'Paternity', 'Unpaid', 'Other'];
const allowedStatus = ['Pending', 'Approved', 'Rejected'];

const createCongeValidations = joi.object({
  StartDate: joi.date().iso().min('now').required(),
  EndDate: joi.date().iso().min(joi.ref('StartDate')).required(),
  Type: joi
    .string()
    .valid(...allowedTypes)
    .required(),
  Status: joi
    .string()
    .valid(...allowedStatus)
    .required(),
});

const getCongeByIdValidations = joi.object({
  id: joi.string().required(),
});

const updateCongeValidations = joi.object({
  id: joi.string().required(),
  StartDate: joi.date().iso().min('now').required(),
  EndDate: joi.date().iso().min(joi.ref('StartDate')).required(),
  Type: joi
    .string()
    .valid(...allowedTypes)
    .required(),
  Status: joi
    .string()
    .valid(...allowedStatus)
    .required(),
});

module.exports = {
  createCongeValidations,
  getCongeByIdValidations,
  updateCongeValidations,
};
