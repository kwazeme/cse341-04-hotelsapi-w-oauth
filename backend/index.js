const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const port = process.env.PORT || 8080;

const cors = require('cors');

// install express
const app = express();

// enable cors
// app.use(cors());

// initialize routes
app
  .use(bodyParser.json())
  .use(cors())
//   .use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     next();
// })
  .use('/', require('./routes'));


  process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
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