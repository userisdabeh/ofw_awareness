const express = require('express');
require('dotenv').config();
const router = require('./routers/App.js');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use('views', path.join(__dirname, 'views'));

app.use('/', router);

module.exports = app;