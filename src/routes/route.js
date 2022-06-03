const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get('/movies', function(req, res){
    const arr = ["RRR","Runway34","GanguBai","heropanti2","Attack"]
    res.send(arr)
  
})


router.get('/movies/:indexNumber', function(req, res){
    const arr = ["RRR","Runway34","GanguBai","heropanti2","Attack"]
    if(req.params.indexNumber<arr.length){
    console.log("Selected index is :" + arr[req.params.indexNumber])
    res.send(arr[req.params.indexNumber])
    }else{
        console.log("Not a valid number")
    }
})


router.get('/films', function(req, res){
   const arr1 =[{"id" : 1, "name" : "RRR"},{"id" : 2, "name" : "Runway34"},{"id" : 3, "name" : "GanguBai"}]
   res.send(arr1)

})


router.get('/films/:filmId', function(req, res){
   const arr1 =[{"id" : 0, "name" : "RRR"},{"id" : 1, "name" : "Runway34"},{"id" : 2, "name" : "GanguBai"}]
   if(req.params.filmId<arr1.length){
       console.log("selected movie index is : " + arr1[req.params.filmId])
       res.send(arr1[req.params.filmId])
   }else{
       console.group(" not is valid number")
   }

})

module.exports = router;
// adding this comment for no reason