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

const getCongeById = async (req, res) => {
  const { id } = req.params;
  const conge = await CongeModel.findById(id).select('StartDate EndDate Type Status File');
  if (!conge) {
    return res.status(404).json({ message: 'Conge not found' });
  }

  return res.status(200).json(conge);
};

const createConge = async (req, res) => {
  const { StartDate, EndDate, Type, Status } = req.body;
  if (!StartDate || !EndDate || !Type || !Status || !req.file) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const fileUrl = req.file.path; // Chemin du fichier téléchargé
    const result = await CongeModel.create({ StartDate, EndDate, Type, Status, File: fileUrl, userId: req.userId });
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Creating Conge' });
  }
};

const updateConge = async (req, res) => {
  const { StartDate, EndDate, Type, Status } = req.body;
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
  if (req.file) {
    conge.File = req.file.path; // Met à jour le chemin du fichier s'il y a un nouveau fichier téléchargé
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

// Le rôle Manager a le droit de changer le statut d'approuvé ou de refusé la demande de congé
const updateCongeStatus = async (req, res) => {
  const { Status } = req.body;
  const { id } = req.params;
  const conge = await CongeModel.findById(id);
  if (!conge) {
    return res.status(404).json({ message: 'Conge not found' });
  }
  if (Status) {
    conge.Status = Status;
  }
  try {
    const result = await conge.save();
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Updating Conge' });
  }
};

// Obtenir les congés par ID d'utilisateur
const getCongesByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const conges = await CongeModel.find({ userId }); // Recherche des congés par ID d'utilisateur
    if (!conges) {
      return res.status(404).json({ message: 'Congés not found' });
    }
    return res.status(200).json(conges);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error fetching congés' });
  }
};
export { createConge, getConges, updateConge, deleteConge, getCongeById, updateCongeStatus, getCongesByUserId };
