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
});

router.get('/interviews', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/interviews.html'));
});

router.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/photos.html'));
});

module.exports = router;