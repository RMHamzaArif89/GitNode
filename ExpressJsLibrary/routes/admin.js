const express=require('express')
const router=express.Router()

router.get('/adminPage',(req,res,next)=>{
    res.send('adminPage first')
})
router.get('/adminPage2',(req,res,next)=>{
    res.send('adminPage2 second')
})
router.get('/adminPage3',(req,res,next)=>{
    res.send('adminPage3 third')
})

module.exports=router;