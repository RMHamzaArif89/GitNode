
const express=require('express')
const app = express()
const adminRouter=require('./routes/admin')
const userRouter=require('./routes/user')



// app.use(express.static('public'))




//requst will only get if any url will start with the /admin after localhost:3000
//example localhost:3000/admin/adminPage
app.use('/admin',adminRouter)
app.use(userRouter)

app.get('/',(req,res)=>{
    res.send('home')
})


app.listen(3000,()=>{
    console.log('app is runing')
})