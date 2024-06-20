import UserModel from '../../models/user';
import RoleModel from '../../models/role';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Fetching Users' });
  }
};
//get user by id
const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.findById(id).select('firstName lastName email');
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.status(200).json(user);
};
//get user by email
// const getUserByEmail = async (req, res) => {
//   const email = req.params.email;
//   try {
//     const user = await UserModel.findOne({ email: email });
//       if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }
//   res.json(user);
// } catch (err) {
//     console.error(err);
//      res.status(500).json({ message: 'Error Fetching User' });
//   }
// }
const getUserByEmail = async (req, res) => {
  try {
    // const data = await UserModel.find({ email: req.params.email });
    console.info('req.params.email', req.params);
    res.send(4);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Error Fetching User' });
  }
};
const createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const result = await UserModel.create({ firstName, lastName, email, password });
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Creating User' });
  }
};
const updateUser = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
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
  if (password) {
    user.password = password;
  }
  if (role) {
    user.role = role;
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
// Register
const register = async (req, res) => {
  const { firstName, lastName, email, password, roleName } = req.body;
  if (!firstName || !lastName || !email || !password || !roleName) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    // Trouver le rôle par son nom
    const role = await RoleModel.findOne({ Role_Name: roleName });
    if (!role) {
      return res.status(400).json({ msg: 'Role does not exist' });
    }
    user = new UserModel({ firstName, lastName, email, password, role: role._id });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Creating User' });
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    let user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Logging In' });
  }
};

// Refresh Token
const refreshToken = (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    res.json({ accessToken });
  });
};

export { createUser, getUsers, updateUser, deleteUser, getUserById, getUserByEmail, register, login, refreshToken };
