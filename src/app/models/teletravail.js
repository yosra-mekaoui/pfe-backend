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
});

const Teletravail = mongoose.model('Teletravail', teletravailSchema);

export default Teletravail;
