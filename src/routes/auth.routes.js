const router = require('express').Router();
const authController = require('@controllers/auth.controller');

//sign up
router.post('/auth/sign-up', authController.signUp);

module.exports = router;