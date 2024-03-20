//Created the nodejs server

const http=require('http')

const server=http.createServer(()=>{
    let url=req.url
    if(url==='/'){
        res.write('home')
        res.end()
    }
    else if(url==='/about'){
        res.write('about')
        res.end()
    }
    return res.end()

})

server.listen(3000,()=>{
    console.log('server is listening')
})

//localhost:3000
//