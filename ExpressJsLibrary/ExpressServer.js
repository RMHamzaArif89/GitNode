const express=require('express')
const app = express()


//middle ware to set the public directory
app.use(express.static('public'))

//simple request
app.get('/home',(req,res)=>{
    res.render('index')
})

app.get('/home/inner',(req,res)=>{

    res.send('homePageInnerChange')
})

//params request
app.get('/about/:aboutParm',(req,res)=>{
    res.send(req.params)
})

app.get('/page?qur',(req,res)=>{
    res.send(req.query)
})

//port is listening on 3000
app.listen(3000,()=>{
    console.log('app is runing')
})