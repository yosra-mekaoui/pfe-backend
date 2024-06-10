import DocModel from '../../models/doc';

const getDocs = async (req, res) => {
  try {
    const docs = await DocModel.find();
    return res.status(200).json(docs);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Fetching docs' });
  }
};
//get user by id
const getDocById = async (req, res) => {
  const { id } = req.params;
  const doc = await DocModel.findById(id).select('Title Type file');
  if (!doc) {
    return res.status(404).json({ message: 'Doc not found' });
  }

  return res.status(200).json(doc);
};
const createDoc = async (req, res) => {
  const { Title, Type, Path } = req.body;
  if (!Title || !Type || !Path) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const result = await DocModel.create({ Title, Type, Path });
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Creating Doc' });
  }
};
// const createDoc = async (req, res) => {
//   const { Title, Type } = req.body;
//   const file = req.file.file; // Récupérer le chemin du fichier téléchargé
//   console.info(req.file.file)

//   if (!Title || !Type || !file) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const result = await DocModel.create({ Title, Type, file });
//     return res.status(201).json(result);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: 'Error Creating Doc' });
//   }
// };
// const createDoc = async (req, res) => {
//   try {
//     const { Title, Type } = req.body; // Extraire les champs Title et Type du corps de la requête
//     const file = req.file; // Extraire les données du fichier

//     // Vérifier si tous les champs requis sont fournis
//     if (!Title || !Type || !file) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // Créer un nouveau document avec les données fournies
//     const newDoc = new DocModel({
//       Title,
//       Type,
//       file: file.file // Stocker le fichier brut dans le champ "file"
//     });

//     // Enregistrer le document dans la base de données
//     const savedDoc = await newDoc.save();

//     // Répondre avec le document créé
//     return res.status(201).json(savedDoc);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: 'Error creating document' });
//   }
// };
const updateDoc = async (req, res) => {
  const { Title, Type, file } = req.body;
  const { id } = req.params;
  const doc = await DocModel.findById(id);
  if (!doc) {
    return res.status(404).json({ message: 'Doc not found' });
  }
  if (Title) {
    doc.Title = Title;
  }
  if (Type) {
    doc.Type = Type;
  }
  if (file) {
    doc.file = file;
  }
  try {
    const result = await doc.save();
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Updating doc' });
  }
};
const deleteDoc = async (req, res) => {
  const { id } = req.params;
  const doc = await DocModel.findById(id);
  if (!doc) {
    return res.status(404).json({ message: 'Doc not found' });
  }
  try {
    await DocModel.deleteOne({ _id: id });
    return res.status(200).json({ message: 'Doc Deleted Successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Deleting Doc' });
  }
};
export { createDoc, getDocs, updateDoc, deleteDoc, getDocById };
