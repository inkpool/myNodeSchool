var path = process.argv[2];
var fs = require('fs');
var buffer = fs.readFileSync(path);
var str = buffer.toString();
console.log(str.split('\n').length-1);
//console.log(path);
