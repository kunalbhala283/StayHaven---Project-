const express = require('express')
const router = express.Router();

const Hotel = require("../model/hotel.model")


router.route("/:id")
    .get(async (req,res)=>{
        try{
            const {id} = req.params;
            const hotel = await Hotel.findById(id);
            res.json(hotel)
        }catch(err){
            res.status(404).json({message:"could not find hotel with the given ID"})
        }
    })

module.exports = router;