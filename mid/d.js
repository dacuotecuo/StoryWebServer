/**
 * 数据解密中间件
 * @author  jeffeliu
 * @date    2018-11-06
 */

'use strict'
const { ens } = require('../conf/conf.json');
const common  = require('../lib/common');

/**
 * 接收包的内容加密
 */
exports = module.exports = function(req, res, next) {
    
    const data = req.query.d || '';
    const sign = req.query.s || '';
    const client =  (req.query.k || '').toLowerCase();

    //无效的加密方式
    if (!ens[client]) return res.end(204);      

    const { key, vi } = ens[client];
    
    try {

        const d_d = common.decrypt(data, key, vi, 0);
        const s_s = common.sign(data, key);

        const json = JSON.parse(dd);

        if (s_s !== sign) return res.end(204);

        res.locals.data = json;

    } catch (ex) {

        return res.end(204);
    }
    next();
};