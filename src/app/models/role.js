import mongoose, { Schema } from 'mongoose';

const roleSchema = new Schema({
  Role_Name: {
    type: String,
    required: true,
  },
});

const Role = mongoose.model('Role', roleSchema);

export default Role;
