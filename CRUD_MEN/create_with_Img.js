router.use(express.urlencoded({extended:false}))
router.use(express.json())




//for img upload form should include these ....

    // <form action="/formData/<%=value._id%>" method="post" class="w-50 text-light"  enctype="multipart/form-data">
  // <div class="mb-3">
  //         <label for="inputZip" class="form-label">Select Image</label>
  //         <input type="file"  value="<%=value.img%>" accept="image/*" name="img" id="" class="form-control">

  //     </div>
    //   <form/>







//static upload file set
router.set(express.static('upload'))
// img upload using this method
const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, "upload")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      return cb(null,Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage:Storage })


//just added upload.single('img') for the file
  router.post('/create',upload.single('img'),async(req,res)=>{
 
   
    try{
        const userData=new userSchema({
            name:req.body.name,
            comment:req.body.comment,
            review:req.body.review,
            ratings:req.body.ratings,
            img:req.file.filename
        })
     
        await userSchema.create(userData)
        res.redirect('/')
    }
   
    catch(err){
     res.send(err)
    }
})
