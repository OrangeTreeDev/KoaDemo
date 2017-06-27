/***
 *一般来说，建议只解析指定路径的请求，我们可以结合router中间件使用
 */

var app = require('koa')();
var koaBody = require('koa-body')();
var router = require('koa-router')();

router.post('/user', koaBody, function *(next) {
    this.body = JSON.stringify(this.request.body);
});

app.use( router.routes() );

app.listen(3000);