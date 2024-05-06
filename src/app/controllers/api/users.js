import UserModel from '../../models/user';

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Fetching Users' });
  }
};
const createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const result = await UserModel.create({ firstName, lastName, email });
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Creating User' });
  }
};
const updateUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const { id } = req.params;
  const user = await UserModel.findById(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (email) {
    user.email = email;
  }
  try {
    const result = await user.save();
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Updating User' });
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.findById(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  try {
    await UserModel.deleteOne({ _id: id });
    return res.status(200).json({ message: 'User Deleted Successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Deleting User' });
  }
};

export { createUser, getUsers, updateUser, deleteUser };
