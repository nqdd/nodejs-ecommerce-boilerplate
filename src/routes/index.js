const router = require('express').Router();

router.use('/api/v1', require('./auth.routes'));

module.exports = router;