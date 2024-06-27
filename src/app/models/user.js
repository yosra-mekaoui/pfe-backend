const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
    required: true,
  },
});
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  user.role = user.role.Role_Name; // Populate role with Role_Name string
  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
