import AnnonceModel from '../../models/annonce';

const getAnnonces = async (req, res) => {
  try {
    const annonces = await AnnonceModel.find();
    return res.status(200).json(annonces);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Fetching Annonces' });
  }
};
//get annonce by id
const getAnnonceById = async (req, res) => {
  const { id } = req.params;
  const annonce = await AnnonceModel.findById(id).select('title description');
  if (!annonce) {
    return res.status(404).json({ message: 'Annonce not found' });
  }

  return res.status(200).json(annonce);
};
const createAnnonce = async (req, res) => {
  const { Title, Content, pic } = req.body;
  if (!Title || !Content || !pic) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const result = await AnnonceModel.create({ Title, Content, pic });
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Creating Annonce' });
  }
};
const updateAnnonce = async (req, res) => {
  const { Title, Content, pic } = req.body;
  const { id } = req.params;
  const annonce = await AnnonceModel.findById(id);
  if (!annonce) {
    return res.status(404).json({ message: 'Annonce not found' });
  }
  if (Title) {
    annonce.Title = Title;
  }
  if (Content) {
    annonce.Content = Content;
  }
  if (pic) {
    annonce.pic = pic;
  }
  try {
    const result = await annonce.save();
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Updating Annonce' });
  }
};
const deleteAnnonce = async (req, res) => {
  const { id } = req.params;
  const annonce = await AnnonceModel.findById(id);
  if (!annonce) {
    return res.status(404).json({ message: 'Annonce not found' });
  }
  try {
    await AnnonceModel.deleteOne({ _id: id });
    return res.status(200).json({ message: 'Annonce Deleted Successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Deleting Annonce' });
  }
};

export { createAnnonce, getAnnonces, updateAnnonce, deleteAnnonce, getAnnonceById };
