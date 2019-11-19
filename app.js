var express = require("express");
var bodyParser = require('body-parser')
var app = express();
const path=require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.set('view engine', 'ejs');
app.set('Views', path.join(__dirname, 'Views'));

app.use('/assets', express.static('stuff'));
app.get('/index', function(req,res){
    res.render('index')
});

app.post('/index', urlencodedParser, function(req, res){
    res.render('post', {data: req.body});
});

app.listen(3000);