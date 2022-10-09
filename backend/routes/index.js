const express = require('express');
const router = express.Router();
require('dotenv').config();
const { auth, requiresAuth } = require('express-openid-connect');
const app = express();
  const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.baseURL,
    clientID: process.env.clientID,
    issuerBaseURL: process.env.issuerBaseURL,
    secret: process.env.secret
  };


// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));
  // // req.isAuthenticated is provided from the auth router
router.get('/', (req,res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

router.use('/ss_hotels', require('./hotels'));
router.use('/', require('./swagger'));

router.use('/reservations', requiresAuth, require('./hotels'), (req, res) =>
    res.send(`Welcome ${req.oidc.user.sub}, Please make your reservation here.`)
    );

router.use('/users', requiresAuth, require('./hotels'), (req, res) =>
    res.send(`Welcome ${req.oidc.user.sub}, Please make your reservation here.`)
    );
router.get('/profile', requiresAuth(), (req, res) => {
        res.send(JSON.stringify(req.oidc.user));
      });

module.exports = router;
