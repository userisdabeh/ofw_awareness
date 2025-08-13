const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/landing.html'));
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

router.get('/stories', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/stories.html'));
})

module.exports = router;