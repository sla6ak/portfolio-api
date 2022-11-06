const router = require('express').Router();
const { upload } = require('../middlewares/filesUpload');
const mainClass = require('../controllers/mainClass');

router.get('/info', mainClass.getAllInfo);
router.patch('/avatars', upload.single('image'), mainClass.addNewAvatar); // single("imege") - важно указать какая часть запроса должна быть обработана миделваром по ключу в котором фронтенд отправляет файлы

module.exports = router;
