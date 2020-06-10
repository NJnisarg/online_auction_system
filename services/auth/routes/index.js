const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');
const { AuthorizationMiddleware } = require('../../../lib/authMiddleware');

/* Get Role info for register */
router.get('/getProfile', controllers.getRole);

/* Login and Register */
router.post('/login', controllers.authenticateUser);
router.post('/register', controllers.registerUser);

/* GET user profile */
router.get('/getProfile', AuthorizationMiddleware, controllers.getProfile);

/* PUT request to update the Profile */
router.put('/editProfile', AuthorizationMiddleware, controllers.updateProfile);

/* POST request to create the Profile */
router.post('/createProfile', AuthorizationMiddleware, controllers.createProfile);

module.exports = router;