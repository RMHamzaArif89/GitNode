//for send Emails
const nodemailer=require('nodemailer')
const sendgripTransport=require('nodemailer-sendgrid-transport')

const transporter= nodemailer.createTransport(sendgripTransport({
    auth:{
        api_key:'key from sendgrid website api'
    }
}))


//in the post request of form
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
        .then(result=>{
            return transporter.sendMail({
            to:email,
            from:'ranahamzaisonline@gmail.com',
            subject:'sign up succeed',
            html:'<h1>You have seccussfully sign up for the application'
            })

        })
        req.session.isAuth=true;
        res.redirect('/home')
    }
   
    catch(err){
     res.send(err)
    }

})