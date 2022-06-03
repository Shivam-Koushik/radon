const express = require('express');
const _ = require('lodash');

const externalModule = require('../logger/logger')
const printDateMonth = require('../util/helper')
const printFormatter = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    externalModule.welcome()
    printDateMonth.printDate()
    printDateMonth.printMonth()
    printDateMonth.getBatchtInfo()
    printFormatter.Trim()
    printFormatter.toLowerCase()
    printFormatter.toUpperCase()
    res.send('My last api!')
});

router.get('/hello', function (req, res) {
    console.log(_.chunk(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 4))

    console.log(_.tail([1,3,5,7,9,11,13,15,17,19]))
    
    console.log(_.union([1,2,3],[2,3,4],[3,4,5,],[4,5,6,7],[7,8,9,0]))

    console.log(_.fromPairs([ ["horrr","the nun"], ["drama","Titanic"] , ["thriller","Shutter Island"]]))

    res.send("this is chunk and tail")
});

module.exports = router;
// adding this comment for no reason