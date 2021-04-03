// pages/stories/stories.js
const app = getApp()

Page({
  data: {
    stories: [],

  },

  onLoad: function (options) {
    

  
  },

  onShow: function () {
    wx.showLoading({
      title: 'Loading..',
    })
    const url = app.globalData.host[app.globalData.env]
    const page = this
    // API requests
    // logging in the user
    console.log('stories page is loading')

    // fetching some data...
    wx.request({
      url: `${url}/stories`,
      success (res) {
        console.log(1111111, res)
        // res -> { data: {}, statusCode: 200 }
        page.setData({
          stories: res.data.stories
        })
        wx.hideLoading({})
      }
    })
  },

  goToShow: function(event) {
    console.log(123, event)
    const id = event.currentTarget.dataset.id
    // const index = event.currentTarget.dataset.index

    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },

  upvote: function() {

  },

  showToast: function() {
    wx.showToast({
      title: 'Clicked!',
      icon: 'none'
    })
    this.upvote()
  },

  onShareAppMessage: function () {

  }
})