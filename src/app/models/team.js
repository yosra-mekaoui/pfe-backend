import mongoose, { Schema } from 'mongoose';

const teamSchema = new Schema({
  Nam: {
    type: String,
    required: true,
  },
  Membres: {
    type: String,
    required: true,
  },
});

const Team = mongoose.model('Team', teamSchema);

export default Team;
