var express = require ('express')
var app = express()
var PORT = 80 || process.env.PORT
app.use(express.static('public'))
app.get('/',function(req,res){
    res.render('index.ejs')
})


app.listen(PORT,function(){
    console.log('server started')
})