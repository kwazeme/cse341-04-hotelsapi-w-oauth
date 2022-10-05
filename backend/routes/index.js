const express = require('express');
const router = express.Router();


router.use('/ss_hotels', require('./hotels'));
router.use('/', require('./swagger'));

module.exports = router;
