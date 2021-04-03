// pages/edit/edit.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

  },

  formSubmit: function(event) {
    console.log('ediit', event)
    const story = event.detail.value
    // { title:..., body:..., author: ...}

    const id = this.options.id
    const url = app.globalData.host[app.globalData.env]
    const page = this

    wx.request({
      url: `${url}/stories/${id}`,
      method: 'PUT',
      data: { story: story },
      success(res) {
        console.log('update res', res)
        if (res.statusCode === 200) {
          wx.navigateBack({
            delta: 1,
          })
        }
      }
    })
    
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(this.options)
    const id = this.options.id
    const url = app.globalData.host[app.globalData.env]
    const page = this

    console.log({url})

    wx.request({
      url: `${url}/stories/${id}`,
      success (res) {
        console.log(res)
        // page.setData({ story: res.data.story })
        page.setData(res.data)
      }
    })
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