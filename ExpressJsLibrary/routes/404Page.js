
//use this middle ware at the end of all request....
app.use((req,res,next)=>{
    res.status(404).send('<h1>Oops! Page Not Found...</h1>')
})