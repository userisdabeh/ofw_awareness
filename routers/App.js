const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/landing.html'));
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

router.get('/articles', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/articles.html'));
})

module.exports = router;