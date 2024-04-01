//userSchema=require('./model/form')
router.get('/',async(req,res)=>{
    let Data=await userSchema.find()

    res.render('index',{Data})
})





router.get('/about',async(req,res)=>{
    let Data=await userSchema.find({name:'hamza'})

    res.render('about',{Data})
})



//find by id to get the detail of some card
router.get('/detail/:id',async(req,res)=>{
    let _id=req.params.id
   
    let Data= await userSchema.findById({_id})
    res.render('userDetail',{Data})
  })