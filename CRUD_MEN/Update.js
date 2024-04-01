//by this we can edit the document easily




router.get('/edit/:id',async(req,res)=>{
    try{
     let _id=req.params.id
   
     let value= await userSchema.findOne({_id})
     
   
     res.render('form',{value})
   
    }
    catch(err){
     res.status(400).send(err)
    }
   })
   
   
   //form with id go to the below  post call
   //<form method="post" action="/formData/<%=this._id%>"
   //each form input value should by include 
   //<input value='<%=value.etc%>'/>
//    <div class="mb-3">
//    <label for="name" class="form-label">Enter Name</label>
//    <input type="text"  value="<%=value.name%>" name="name" class="form-control" id="name" aria-describedby="emailHelp">
//  </div>
   

//upload.single should only inlucd if it has a img file in form
   router.post('/formData/:id',upload.single('img'),async(req,res)=>{
   
   try{
     let _id=req.params.id
     // console.log('try')
     console.log(req.body.comment)
    console.log(req.body)
     let update=await userSchema.updateOne({_id},req.body,{new:true})
     // userSchema.save()
      res.redirect('/')
   }
   catch(err){
     res.status(400).send(err)
   }
   })