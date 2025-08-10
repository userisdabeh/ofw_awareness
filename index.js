const express = require('express');
require('dotenv').config();
const router = require('./routers/App.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', router);

module.exports = app;