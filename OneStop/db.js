const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://vijaysari16:vjsari16@cluster0.zv8bre7.mongodb.net/One-Stop'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('MongoDB connected successfully');
})

db.on('error' , ()=>{
    console.log('MongoDB connection failed');
})

module.exports = mongoose