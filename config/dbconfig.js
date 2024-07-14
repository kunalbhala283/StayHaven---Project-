const mongoose = require('mongoose') ;

const connectDB = async () => {
    try{
        await mongoose.connect(`mongodb+srv://bhalakunal1210:Kunal123@traveldbcluster.dw9bckc.mongodb.net/TravelApp?retryWrites=true&w=majority`, {
            useNewUrlParser:true
        })
    }catch(err){
        console.log(err)
    }

}

module.exports = connectDB
