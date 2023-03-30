const mongoose = require('mongoose')

function connectDB(){

mongoose.connect('mongodb+srv://Gowsalya:Gowshi%40123@cluster0.vgu8hly.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('connected', ()=>{
    console.log("monogo db connection is done");
})
connection.on('error', ()=>{
    console.log("error");
})
}


module.exports = connectDB