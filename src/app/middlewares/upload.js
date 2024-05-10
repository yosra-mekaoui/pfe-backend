// import multer from 'multer';

// // Configuration de Multer pour le téléchargement de fichiers
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Répertoire de destination pour les fichiers téléchargés
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname); // Nom de fichier unique pour les fichiers téléchargés
//   }
// });

// const upload = multer({ storage: storage }).single('file'); // 'file' est le nom du champ de fichier dans le formulaire

// const uploadMiddleware = (req, res, next) => {
//   upload(req, res, (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(400).json({ message: 'Error Uploading File' });
//     }
//     next();
//   });
// };

// export default uploadMiddleware;
const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;
