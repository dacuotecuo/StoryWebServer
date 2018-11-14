/**
 * 回包处理中间件
 * @author  jeffeliu
 * @date    2017-03-23
 */

'use strict';

/**
 * 回报处理
 * @param   _     请求包体
 * @param   res     响应包体
 * @param   next    
 */
module.exports = function (_, res) {

    const { response }  = res.locals;

    return res.send(response);
};