const Wishlist = require('../model/wishlist.model')


const createWishlistHandler =async (req,res) => {
        const newWishlist = new Wishlist(req.body);
        try {
            const savedWishlist = await newWishlist.save();
            res.status(201).json(savedWishlist);
        }
        catch (err) {
            res.status(500).json({ message: "Failed to create wishlist" })
        }
}

const getWishlistHandler = async (req, res) => {
    try {
        const wishlist = await Wishlist.find({})
        wishlist ? res.json(wishlist) : res.json({ message: "No Items found in the wishlist" })
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

const deleteWishlistHandler = async (req,res) =>{
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({ message: "Hotel Deleted From Wishlist" })
    } catch (err) {
        res.status(500).json({ message: "Could not delete hotel from wishlist" })
    }
}
module.exports ={createWishlistHandler,deleteWishlistHandler,getWishlistHandler}