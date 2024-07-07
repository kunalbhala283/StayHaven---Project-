const express = require('express')
const router = express.Router();
const Hotel = require("../model/hotel.model");
const getAllHotelHandler = require('../controller/hotelController')
  
router.route("/")
    .get( getAllHotelHandler)


module.exports = router;