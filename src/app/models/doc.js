const mongoose = require('mongoose');

const { Schema } = mongoose;

const docSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Path: {
    type: String,
    required: true,
  },
});

const Doc = mongoose.model('Doc', docSchema);

export default Doc;
