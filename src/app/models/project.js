import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  StartDate: {
    type: Date,
    required: true,
  },
    EndDate: {
        type: Date,
        required: true,
    },
    Status: {
        type: String,
        required: true,

    },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
