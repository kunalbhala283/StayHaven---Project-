const express = require('express')
const router = express.Router();

const Hotel = require("../model/hotel.model")
const singlehotelHandler = require('../controller/singleHotelController')

router.route("/:id")
    .get(singlehotelHandler)

module.exports = router;