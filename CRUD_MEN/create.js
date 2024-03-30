

router.post('/create',async(req,res)=>{
 
   
    try{
        const userData=new userSchema({
            name:req.body.name,
            comment:req.body.comment,
            review:req.body.review,
            ratings:req.body.ratings
        })
        //or simply second method
       // const userData=new userSchema(req.body)
        
        await userSchema.create(userData)
        res.redirect('/')
    }
   
    catch(err){
     res.send(err)
    }
})