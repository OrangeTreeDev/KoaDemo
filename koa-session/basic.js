var session = require('koa-session');
var koa = require('koa');
var app = koa();

app.keys = ['some secret hurr'];

var CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    session: true,
    maxAge: 86400000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: false, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};

app.use(session(CONFIG, app));
// or if you prefer all default config, just use => app.use(session(app));

app.use(function *(){
    // ignore favicon
    if (this.path === '/favicon.ico') return;
    console.log(this.session);
    console.log(app.context);
    var n = this.session.views || 0;
    this.session.views = ++n;
    this.body = n + ' views';
})

app.listen(3000);
console.log('listening on port 3000 on %s', new Date().toTimeString());