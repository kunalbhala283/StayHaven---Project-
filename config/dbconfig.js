const mongoose = require('mongoose') ;
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser:true
        })
    }catch(err){
        console.log(err)
    }

}

module.exports = connectDB