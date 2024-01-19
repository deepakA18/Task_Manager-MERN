const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth')

const reminderMail = require('../controllers/schedule')


router.post('/task',auth,reminderMail);

module.exports = router;