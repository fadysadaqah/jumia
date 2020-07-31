var express = require('express')
var app = express()
var PORT = process.env.PORT || 80
app.use(express.static('public'))
var pg = require('pg')
const client = new pg.Client(process.env.POSTGRESQL_ADDON_URI);
// const client = new pg.Client('postgres://tbisdftccjspib:86b4c350daf1e5a4ab2df6b268309e86cc2eab32eae44911b19162672565b395@ec2-54-146-4-66.compute-1.amazonaws.com:5432/d47psd6pcr68ir');
client.connect();
client.query("create table data (id serial , key TEXT , value TEXT)")
///////////////////////////////////////////////////////////////////////////////////
app.get('/', function (req, res) {
    res.render('index.ejs')
})

app.post('/', function (req, res) {
    client.query('select * from data', function (err, RES) {
        if (!err) {
            res.send(RES.rows)
        }
    })
})
app.post('/add', function (req, res) {
    var key = req.body.key
    var value = req.body.value
    client.query("insert into data (key,value) values ('"+ key +"','"+value+"')", function (err, RES) {
        if (!err) {
            res.send(RES.rows)
        }
    })
})


app.listen(PORT, function () {
    console.log('server started')
})