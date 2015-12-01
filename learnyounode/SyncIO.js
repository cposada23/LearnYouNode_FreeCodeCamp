var fs = require('fs');
var filename = process.argv[2];
var bo = fs.readFileSync(filename);
var str = bo.toString();
var array = str.split('\n');
console.log(array.length-1);


