mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/food')
.then(()=>console.log('connection is established'))
.catch((err)=>console.log(err))


//require the connection with db in the main.js file
require('./db/conn')
