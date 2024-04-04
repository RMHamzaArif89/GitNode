
//just use the req.session.destroy method
app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        console.log('sessionLogout')
        res.render('login')
    })
})