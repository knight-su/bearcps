Page({
    data: {
        current: '0',
        list: [{
            "pagePath": "/pages/redPacket/redPacket",
            "text": "红包福利"
        }, {
            "pagePath": "/pages/logs/logs",
            "text": "实用工具"
        }]
    },
    handleChange({
        detail
    }) {
    	// wx.switchTab({
     //        url: this.data.list[detail.key].pagePath
     //    });
        console.log(detail)
        this.setData({
            current: detail.key
        });
        
    }
});