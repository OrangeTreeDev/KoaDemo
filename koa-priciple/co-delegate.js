/**
 * Created by hubery on 2017/6/23.
 */

var co = require('co');
var thunkify = require('thunkify');
var fs = require('fs');
var stat = thunkify(fs.stat);
function *size(file) {
    var st = yield stat(file);
    return st.size;
}

co( function *() {
    var sz = yield size('package.json');
    console.log(sz);
});
