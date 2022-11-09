const router = require('express').Router();
const { upload } = require('../middleware/filesUpload');
const mainClass = require('../controllers/mainClass');

router.get('/info', mainClass.getAllInfo);
router.post(
    '/avatars',
    async (req, res, next) => {
        console.log('пустой body:', req.body);
        console.log('пустой file:', req.file);
        next();
    },
    upload.single('image'),
    async (req, res, next) => {
        console.log('file', req.file);
        // if (!req.file) {
        //     return res.status(400).json({ message: 'Bad file' });
        // }
        next();
    },
    mainClass.addNewAvatar
); // single("image") - важно указать какая часть запроса должна быть обработана миделваром по ключу в котором фронтенд отправляет файлы

module.exports = router;
