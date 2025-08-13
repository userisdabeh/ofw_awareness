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

router.get('/movies', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/movies.html'));
});

router.get('/articles/bagani-sa-daloy-ng-panahon', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/articles/bagani-sa-daloy-ng-panahon.html'));
});

router.get('/articles/ang-republic-act-no-11641', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/articles/ra11641.html'));
});

router.get('/articles/bagani-ng-nayon', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/articles/bagani-ng-nayon.html'));
});

router.get('/interviews/tyrone-maningas', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/interviews/tyrone-maningas.html'));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
});

router.get('/disclaimer', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/disclaimer.html'));
});

module.exports = router;