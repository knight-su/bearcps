const app = getApp();
Page({
    "data": {
        "redPacketList": [{
            "id": 1,
            "title": "美团红包",
            "icon": "https://cps-nj.oss-cn-nanjing.aliyuncs.com/%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96.png",
            "type": 1,
            "appId": "wxde8ac0a21135c07d",
            "skip2Url": "/index/pages/h5/h5?f_userId=1&f_token=1&s_cps=1&weburl=https%3A%2F%2Fdpurl.cn%2FU6sdbbKz",
            "extra": "点击领取",
            "content": "每月的8日、18日均有大额红包，记得领取哟~",
            "footer": "具体红包金额以实际为主"
        }, {
            "id": 2,
            "title": "饿了么红包",
            "icon": "https://cps-nj.oss-cn-nanjing.aliyuncs.com/%E9%A5%BF%E4%BA%86%E4%B9%88.png",
            "type": 1,
            "appId": "wxece3a9a4c82f58c9",
            "skip2Url": "commercialize/pages/taoke-guide/index?scene=e9259b417247483e8f57fbdb3679a25d",
            "extra": "点击领取",
            "content": "每月的8日、18日均有大额红包，记得领取哟~",
            "footer": "具体红包金额以实际为主"
        }, {
            "id": 3,
            "title": "滴滴红包",
            "icon": "https://cps-nj.oss-cn-nanjing.aliyuncs.com/%E6%BB%B4%E6%BB%B4.jpg",
            "type": 1,
            "appId": "wxaf35009675aa0b2a",
            "skip2Url": "/pages/index/index?scene=2x66qE7&source_id=ad9592ac709c14f9acfb",
            "extra": "点击领取",
            "content": "每月的8日、18日均有大额红包，记得领取哟~",
            "footer": "具体红包金额以实际为主"
        },{
            "id": 4,
            "title": "KFC福利点餐",
            "icon": "https://cps-nj.oss-cn-nanjing.aliyuncs.com/KFC.png",
            "type": 1,
            "appId": "wxaf35009675aa0b2a",
            "skip2Url": "/pages/index/index?scene=2x66qE7&source_id=ad9592ac709c14f9acfb",
            "extra": "点击领取",
            "content": "每月的8日、18日均有大额红包，记得领取哟~",
            "footer": "具体红包金额以实际为主"
        },{
            "id": 5,
            "title": "花小猪打车",
            "icon": "https://cps-nj.oss-cn-nanjing.aliyuncs.com/%E8%8A%B1%E5%B0%8F%E7%8C%AA.jpg",
            "type": 1,
            "appId": "wxaf35009675aa0b2a",
            "skip2Url": "/pages/index/index?scene=2x66qE7&source_id=ad9592ac709c14f9acfb",
            "extra": "点击领取",
            "content": "每月的8日、18日均有大额红包，记得领取哟~",
            "footer": "具体红包金额以实际为主"
        },{
            "id": 6,
            "title": "汉堡王福利点餐",
            "icon": "https://cps-nj.oss-cn-nanjing.aliyuncs.com/%E6%B1%89%E5%A0%A1%E7%8E%8B.jpg",
            "type": 1,
            "appId": "wxaf35009675aa0b2a",
            "skip2Url": "/pages/index/index?scene=2x66qE7&source_id=ad9592ac709c14f9acfb",
            "extra": "点击领取",
            "content": "每月的8日、18日均有大额红包，记得领取哟~",
            "footer": "具体红包金额以实际为主"
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