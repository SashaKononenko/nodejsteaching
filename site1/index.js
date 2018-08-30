var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.get('/news',function(req,res){
    res.sendFile(__dirname+"/article.txt");
});

app.get('/form',function(req,res){
    res.sendFile(__dirname+"/form.html");
});

app.post('/form',urlencodedParser,function(req,res){
    console.log(req.body)    
res.sendFile(__dirname+"/form.html");
});

app.get('/news/:id',function(req,res){
    console.log(req.query);
    res.render('news',{newsId: req.params.id});
});

app.listen(3000);
