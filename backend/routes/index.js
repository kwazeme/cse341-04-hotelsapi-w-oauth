const express = require('express');
const router = express.Router();
const {requiresAuth } = require('express-openid-connect');

router.use('/ss_hotels', require('./hotels'));
router.use('/', require('./swagger'));

router.use('/reservations', requiresAuth, require('./hotels'), (req, res) =>
    res.send(`Welcome ${req.oidc.user.sub}, Please make your reservation here.`)
    );

router.use('/users', requiresAuth, require('./hotels'), (req, res) =>
    res.send(`Welcome ${req.oidc.user.sub}, Please make your reservation here.`)
    );


module.exports = router;
