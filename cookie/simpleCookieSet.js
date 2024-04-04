//cookies
app.get('/login',(req,res)=>{
    console.log(req.get('cookie'))
    res.render('login')
    
})


app.post('/login',(req,res)=>{
    //maximum age that the cookie will be appeared
    res.setHeader('Set-Cookie','MyCookie=cookieSetByHeader; Max-Age=10')
    //it will not show the cookie by secure method
    res.setHeader('Set-Cookie','MyCookie=cookieSetByHeader; Secure')
    res.redirect('/form')

})
//go to the inspect & then go to the application link Then select the cookie and check the localhost to see the cookie