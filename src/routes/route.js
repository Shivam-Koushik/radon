const express = require('express');
const externalModule = require('../logger/logger')

const welcomeFunction = require('../logger/logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

router.get('/test-me5', function (req, res) {
    welcomeFunction.welcome()
    welcomeFunction.printDate()
    welcomeFunction.printMonth()
    welcomeFunction.Trim()
    welcomeFunction.getBatchInfo()
    welcomeFunction.toLowerCase()
    welcomeFunction.toUpperCase()
    res.send('It is my api')
});

module.exports = router;
// adding this comment for no reason