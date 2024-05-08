import ProjectModel from '../../models/project';

const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    return res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Fetching Projects' });
  }
};
//get project by id
const getProjectById = async (req, res) => {
  const { id } = req.params;
  const project = await ProjectModel.findById(id).select('Name Description StartDate EndDate Status');
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  return res.status(200).json(project);
};
const createProject = async (req, res) => {
  const { Name, Description, StartDate, EndDate, Status } = req.body;
  if (!Name || !Description || !StartDate || !EndDate || !Status) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const result = await ProjectModel.create({ Name, Description, StartDate, EndDate, Status });
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Creating Project' });
  }
};

const updateProject = async (req, res) => {
  const { Name, Description, StartDate, EndDate, Status } = req.body;
  const { id } = req.params;
  const project = await ProjectModel.findById(id);
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  if (Name) {
    project.Name = Name;
  }
  if (Description) {
    project.Description = Description;
  }
  if (StartDate) {
    project.StartDate = StartDate;
  }
  if (EndDate) {
    project.EndDate = EndDate;
  }
  if (Status) {
    project.Status = Status;
  }
  try {
    const result = await project.save();
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Updating Project' });
  }
};
const deleteProject = async (req, res) => {
  const { id } = req.params;
  const project = await ProjectModel.findById(id);
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  try {
    await ProjectModel.deleteOne({ _id: id });
    return res.status(200).json({ message: 'Project Deleted Successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Deleting Project' });
  }
};

export { createProject, getProjects, updateProject, deleteProject, getProjectById };
