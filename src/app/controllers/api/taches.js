import TacheModel from '../../models/tache';

const getTaches = async (req, res) => {
  try {
    const taches = await TacheModel.find();
    return res.status(200).json(taches);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Fetching Taches' });
  }
};
//get tache by id
const getTacheById = async (req, res) => {
  const { id } = req.params;
  const tache = await TacheModel.findById(id).select('Title Description CreationDate Deadline Status Prority');
  if (!tache) {
    return res.status(404).json({ message: 'Tache not found' });
  }

  return res.status(200).json(tache);
};
const createTache = async (req, res) => {
  const { Title, Description, CreationDate, Deadline, Status, Prority } = req.body;
  if (!Title || !Description || !CreationDate || !Deadline || !Status || !Prority) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const result = await TacheModel.create({ Title, Description, CreationDate, Deadline, Status, Prority });
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Creating Tache' });
  }
};
const updateTache = async (req, res) => {
  const { Title, Description, CreationDate, Deadline, Status, Prority } = req.body;
  const { id } = req.params;
  const tache = await TacheModel.findById(id);
  if (!tache) {
    return res.status(404).json({ message: 'Tache not found' });
  }
  if (Title) {
    tache.Title = Title;
  }
  if (Description) {
    tache.Description = Description;
  }
  if (CreationDate) {
    tache.CreationDate = CreationDate;
  }
  if (Deadline) {
    tache.Deadline = Deadline;
  }
  if (Status) {
    tache.Status = Status;
  }
  if (Prority) {
    tache.Prority = Prority;
  }
  try {
    const result = await tache.save();
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Updating Tache' });
  }
};
const deleteTache = async (req, res) => {
  const { id } = req.params;
  const tache = await TacheModel.findById(id);
  if (!tache) {
    return res.status(404).json({ message: 'Tache not found' });
  }
  try {
    await TacheModel.deleteOne({ _id: id });
    return res.status(200).json({ message: 'Tache Deleted Successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Deleting Tache' });
  }
};

export { createTache, getTaches, updateTache, deleteTache, getTacheById };
