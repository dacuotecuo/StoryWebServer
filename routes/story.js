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
        "owner": 'shenziqi',
        "ownerID": "sto_user00001",
        "headerImageUrl": "https://avatars3.githubusercontent.com/u/6777479?s=460&v=4",
        "creatTime": "2018-11-14 19:34:35 632",
        "storyTitle": "普通故事",
        "isOriginal": "1",
        "name": "西窗不眠",
        "story": [
            {
                "section": [
                    {
                        "type": "text",
                        "content": "第一段第一个素材?n悲哀！n悲哀！n悲哀！n悲哀！n悲哀！"
                    },
                    {
                        "type": "pic",
                        "content": "https://img1.doubanio.com/view/photo/albumcover/public/p2519255768.jpg"
                    },
                    {
                        "type": "text",
                        "content": "第一段结尾"
                    }
                ]
            },
            {
                "section": [
                    {
                        "type": "text",
                        "content": "第二段开头"
                    },
                    {
                        "type": "pic",
                        "content": "https://img3.doubanio.com/view/photo/albumcover/public/p2519057573.jpg"
                    },
                    {
                        "type": "text",
                        "content": "第二段结尾n换一行"
                    }
                ]
            }
        ]
    };
    next();
});

module.exports = router;