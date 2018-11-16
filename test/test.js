/**
 * 参数
 */
const com = require('../lib/common');
const { key, vi } = require('../conf/conf.json').ens['story'];
const data = {
    "startTime": "2018-11-14 20:00:00 000",
    "endTime": "2018-11-14 20:00:00 000",
    "offSet": 10,
    "count": 5
};

const d = com.encrypt(JSON.stringify(data), key, vi);

const s = com.sign(d, key);

console.log(key, d, s)

console.log(`/story/getHomeLists?d=${encodeURIComponent(d)}&s=${encodeURIComponent(s)}&k=story`);
