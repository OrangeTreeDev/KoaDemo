/**
 * Created by hubery on 2017/6/27.
 */

module.exports = function (opts, app) {

}

function formatOpts(opts) {
    opts = opts || {};

    opts.key = 'key' in opts ? opts.key : 'koa:sess';
    opts.overwrite = 'overwrite' in opts ? opts.overwrite : true;
    opts.httpOnly = 'httpOnly' in opts ? opts.httpOnly : true;
    opts.signed = 'signed' in opts ? opts.signed : true;
}