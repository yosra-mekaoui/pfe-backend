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
    enum: ['Annual', 'Sick', 'Maternity', 'Paternity', 'Unpaid', 'Other'],
  },
  Status: {
    type: String,
    required: true,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  File: {
    type: String,
    required: false,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Add userId field
});

const Conge = mongoose.model('Conge', congeSchema);

export default Conge;
