const Hotel = require("../model/hotel.model")

const singlehotelHandler = async (req,res)=>{
    try{
        const {id} = req.params;
        const hotel = await Hotel.findById(id);
        res.json(hotel)
    }catch(err){
        res.status(404).json({message:"could not find hotel with the given ID"})
    }
}

module.exports = singlehotelHandler;