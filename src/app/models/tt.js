import mongoose from 'mongoose';

const { Schema } = mongoose;

const ttSchema = new Schema({
  StartDate: {
    type: Date,
    required: true,
  },
    EndDate: {
        type: Date,
        required: true,
    },
});

const Tt = mongoose.model('Tt', ttSchema);

export default Tt;
