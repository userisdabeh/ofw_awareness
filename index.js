const express = require('express');
const router = require('./routers/App.js');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

module.exports = app;