const express = require('express')
const mongoose = require('mongoose');


const hoteldataAddedtoDBRouteer = require("./routes/dataimport.router")
const categorydataAddedtoDBRouteer = require("./routes/categoryimport.router")

const hotelRouter = require("./routes/hotelrouter")
const categoryRouter = require("./routes/category.router")
const connectDB = require('./config/dbconfig')


const app = express();


 app.use(express.json())
 connectDB();
 const PORT = 3500;

app.get('/', (req, res) => {
    res.send("Hello World ")
})

app.use("/api/hotels", hotelRouter)
app.use("/api/categories",categoryRouter)
app.use("/api/categorydata",categorydataAddedtoDBRouteer)
app.use('/api/hoteldata',hoteldataAddedtoDBRouteer)

mongoose.connection.once('open', () => {
    console.log('Connected to DB')
    app.listen(process.env.PORT || PORT, () => {
        console.log("Server is up and Running ")
    })
})

