let express = require('express')
let router = express.Router();
let formController = require('../Controller/formController');

router.post('/add',formController.adddata);
router.get('/get',formController.getdata);
router.get('/get/:id',formController.getdatabyid);

module.exports = router;
