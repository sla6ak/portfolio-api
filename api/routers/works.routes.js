const router = require('express').Router();

const { newWorkValidation } = require('../middleware/newWorkValidation');
const { editWorkValidation } = require('../middleware/editWorkValidation');
const MyWorks = require('../controllers/worksClass');

router.get('/all', MyWorks.getAllWork);
router.post('/add', newWorkValidation, MyWorks.addNewWork);
router.patch('/update/:workId', editWorkValidation, MyWorks.updateWork);
router.delete('/delete/:workId', MyWorks.deleteWork);
module.exports = router;
