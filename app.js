/**
 * 主程序入口
 * Date: 2018-10-12
 * Author: jeffeliu
 */

'use strict';

const express   = require('express');
const path      = require('path');
const app       = express();

const port  = process.env.PORT  || 10011;
const ip    = process.env.IP || '127.0.0.1';
const log   = require('./lib/log');

//全局异常监听
require('./lib/error').listen();

//用户相关
app.use('/user', require('./routes/user'));

//故事相关
app.use('/story', require('./routes/story'));

app.use((req, res) => {

    log.debug.info(`invalid_path|${req.method}|${req.originalUrl}|${JSON.stringify(req.body)}|${JSON.stringify(req.params)}`);

    try {
        res.status(204).end();
    } catch(ex) {
        log.debug.info(`invalid_path_send_error|${req.method}|${req.originalUrl}|${JSON.stringify(req.body)}|${JSON.stringify(req.params)}|`, ex);
    }
});

//全局匹配异常脚本添加
app.use(function (err, req, res) {

    log.debug.info(`err_happens|${req.originalUrl}|${req.method}|${JSON.stringify(req.body)}|${JSON.stringify(req.params)}|err=`, err);

    try {
        res.end(204);
    } catch(ex) {
        log.debug.info(`err_happens_send_error|${req.method}|${req.originalUrl}|${JSON.stringify(req.body)}|${JSON.stringify(req.params)}|`, ex);
    }

});

app.listen(port, ip, () => { console.log(`server is listening http://${ip}:${port}/`); });