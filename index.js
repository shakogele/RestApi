const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');

// Set Up Express App

const app = express();

// connect to Mongo

mongoose.connect('mongodb://localhost/ninja');
mongoose.Promise = global.Promise;

app.use(bodyParser.json);
app.use('/api',routes);
// Reqests

app.listen(process.env.port || 4000, function () {
  console.log('Listening 4000 port');
});
