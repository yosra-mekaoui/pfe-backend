const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ajv = new Ajv();
addFormats(ajv);

function validateExcelData(data, schema) {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    return { isValid: false, errors: validate.errors };
  }
  return { isValid: true, errors: [] };
}

module.exports = validateExcelData;
