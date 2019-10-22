const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/getAllAuctions', controllers.getAllAuctions);
router.get('/getAuction',);
router.post('/createAuction',);
router.put('/updateAuction',);
router.delete('/deleteAuction',);

module.exports = router;