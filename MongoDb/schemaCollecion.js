//this collection will be use to find filter or search the products|data ...

const mongoose=require('mongoose')
const validator=require('validator')

const categoriesSchema= new mongoose.Schema({
    //these are the names of input...name='name'
    name:{
        type:String,
        // required:true

    },
    type:{
        type:String
    },
    img:{
        type:String,
        // unique:true
    }

})


// mongoose collection name specfied//created the new collection|table
const categoriesDetail= new mongoose.model("categoriesDetail",categoriesSchema)

//export the schema that will be import in the main.js file
module.exports=categoriesDetail;

// In this way
//categegoriesDetail=require('../model/schemaCollection.js')
