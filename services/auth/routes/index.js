const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.post('/register', controllers.registerUser);

module.exports = router;