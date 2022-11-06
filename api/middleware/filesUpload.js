const path = require('path');
const tempDir = path.join(__dirname, '..', 'tmp');
const photoName = 'photoName';

const multer = require('multer');
const multerConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tempDir);
    },
    filename: (req, file, cb) => {
        cb(null, photoName);
    },
    limits: { fileSize: 4096 },
});

const upload = multer({ storage: multerConfig });

module.exports = { upload };
