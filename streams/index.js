var fs = require('fs');
var myReadShort = fs.createReadStream(__dirname + '/article.txt');
myReadShort.on('data',function(chunk){
    console.log("Новие данные текста получены\n"+chunk);
});
