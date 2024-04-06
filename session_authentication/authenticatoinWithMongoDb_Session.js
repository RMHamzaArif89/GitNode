const express=require('express')
const router=express.Router()
const userModel=require('../model/user')
const bodyParser=require('body-parser')
const bcrypt = require('bcrypt');

router.use(express.urlencoded({extended:true}))
router.use(express.json())



router.get('/register',(req,res)=>{
    res.render('register')
})


const isAuth=(req,res,next)=>{
    if(req.session.isAuth){
       next()
    }else{
        return res.redirect('/login')
    }
}


router.post('/userRegister',async(req,res)=>{
    
    
    try{
        const{name,email,password}=req.body

        const user= await userModel.findOne({email})
        if(user){
           return  res.render('login')
        }
           
        let hashPassword=await bcrypt.hash(password,10)

        const userDetail=new userModel({
            name,
            email,
            password:hashPassword
        })

        
        await userModel.create(userDetail)
        req.session.isAuth=true;
        res.redirect('/home')
    }
   
    catch(err){
     res.send(err)
    }

})






router.post('/login',async(req,res)=>{
  try{
    const{email,password}=req.body;
    let user=await userModel.findOne({email})
    
    if(!user){
     return res.render('login',{message:'email is wrong'})
    }
 
    let isMatch=await bcrypt.compare(password,user.password)
    console.log(isMatch)
    if(!isMatch){
        return res.render('login',{message:'Password is wrong'})
    }
    req.session.isAuth=true;
     res.redirect('/home')
  }
  catch(e){
    res.send(e)
  }
})





router.get('/home',isAuth,(req,res)=>{
    res.render('home',{title:'Home|Page'})
})
router.get('/login',(req,res)=>{
    res.render('login',{message:''})
})


router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if (err) throw err;
        res.redirect('/login')
    })
})





module.exports=router;