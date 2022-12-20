// index.js
// 获取应用实例
const app = getApp()
Page({
    data: {
        shorturl: ''
    },
    inputCom(event) {
        this.setData({
            shorturl: event.detail.value
        })
        console.log(this.data.shorturl)
    },

    // 事件处理函数
    handleClick() {
        console.log(this.data.shorturl)

        
    }
})