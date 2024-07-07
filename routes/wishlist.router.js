const express = require('express')

const Wishlist = require("../model/wishlist.model");
const verifyUser = require('../middleware/verifyuser');
const { createWishlistHandler, deleteWishlistHandler, getWishlistHandler } = require('../controller/wishlistController')
const router = express.Router();


router.route("/")
    .post(verifyUser, createWishlistHandler)
router.route("/:id")
    .delete(deleteWishlistHandler)

router.route("/")
    .get(verifyUser, getWishlistHandler)
module.exports = router;