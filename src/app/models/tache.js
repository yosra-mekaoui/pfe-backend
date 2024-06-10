import mongoose, { Schema } from 'mongoose';

const tacheSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  CreationDate: {
    type: Date,
  },
  Deadline: {
    type: Date,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  Priority: {
    type: Number,
    required: true,
  },
});

const Tache = mongoose.model('Tache', tacheSchema);

export default Tache;
