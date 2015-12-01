var filterModule = require('./filterModule.js');

filterModule(process.argv[2], process.argv[3], function done(err,list) {
    if (err){
        console.log(err);
    }
    else{
        list.forEach(function (item) {
            console.log(item);
        });
    }
});