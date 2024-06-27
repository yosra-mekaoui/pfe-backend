const multer = require('multer');
const path = require('path');

// Configuration de stockage pour multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Dossier de destination pour les fichiers téléchargés
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Filtrage des fichiers
const fileFilter = (req, file, cb) => {
  // Accepter seulement les fichiers avec les extensions suivantes
  const filetypes = /jpeg|jpg|png|pdf/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Images and PDFs only!');
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limite de taille de fichier à 10MB
  fileFilter: fileFilter,
});

module.exports = upload;
