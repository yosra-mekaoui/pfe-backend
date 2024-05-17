const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/public/uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueID = Math.random().toString(36).substring(2);
    const lowercaseFilename = file.originalname.toLowerCase();

    cb(null, uniqueID + '-' + Date.now() + '-' + lowercaseFilename);
  },
});

const uploadMideelware = multer({ storage: storage });

module.exports = uploadMideelware;
