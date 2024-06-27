const multer = require('multer');
const uploadMiddleware = require('./uploadMiddleware');
const InvalidFileTypeError = require('../exceptions/InvalidFileTypeError');

const excelUpload = multer({
  storage: uploadMiddleware.storage,
  fileFilter: (req, file, cb) => {
    // Obtenir l'extension du fichier
    const fileExtension = '.' + file.originalname.split('.').pop();

    // Définir les extensions autorisées pour les fichiers Excel
    const allowedExtensions = ['.xlsx', '.xlsm', '.xlsb', '.xltx'];

    // Vérifier si le fichier a l'une des extensions autorisées
    if (allowedExtensions.includes(fileExtension)) {
      cb(null, true);
    } else {
      cb(new InvalidFileTypeError('Seuls les fichiers Excel sont autorisés'));
    }
  },
}).single('file');

const excelMultiUpload = multer({
  storage: uploadMiddleware.storage,
  fileFilter: (req, file, cb) => {
    console.error('hello');
    const fileExtension = '.' + file.originalname.split('.').pop();
    console.error('helloO');

    const allowedExtensions = ['.xlsx', '.xlsm', '.xlsb', '.xltx', 'svg'];
    console.error('hellooo');
    // Vérifier si le fichier a l'une des extensions autorisées
    if (allowedExtensions.includes(fileExtension)) {
      cb(null, true);
    } else {
      console.error('helloooo');

      cb(new InvalidFileTypeError('Seuls les fichiers Excel sont autorisés'));
    }
  },
}).array('file', 10); // 10 est le nombre maximum de fichiers autorisés

const allowedExtensions = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.gif'];
const multiUpload = multer({
  storage: uploadMiddleware.storage,
  fileFilter: (req, file, cb) => {
    const fileExtension = '.' + file.originalname.split('.').pop();
    if (allowedExtensions.includes(fileExtension)) {
      cb(null, true);
    } else {
      cb(new InvalidFileTypeError('Seuls les fichiers PDF, Word et les images sont autorisés'));
    }
  },
}).array('files', 10); // 10 est le nombre maximum de fichiers autorisés

export { excelUpload, excelMultiUpload, multiUpload };
