const xlsx = require('xlsx');

function checkRequiredColumns(sheet, requiredColumns) {
  const headers = xlsx.utils.sheet_to_json(sheet, { header: 1 })[0]; // Obtenir la première ligne comme en-tête
  const missingColumns = requiredColumns.filter((col) => !headers.includes(col));
  return missingColumns;
}

module.exports = checkRequiredColumns;
