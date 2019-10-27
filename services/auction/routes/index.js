const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');
const { AuthorizationMiddleware } = require('../../../lib/authMiddleware');

router.get('/getAllAuctions', controllers.getAllAuctions);
router.get('/getAuction', controllers.getAuction);
router.post('/createAuction', AuthorizationMiddleware, controllers.createAuction);
router.put('/updateAuction', AuthorizationMiddleware, controllers.updateAuction);
router.delete('/deleteAuction', AuthorizationMiddleware, controllers.deleteAuction);
router.get('/getAuctionCategories', controllers.getAuctionCategories);
router.post('/bid', AuthorizationMiddleware, controllers.bid);

module.exports = router;