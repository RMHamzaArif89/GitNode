const hbs=require('express-handlebars')
//app.set use to set the name & value...
//set the view engine

app.set('view engine','hbs')
       //{name}          {value}
//set the view directory
app.set('views',path.join(__dirname,'view'))