const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');

// Set Up Express App

const app = express();

// connect to Mongo

mongoose.connect('mongodb://localhost:27017/ninja', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api',routes);

// Error Handling Middleware

app.use(function (error, req, res, next) {
  res.status(422).send({
    error: error.message
  });
});
// Reqests

app.listen(process.env.port || 4000, function () {
  console.log('Listening 4000 port');
});
