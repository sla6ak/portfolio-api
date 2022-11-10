const router = require('express').Router();
const { upload } = require('../middleware/filesUpload');
const mainClass = require('../controllers/mainClass');

router.get('/info', mainClass.getAllInfo);
router.post('/avatars', upload.single('image'), mainClass.addNewAvatar); // single("image") - важно указать какая часть запроса должна быть обработана миделваром по ключу в котором фронтенд отправляет файлы
router.put('/info', mainClass.updateInfo);

module.exports = router;
