var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
    console.log("URL страницы:"+req.url);
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    var obj = {
        qqq:'q',
        sss:'s',
        eee:3,
    }    
    res.end(JSON.stringify(obj));
    //var myReadShort = fs.createReadStream(__dirname+"/index.html",'utf8');
    //myReadShort.pipe(res);
});



server.listen(3000,'127.0.0.1');
console.log("Start server");
