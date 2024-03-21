const express=require('express')
const router=express.Router()

router.get('/UserPage',(req,res)=>{
    res.send('UserPage first')
})
router.get('/UserPage2',(req,res)=>{
    res.send('UserPage2 second')
})
router.get('/UserPage3',(req,res)=>{
    res.send('UserPage3 third')
})

module.exports=router;