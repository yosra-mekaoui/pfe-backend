import CongeModel from '../../models/conge';

const getConges = async (req, res) => {
  try {
    const conges = await CongeModel.find();
    return res.status(200).json(conges);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Fetching Conges' });
  }
};
//get conge by id
const getCongeById = async (req, res) => {
  const { id } = req.params;
  const conge = await CongeModel.findById(id).select('StartDate EndDate Type Status File');
  if (!conge) {
    return res.status(404).json({ message: 'Conge not found' });
  }

  return res.status(200).json(conge);
};
const createConge = async (req, res) => {
  const { StartDate, EndDate, Type, Status, File } = req.body;
  if (!StartDate || !EndDate || !Type || !Status || !File) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const result = await CongeModel.create({ StartDate, EndDate, Type, Status, File });
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Creating Conge' });
  }
};
const updateConge = async (req, res) => {
  const { StartDate, EndDate, Type, Status, File } = req.body;
  const { id } = req.params;
  const conge = await CongeModel.findById(id);
  if (!conge) {
    return res.status(404).json({ message: 'Conge not found' });
  }
  if (StartDate) {
    conge.StartDate = StartDate;
  }
  if (EndDate) {
    conge.EndDate = EndDate;
  }
  if (Type) {
    conge.Type = Type;
  }
  if (Status) {
    conge.Status = Status;
  }
  if (File) {
    conge.File = File;
  }
  try {
    const result = await conge.save();
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Updating Conge' });
  }
};
const deleteConge = async (req, res) => {
  const { id } = req.params;
  const conge = await CongeModel.findById(id);
  if (!conge) {
    return res.status(404).json({ message: 'Conge not found' });
  }
  try {
    await CongeModel.deleteOne({ _id: id });
    return res.status(200).json({ message: 'Conge Deleted Successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Deleting Conge' });
  }
};

export { createConge, getConges, updateConge, deleteConge, getCongeById };
