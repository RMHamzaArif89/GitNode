const Data=reqiure('./model/categoriesDetail')

const product=new Data({
    name:'hamza',
    type:'jfklds',
    img:'jfkdsj.png'

})
product
.save()
.then(result=>{
    console.log('created')
    res.redirect('/prodct/newProduct')
})
.catch(err=>{
    console.log(err)
})