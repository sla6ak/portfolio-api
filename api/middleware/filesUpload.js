const path = require('path');
const multer = require('multer');
const tempDir = path.join(__dirname, '..', 'tmp');

const multerConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tempDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
    limits: { fileSize: 4096 },
});

const upload = multer({ storage: multerConfig });

module.exports = { upload };
