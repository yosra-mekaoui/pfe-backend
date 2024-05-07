import mongoose, { Schema } from 'mongoose';

const congeSchema = new Schema({
  StartDate: {
    type: Date,
    required: true,
  },
  EndDate: {
    type: Date,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  File: {
    type: String,
    required: true,
  },
});

const Conge = mongoose.model('Conge', congeSchema);

export default Conge;
