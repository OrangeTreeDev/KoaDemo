/**
 * Created by hubery on 2017/6/23.
 */

var co = require('co');
var thunkify = require('thunkify');
var fs = require('fs');
var read = thunkify(fs.readFile);
co(
    function *() {
        var res = yield [read('app.js'), read('package.json')];
        console.log(res);
    }
);