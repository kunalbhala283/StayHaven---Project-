const express = require('express')
const router = express.Router();

const Category = require('../model/category.model')
const categoryHandler = require('../controller/categoryController')
router.route("/")
   .get(categoryHandler)

module.exports = router