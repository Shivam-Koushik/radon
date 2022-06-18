const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const getMemes = require("../controllers/memesController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/sessionsByDistrictId", CowinController.sessionsByDistrictId)
router.get("/weather/getWeather", weatherController.getWeather)
router.get("/weather/sortByTemperature", weatherController.sortByTemperature)
router.post("/memes/getMemes", getMemes.getMemes)
router.post("/memes/getAllmemes", getMemes.getAllmemes)


module.exports = router;