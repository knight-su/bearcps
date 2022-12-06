Page({
    data: {
        current: 'redpacket',
        list: [{
            "pagePath": "pages/redPacket/redPacket",
            "text": "红包福利"
        }, {
            "pagePath": "pages/logs/logs",
            "text": "实用工具"
        }]
    },
    handleChange({
        detail
    }) {
        console.log(detail)
        this.setData({
            current: detail.key
        });
        if (detail.key == 'redpacket') {
            wx.switchTab({
                url: '/pages/redPacket/redPacket'
            })
            return;
        }
        if (detail.key == 'tool') {
            wx.switchTab({
                url: '/pages/logs/logs'
            })
            return;
        }
    }
});