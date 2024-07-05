const express = require('express')

const Category = require("../model/category.model")
const categories = require("../data/categories");

const router = express.Router();


router.route("/")
    .post(async (req,res) => {
        try{
            await Category.deleteMany();
         const hotelsInDB = await Category.insertMany(categories.data);
        res.json(hotelsInDB)
        }
        catch(err){
            res.json({message:"Could not add Categories to DB"})
        }  
    } 
    )


    module.exports =router;