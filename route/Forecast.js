const express = require('express')
const router = express.Router();
const {readFileSync} = require('fs');

router.get('/north', function (req, res, next) {
    let northWather = JSON.parse(readFileSync('./forecast/output_forecast_north_taiwan.json'));
    res.send(northWather)
})

router.get('/cities/north', function (req, res, next) {
    let northWather = JSON.parse(readFileSync('./forecast/cities_north_taiwan.json'));
    res.send(northWather)
})

router.get('/middle', function (req, res, next) {
    let northWather = JSON.parse(readFileSync('./forecast/output_forecast_middle_taiwan.json'));
    res.send(northWather)
})

router.get('/cities/middle', function (req, res, next) {
    let northWather = JSON.parse(readFileSync('./forecast/cities_middle_taiwan.json'));
    res.send(northWather)
})

router.get('/south', function (req, res, next) {
    let northWather = JSON.parse(readFileSync('./forecast/output_forecast_south_taiwan.json'));
    res.send(northWather)
})

router.get('/cities/south', function (req, res, next) {
    let northWather = JSON.parse(readFileSync('./forecast/cities_south_taiwan.json'));
    res.send(northWather)
})

router.get('/east', function (req, res, next) {
    let northWather = JSON.parse(readFileSync('./forecast/output_forecast_east_taiwan.json'));
    res.send(northWather)
})

router.get('/cities/east', function (req, res, next) {
    let northWather = JSON.parse(readFileSync('./forecast/cities_east_taiwan.json'));
    res.send(northWather)
})

module.exports = router;