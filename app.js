/**
 * 主程序入口
 * Date: 2018-10-12
 * Author: jeffeliu
 */

'use strict';

const express   = require('express');
const app       = express();
const d         = require('./mid/d');
const e         = require('./mid/e');
const u_d       = require('./mid/u_d');
const u_e       = require('./mid/u_e');
const { server_ip } = require('./conf/conf.json');
const path      = require('path');

const port  = process.env.PORT  || 10080;
const ip    = process.env.IP || server_ip;
const log   = require('./lib/log');


//全局异常监听
require('./lib/error').listen();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

/**
 * 首页
 */
app.use('/', function (req, res) {
    res.render('index');
});

app.use('/test', function (req, res) {
    res.send('test');
});

//用户相关
app.use('/user', d, require('./routes/user'), e);

//故事相关
app.use('/story', d, require('./routes/story'), e);

app.use('/json/user', u_d, require('./routes/user'), u_e);
app.use('/json/story', u_d, require('./routes/story'), u_e);

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