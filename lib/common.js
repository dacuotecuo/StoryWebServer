/**
 * 通用方法
 * @author  jeffeliu
 * @date    2018-11-07
 */

'use strict';

const cry = require('crypto');

/**
 * buffer
 * @param cipher
 * @param data
 * @param inputEncoding
 * @param outputEncoding
 * @returns {Buffer}
 */
function cipheriv (cipher, data, inputEncoding, outputEncoding) {
	const buf1  = Buffer.from(cipher.update(data, inputEncoding, outputEncoding));
	const buf2  = Buffer.from(cipher.final(outputEncoding));
	const r     = Buffer.alloc(buf1.length + buf2.length);
	buf1.copy(r);
	buf2.copy(r, buf1.length);
	return r;
}

/**
 * md5加密
 * @param data
 */
function md5 (data) {
	return cry.createHash('md5').update(data).digest('hex');
}

/**
 * des 加密
 * @param data
 * @param key
 * @param iv
 * @returns {String}
 */
function en_des (data, key, iv) {
	return cipheriv(cry.createCipheriv('des', key, iv), data, 'utf8').toString('base64');
}

/**
 * des解密
 * @param data
 * @param key
 * @param iv
 * @returns {String}
 */
function de_des (data, key, iv) {
	return cipheriv(cry.createDecipheriv('des', key, iv), data, 'base64').toString('utf8');
}

/**
 * blowfish 加密
 * @param data
 * @param key
 * @param iv
 * @returns {String}
 */
function en_blowfish (data, key, iv) {
	//将数据补充为8的倍数
	data += new Array(Math.ceil(data.length / 8) * 8 - data.length + 1).join(' ');

	return cipheriv(cry.createCipheriv('blowfish', key, iv).setAutoPadding(false), data, 'utf8', 'base64');
}

/**
 * blowfish 解密
 * @param data
 * @param key
 * @param iv
 * @returns {String}
 */
function de_blowfish (data, key, iv) {
	return cipheriv(cry.createDecipheriv('blowfish', key, iv).setAutoPadding(false), data, 'base64', 'utf8');
}

//md5加密
exports.md5 = md5;
//签名生成
// exports.sign = (data, key) => cry.createHmac('md5', key).update(Buffer.from(data), 'base64').digest('base64');

exports.sign = (data, key) => md5(`${data}${key}`);


/**
 * 统一解密
 * @param data
 * @param key
 * @param iv
 * @param type 加密类型，目前就两种，0：des， 1：blowfish
 */
exports.decrypt = function () {

	if (arguments[3] == 1) return de_blowfish.apply(null, arguments);

	return de_des.apply(null, arguments);
};

/**
 * 统一解密
 * @param data
 * @param key
 * @param iv
 * @param type
 */
exports.encrypt = function () {

	if (arguments[3] == 1) return en_blowfish.apply(null, arguments);

	return en_des.apply(null, arguments);
};