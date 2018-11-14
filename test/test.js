/**
 * 参数
 */
const com = require('../lib/common');
const { key, vi } = require('../conf/conf.json').ens['story'];
const data = {
    owner: 'shenziqi',
    id: 'st0000001',
};

const d = com.encrypt(JSON.stringify(data), key, vi);

const s = com.sign('+HzAoHGMMuCGUNlStL4gzgv++hJjxFQ7dydQEgwc/ARsmMh4Ev7Yzw==', key);

console.log(key, d, s)

console.log(`/story/get_story?d=${encodeURIComponent(d)}&s=${encodeURIComponent(s)}&k=story`);
