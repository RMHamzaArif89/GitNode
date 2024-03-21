const express = require('express')
const app = express()

//middle ware app.use()
//On every request it will be render
//use next argument
//page will be loading again & again
app.use((req,res,next)=>{
res.send('send')
})



//correct method
app.use((req,res,next)=>{
    res.send('send')
    //it will go to next req
    next();
})