/**
 * 回包处理中间件
 * @author  jeffeliu
 * @date    2017-03-23
 */

'use strict';

const com = require('../lib/common');
const { ens } = require('../conf/conf.json');

/**
 * 回报处理
 * @param   req     请求包体
 * @param   res     响应包体
 * @param   next    
 */
module.exports = function (req, res, next) {

    const { response }  = res.locals;
    const key           =  (req.query.k || '').toLowerCase();
    const { key, vi }   = ens[key];
};