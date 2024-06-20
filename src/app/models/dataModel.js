const { Schema, model } = require('mongoose');

const dataSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const DataModel = model('Data', dataSchema);

module.exports = DataModel;
