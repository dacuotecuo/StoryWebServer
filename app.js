/**
 * 主程序入口
 * Date: 2018-10-12
 * Author: jeffeliu
 */

'use strict';

const express   = require('express');
const path      = require('path');
const app       = express();
const d         = require('./mid/d');
const e         = require('./mid/e');

const port  = process.env.PORT  || 8080;
const ip    = process.env.IP || '0.0.0.0';
const log   = require('./lib/log');


//全局异常监听
require('./lib/error').listen();

app.use('/', function () {
    res.send('interface not found');
});

app.use('/test', function (req, res) {
    res.send('test');
});

//用户相关
app.use('/user', d, require('./routes/user'), e);

//故事相关
app.use('/story', d, require('./routes/story'), e);

app.use((req, res) => {
    try { res.status(204).end();} catch(ex) { }
});

//全局匹配异常脚本添加
app.use(function (err, req, res) {

    console.log(err);
    try { res.end(204); } catch(ex) {}

});

app.listen(port, ip, () => { 
    console.log(`server is listening http://${ip}:${port}/`); 
});