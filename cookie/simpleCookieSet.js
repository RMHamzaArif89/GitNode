//cookies
app.get('/login',(req,res)=>{
    console.log(req.get('cookie'))
    res.render('login')
    
})


app.post('/login',(req,res)=>{

    res.setHeader('Set-Cookie','MyCookie=cookieSetByHeader')
    res.redirect('/form')

})
//go to the inspect & then go to the application link Then select the cookie and check the localhost to see the cookie