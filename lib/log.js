/**
 * 数据获取
 * @author  jeffeliu
 * @date    2018-11-06
 */

 'use strict';
// const winston = require('winstopn');

function log () {
}

//TODO::
log.prototype.info = function () { console.log(arguments)};
log.prototype.debug = function () { console.log(arguments)};
log.prototype.error = function () { console.log(arguments)};
log.prototype.warn = function () { console.log(arguments)};

module.exports = exports = {

    debug   : new log('TafDate', 'debug'),      //调试
    error   : new log('TafDate', 'error'),      //错误日志
};