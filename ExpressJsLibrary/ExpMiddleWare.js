const express = require('express')
const app = express()

//middle ware app.use()
//On every request it will be render
//use next argument
//page will be loading again & again
//correct method
app.use((req,res,next)=>{
    res.send('send')
    //it will go to next req
    next();
})

app.use((req,res,next)=>{
    res.send('send')
    })
    

//middleware route with the path
app.use('/home',(req,res,next)=>{
    res.send('home page')
    //this will not go next
})
    
    