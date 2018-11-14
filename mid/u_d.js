/**
 * 数据解密中间件
 * @author  jeffeliu
 * @date    2018-11-06
 */

'use strict'

/**
 * 接收包的内容加密
 */
exports = module.exports = function(req, res, next) {

    res.locals.data = req.query;
    next();
};