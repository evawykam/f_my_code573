// pages/create/create.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

  },

  formSubmit: function(event) {
    const story = event.detail.value
    
    const url = app.globalData.host[app.globalData.env]
    const page = this

    wx.request({
      url: `${url}/stories`,
      method: 'POST',
      data: { story: story },
      success(res) {
        console.log('update res', res)
        if (res.statusCode === 200) {
          wx.switchTab({
            url: '/pages/stories/stories'
          })
        }
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})