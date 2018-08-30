var fs = require('fs');
var file_readed = fs.readFileSync('text.txt','utf8');
console.log(file_readed);
var mass ="Heeelo"
fs.writeFileSync('some_new_text.txt',mass);
