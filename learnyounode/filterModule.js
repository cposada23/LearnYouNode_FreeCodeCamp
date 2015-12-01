var fs = require('fs');
var path = require('path')

module.exports = function filtrar(directory, extension,callback ) {
    fs.readdir(directory,function (err,files) {
        if (err){
            
            callback(err,null);
            
        }
        else{
            
            var list = []
            files.forEach(function (file) {
                if(path.extname(file)=== '.'+extension){
                    list.push(file);
                }
            });
            
            callback(null,list);
            
        }
    });
};

