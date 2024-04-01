//this link will go to th get delelte router with id
<a href='/delete/<%=this._id%>'></a>


// by getting the id by params we can delete the data easily
router.get('/delete/:id',async(req,res)=>{
    let _id=req.params.id
    console.log(_id)
    let Data= await userSchema.findOneAndDelete({_id})
    res.redirect('/')
  })