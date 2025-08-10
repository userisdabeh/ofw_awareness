const express = require('express');
require('dotenv').config();
const router = require('./routers/App.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;