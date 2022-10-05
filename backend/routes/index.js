const express = require('express');
const router = express.Router();


router.use('/ss_hotels', require('./hotels'));
router.use('/', require('./swagger'));

router.use('/reservations', require('./hotels'));

router.use('/users', require('./hotels'));


module.exports = router;
