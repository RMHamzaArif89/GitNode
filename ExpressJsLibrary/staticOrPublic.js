
app.use(express.static('static'))
//this can be access easily without using the /static
// /images/img.1
// /style.css








app.use('/static',express.static('static'))

//css files or images can be access using the
// /static/images/img.1
// /static/style.css



//files can by access from anywhere of folder