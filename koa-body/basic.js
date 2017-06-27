
var Koa = require('koa');
var koaBody = require('koa-body');

var app = new Koa();

app.use(koaBody());
app.use( function *(next) {
    console.log(this.request.body);
    this.body = 'Request Body:' + JSON.stringify(this.request.body);
});

app.listen(3000);