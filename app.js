var express = require ('express')
var app = express()
var PORT = process.env.PORT || 80
app.use(express.static('public'))
app.get('/',function(req,res){
    res.render('index.ejs')
})


app.listen(PORT,function(){
    console.log('server started')
})