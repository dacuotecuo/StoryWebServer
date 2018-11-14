/**
 * 故事相关的路由接口
 * author: jeffeliu
 * date: 2018-11-06
 */

'use strict';
const express = require('express');
const router = express.Router();
const redis = require('../data/redis');

//获取一个时间段内的故事
router.get('/getHomeLists', function (req, res, next) {
    
    const { data } = res.locals;

    res.locals.response = require('../demos/getHomeLists.json');

    next();
});

//获取有故事的日期天数
router.get('/getDateCount', function (req, res, next) {

    const { data } = res.locals;

    res.locals.response = require('../demos/getDateCount.json');
    
    next();
});

//获取所有有日期的故事列表
router.get('/getDates', function (req, res, next) {

    const { data } = res.locals;

    res.locals.response = require('../demos/getDates.json');
    next();
});

module.exports = router;