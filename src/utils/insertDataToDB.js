const DataModel = require('../../src/app/models/dataModel');

async function insertDataToDB(data) {
  try {
    await DataModel.insertMany(data);
    console.info('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

module.exports = insertDataToDB;
