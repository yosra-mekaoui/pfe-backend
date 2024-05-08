import RoleModel from '../../models/role';

const getRoles = async (req, res) => {
  try {
    const roles = await RoleModel.find();
    return res.status(200).json(roles);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Fetching roles' });
  }
};
//get user by id
const getRoleById = async (req, res) => {
  const { id } = req.params;
  const role = await RoleModel.findById(id).select('Role_Name');
  if (!role) {
    return res.status(404).json({ message: 'Role not found' });
  }

  return res.status(200).json(role);
};
const createRole = async (req, res) => {
  const { Role_Name } = req.body;
  if (!Role_Name) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const result = await RoleModel.create({ Role_Name });
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Creating Role' });
  }
};
const updateRole = async (req, res) => {
  const { Role_Name } = req.body;
  const { id } = req.params;
  const role = await RoleModel.findById(id);
  if (!role) {
    return res.status(404).json({ message: 'Role not found' });
  }
  if (Role_Name) {
    role.Role_Name = Role_Name;
  }
  try {
    const result = await role.save();
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Updating role' });
  }
};
const deleteRole = async (req, res) => {
  const { id } = req.params;
  const role = await RoleModel.findById(id);
  if (!role) {
    return res.status(404).json({ message: 'Role not found' });
  }
  try {
    await RoleModel.deleteOne({ _id: id });
    return res.status(200).json({ message: 'Role Deleted Successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Deleting Role' });
  }
};

export { createRole, getRoles, updateRole, deleteRole, getRoleById };
