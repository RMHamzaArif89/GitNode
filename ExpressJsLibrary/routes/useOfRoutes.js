const express=require('express')
const app = express()
const adminRouter=require('./routes/admin')
const userRouter=require('./routes/user')



// app.use(express.static('public'))

//use the router middleware
app.use(adminRouter)
app.use(userRouter)

app.get('/',(req,res)=>{
    res.send('home')
})


app.listen(3000,()=>{
    console.log('app is runing')
})