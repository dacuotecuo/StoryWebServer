/**
 * redis处理相关
 * @author      jeffeliu
 * @date        2018-11-06
 */

'use strict';

const { redis_conf } = require('../conf/conf.json');
const redis = require("redis").createClient(redis_conf);

redis.get('a', function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});