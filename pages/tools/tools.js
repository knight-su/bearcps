const app = getApp();
Page({
    "data": {
        "tools": [{
            "id": 1,
            "title": "抖音视频",
            "icon": "https://cps-nj.oss-cn-nanjing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20221212204400.png",
            "type": 1,
            "appId": "wxde8ac0a21135c07d",
            "skip2Url": "/index/pages/h5/h5?f_userId=1&f_token=1&s_cps=1&weburl=https%3A%2F%2Fdpurl.cn%2FU6sdbbKz",
            "extra": "点击去水印",
            "content": "输入抖音短链即可获取无水印视频哟~"
            
        }]
    },
    //跳转其他小程序
    skipOtherMiniProgram: function(e) {
        console.log(e);
        wx.navigateTo({
            url: '../tiktok/tiktok'
        })
    }




})

