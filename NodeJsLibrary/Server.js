//Created the nodejs server

const http=require('http')

const server=http.createServer(()=>{
    let url=req.url
    if(url==='/'){
        res.write('home')
    }
    else if(url==='/about'){
        res.write('about')
    }

})

server.listen(3000,()=>{
    console.log('server is listening')
})

//localhost:3000
//