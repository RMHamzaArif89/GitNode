app.get('/home/inner',(req,res)=>{

    res.sendFile(path.join(__dirname,'views','userPage.html'))
})