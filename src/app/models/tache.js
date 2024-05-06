import mongoose from 'mongoose';

const { Schema } = mongoose;

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
    required: true,
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
        type: String,
        required: true,
    },
});

const Tache = mongoose.model('Tache', tacheSchema);

export default Tache;
