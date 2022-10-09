const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

require('dotenv').config();

const port = process.env.PORT || 8080;
const {auth, requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.baseURL,
  clientID: process.env.clientID,
  issuerBaseURL: process.env.issuerBaseURL,
  secret: process.env.secret
};

const cors = require('cors');

// install express
const app = express();
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
  

// initialize routes
app
  .use(bodyParser.json())
  .use(cors())
  .use('/', require('./routes'));


  process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
  });

  // req.isAuthenticated is provided from the auth router
  app.get('/', (req,res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });
// get the user profile
  app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });
  
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`ctrl+click localhost:${port}/`)
    console.log(`ctrl+click localhost:${port}/api-docs`)
  }
});