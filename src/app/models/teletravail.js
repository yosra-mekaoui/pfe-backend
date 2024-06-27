import mongoose, { Schema } from 'mongoose';

const teletravailSchema = new Schema({
  StartDate: {
    type: Date,
    required: true,
  },
  EndDate: {
    type: Date,
    required: true,
  },
  Reason: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
    default: 'Pending',
  },
});

const Teletravail = mongoose.model('Teletravail', teletravailSchema);

export default Teletravail;
