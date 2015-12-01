/*
var fs = require('fs');
var directorio = process.argv[2];
var ext = process.argv[3];
var str;
fs.readdir(directorio, function (err,list) {
    for (var l in list) {
        //busco la ext de l
        str = list[l].split('.');
        if (str[str.length-1]===ext && str.length>1){
            console.log( list[l]);    
        }
    }
});
*/

// Solución oficial:

var fs = require('fs');
var path = require('path')
fs.readdir(process.argv[2], function (err, list) {
    
    list.forEach(function (file) {
        
        if(path.extname(file)=== '.'+process.argv[3]){
            console.log(file);
        }
        
    });
    console.log("1");
});
