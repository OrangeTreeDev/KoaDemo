var koa = require('koa');
var app = new koa();

/* 抛出异常 */
// function *errGen() {
//     try {
//         yield 'b';
//     }catch (err){
//         throw err;
//     }
// }
//
// let errIterator = errGen();
// if (errIterator.next().value == 'b'){
//     errIterator.throw(new Error('error test'));
// }

/* for of */
// function *foo () {
//     yield 1;
//     yield 2;
//     yield 3;
// }
//
// for (let v of foo()) {
//     console.log(v);
// }

/* yield * means generator delegate */
// function *bar () {
//     yield 'b';
// }
//
// function *foo () {
//     yield 'a';
//     yield *bar();
//     yield 'c';
// }
//
// for (v of foo()) {
//     console.log(v);
// }

/* next 方法 */
// var foo = function *(arg) {
//     let i = 0;
//     while (i < 2){
//         yield i++;
//     }
// }
// const gen = foo(123);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
//
// app.use(function *() {
//     this.body = 'Hello World';
//
// });

app.listen(3000);