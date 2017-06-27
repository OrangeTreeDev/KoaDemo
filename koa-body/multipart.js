/***
 * 访问路径 /user ，返回注册模拟页面；
 * 点击提交按钮，上传信息，交由服务端body解析
 */

var Koa = require('koa');
var router = require('koa-router')();
var koaBody = require('koa-body');
var multiline = require('multiline');

var app = new Koa();

router.get('/user', function *() {
    this.set('Content-Type','text/html');
    this.body = multiline.stripIndent( function () {/*
     <!DOCTYPE html>
     <html lang="en">
     <head>
        <meta charset="UTF-8">
        <title>User Page</title>
     </head>
     <body>
     <form action="/register" enctype="multipart/form-data" method="post" style="max-width:300px; margin: auto">
         <input type="text" name="name" placeholder="your name"><br>
         <input type="number" name="age" placeholder="your age"><br>
         <input type="file" name="file" value="选择文件"><br>
         <input type="submit" value="提交">
     </form>
     </body>
     </html>
    */
    })
});

router.post('/register', koaBody({ multipart: true }), function *() {
    console.log( JSON.stringify(this.request.body) );
    this.body = this.is('multipart');
});

app.use( router.routes() );

app.listen(3000);



