/**
 * Created by hubery on 2017/6/23.
 */

var thunkify = require('thunkify');
var fs = require('fs');
var read = thunkify(fs.readFile);

function *readFileGen() {
    try{
        var file = yield read('package.json');
        console.log(file);
    }catch (err){
        throw (err);
    }
}

var readFileIns = readFileGen();
readFileIns.next().value( function (err, data) {
    if (err){
        readFileIns.throw(err);
    }else {
        readFileIns.next(data);
    }
});