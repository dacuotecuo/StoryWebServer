/**
 * global error listen
 * date: 2018-10-12
 * author: jeffeliu
 */

'use strict';

const log = require('./log');

/**
 * 全局异常log日志监听
 * @return {[type]} [description]
 */
exports.listen = () => {
    //异常捕获逻辑 Start //
    process.on('uncaughtException', err => {
        log.error.info('uncaughtException at:', err.message + '\n' + err.stack);
    });

    process.on('unhandledRejection', (reason, p) => {
        log.error.info('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
    });

    process.on('rejectionHandled', (reason, p) => {
        log.error.info('Rejection Unhandled at: Promise ', p, ' reason: ', reason);
    });

    process.on('warning', warning => {
        log.error.info('warning on:', warning.name, warning.message, warning.stack);
    });
    //异常捕获逻辑 End //
};