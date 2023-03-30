;const dotenv = require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

const connectDB = require('./dB')
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=> res.json("hello world"))

app.use("/api/car/", require('./routes/car'))
app.use("/api/user/", require('./routes/user'))
app.use("/api/booking/" , require('./routes/bookingCar'))


app.listen(port, () =>{
    connectDB()
    console.log(`server is running on port : ${port}`)
})