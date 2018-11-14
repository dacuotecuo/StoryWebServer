/**
 * 故事相关的路由接口
 * author: jeffeliu
 * date: 2018-11-06
 */

'use strict';
const express = require('express');
const router = express.Router();
const redis = require('../data/redis');

/**
 * 获取一篇故事内容
 */
router.get('/get_story', function (req, res, next) {
    
    const { data } = res.locals;

    console.log(data);

    res.locals.response = {
        owner: 'shenziqi',
        title: '诗经第一章节',
        create_time: '2018-11-14 13:46:56 235',
        sections: [{
            type: 'text',
            content: '关关雎鸠，在河之洲，窈窕淑女，君子好逑',
        },{
            type: 'text',
            content: '啊啊啊啊啊啊啊'
        }, {
            type: 'pic',
            content: 'https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/BnSNEaficFAYE6LUSnOPymjfia2ecg8npI5wkD3KI6YPVdNLhx4nMFCibrpvHYqI4uCiadPKcYXmjibntCLMFoViaA5w/640?wx_fmt=png'
        },{
            type: 'text',
            content: `1.语言是生物同类之间由于沟通需要而制定的具有统一编码解码标准的声音(图像)指令。包含手势、表情、语音等肢体语言，文字是显像符号。
            2.自然语言通常是指一种自然地随文化演化的语言。例如英语、汉语、日语等。有别于人造语言，例如世界语、编程语言等。
            3.自然语言处理包括自然语言理解和自然语言生成。自然语言理解是将自然语言变成计算机能够理解的语言，及非结构化文本转变为结构化信息。`,
            hide: true
        }]
    };
    next();
});

module.exports = router;