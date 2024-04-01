//userSchema=require('./model/form')
router.get('/',async(req,res)=>{
    let Data=await userSchema.find()

    res.render('index',{Data})
})





router.get('/about',async(req,res)=>{
    let Data=await userSchema.find({name:'hamza'})

    res.render('about',{Data})
})