const express=require('express')
const app=express()
const bodyParser = require("body-parser");



//this is middleWare use to encode the form&body request value //example req.body from form
app.use(bodyParser.urlencoded({extended:false}));