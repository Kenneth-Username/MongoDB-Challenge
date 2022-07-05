//implementing .env
require('dotenv').config()



//implementing express
var express = require('express')
var app = new express()
var port = 8000;

//implementing mongoDB
var MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URI

var db;

MongoClient.connect(uri,{useNewUrlParser:true},(err,client) =>{
    if(err) throw err;
    
    console.log('connected to db')

    db = client.db('test')
})

app.listen(port,() => {
    console.log('connected to port', port)
});