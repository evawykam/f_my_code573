// pages/show/show.js
const app = getApp();

Page({

  data: {

  },

  onLoad: function (options) {
    
  },

  edit() {
    const id = this.options.id
    wx.navigateTo({
      url: `/pages/edit/edit?id=${id}`,
    })
  },

  destroy() {
    const id = this.options.id
    const url = app.globalData.host[app.globalData.env]
    const page = this

    wx.showModal({
      title: 'Are you sure?',
      showCancel: true,
      cancelText: 'No',
      confirmText: 'Yes',
      success (res) {
        if (res.confirm) {
          console.log('"OK" is tapped')
          wx.request({
            url: `${url}/stories/${id}`,
            method: 'DELETE',
            success(res) {
              console.log(res)
              if (res.statusCode === 200) {
                wx.navigateBack({
                  delta: 1,
                })
              }
            }
          })
        } else if (res.cancel) {
          console.log('"Cancel" is tapped')
        }
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
    // options = { id: 1 }
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