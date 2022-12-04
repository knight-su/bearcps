const app = getApp();
Page({
    "data": {
        "redPacketList": [{
            "id": 1,
            "title": "美团外卖红包",
            "icon": "../../images/icons/美团外卖.png",
            "type": 1,
            "appId": "wxde8ac0a21135c07d",
            "skip2Url": "/index/pages/h5/h5?f_userId=1&f_token=1&s_cps=1&weburl=https%3A%2F%2Fdpurl.cn%2FU6sdbbKz",
            "extra": "额外内容111"
        }, {
            "id": 2,
            "title": "饿了么红包",
            "icon": "../../images/icons/饿了么.png",
            "type": 1,
            "appId": "wxece3a9a4c82f58c9",
            "skip2Url": "commercialize/pages/taoke-guide/index?scene=e9259b417247483e8f57fbdb3679a25d",
            "extra": "额外内容222"
        }, {
            "id": 3,
            "title": "滴滴打车红包",
            "icon": "../../images/icons/滴滴.jpg",
            "type": 1,
            "appId": "wxaf35009675aa0b2a",
            "skip2Url": "/pages/index/index?scene=2x66qE7&source_id=ad9592ac709c14f9acfb",
            "extra": "额外内容333"
        }]
    },
    //跳转其他小程序
    skipOtherMiniProgram: function(e) {
        console.log(e);
        wx.navigateToMiniProgram({
            "appId": e.currentTarget.dataset.redpacket.appId,
            "path": e.currentTarget.dataset.redpacket.skip2Url,
            "envVersion": 'develop',
            success(res) {
                // 打开成功
            }
        })
    }
})