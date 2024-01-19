const express = require('express');
const router = express.Router();

const {signup, login} = require('../controllers/auth')
const auth = require('../middlewares/auth')

router.post('/signup',signup);
router.post('/login',login);

module.exports = router;