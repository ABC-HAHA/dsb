<template>
  <view class="welcome">
    <!-- #ifdef MP-WEIXIN -->
      <text class="btn btn-left to-top" @tap="goNext">{{time}}s跳过</text>
    <!-- #endif -->
    <!-- #ifndef MP-WEIXIN -->
      <text class="btn btn-right to-top" @tap="goNext">{{time}}s跳过</text>
    <!-- #endif -->
    <image :src="urlHttp + adv_img" @tap="goAdv"></image>
    <web-view v-if="advShow" :src="link"></web-view>
    <view class="footer">
      <image class="logo" src="../../static/logo.png"></image>
      <text>点书阅读</text>
    </view>
    <wx-info-dialog :isShow="showDialog" @goClose="closeDialog"></wx-info-dialog>
  </view>
</template>

<script>
  import urls from '../../utils/urls.js'
  import wxInfoDialog from '../components/wxInfoDialog.vue'
  export default {
    components: {
      wxInfoDialog
    },
    data () {
      return {
        adv_img: '',
        link: '',
        urlHttp: '',
        advShow: false,
        time: 5,
        timeOut: {},
        interval: {},
        provider: '',
        showDialog: false
      }
    },
    onShow() {
			this.time=5
      this.urlHttp = urls.UrlHttp
      uni.request({
        url: urls.HTTP + '/index/advertisement',
        method: 'POST',
        success: (res) => {
          // console.log('广告', res)
          this.adv_img = res.data.advertisement.picpath
          this.link = res.data.advertisement.link
        }
      })
      this.interval = setInterval(() => {
        --this.time
      }, 1000)
      this.timeOut = setTimeout(() => {
        clearInterval(this.interval)
        switch(uni.getSystemInfoSync().platform) {
          case 'android':
					// #ifndef MP-WEIXIN
						uni.switchTab({
							url: '../find/find'
						})
          //#endif
          //#ifdef MP-WEIXIN
						if (!uni.getStorageSync('openid')) {
							if (!uni.getStorageSync('user')){
								this.showDialog = true
							}else{
								uni.switchTab({
									url: '../find/find'
								})
							}
						} else if (!uni.getStorageSync('user').id) {
							uni.redirectTo({
								url: 'register'
							})
						} else {
							uni.switchTab({
								url: '../find/find'
							})
						}
          //#endif
          break;
          case 'ios':
          //#ifndef MP-WEIXIN
						uni.switchTab({
							url: '../find/find'
						})
          //#endif
          //#ifdef MP-WEIXIN
						if (!uni.getStorageSync('openid')) {
							if (!uni.getStorageSync('user')){
								this.showDialog = true
							}else{
								uni.switchTab({
									url: '../find/find'
								})
							}
						} else if (!uni.getStorageSync('user').id) {
							uni.redirectTo({
								url: 'register'
							})
						} else {
							uni.switchTab({
								url: '../find/find'
							})
						}
          //#endif
          break;
          default:
					 if (!uni.getStorageSync('openid')) {
					   if (!uni.getStorageSync('user')){
					   	this.showDialog = true
					   }else{
					   	uni.switchTab({
					   	  url: '../find/find'
					   	})
					   }
					 } else if (!uni.getStorageSync('user').id) {
					   uni.redirectTo({
					     url: 'register'
					   })
					 } else {
					   uni.switchTab({
					     url: '../find/find'
					   })
					 }
          break;
        }
      }, 5000)
    },
    onUnload () {
      clearInterval(this.interval)
      clearTimeout(this.timeOut)
    },
    methods: {
      closeDialog: function (val) {
        this.showDialog = val
      },
      goNext: function () {
        switch(uni.getSystemInfoSync().platform) {
          case 'android':
          // #ifndef MP-WEIXIN
							uni.switchTab({
								url: '../find/find'
							})									
						//#endif
          //#ifdef MP-WEIXIN
          	if (!uni.getStorageSync('openid')) {
							if (!uni.getStorageSync('user')){
								this.showDialog = true
							}else{
								uni.switchTab({
									url: '../find/find'
								})
							}
						} else if (!uni.getStorageSync('user').id) {
							uni.redirectTo({
								url: 'register'
							})
						} else {
							uni.switchTab({
								url: '../find/find'
							})
						}
          //#endif
          break;
          case 'ios':
          // #ifndef MP-WEIXIN
						uni.switchTab({
							url: '../find/find'
						})
          //#endif
          //#ifdef MP-WEIXIN
						if (!uni.getStorageSync('openid')) {
							if (!uni.getStorageSync('user')){
								this.showDialog = true
							}else{
								uni.switchTab({
									url: '../find/find'
								})
							}
						} else if (!uni.getStorageSync('user').id) {
							uni.redirectTo({
								url: 'register'
							})
						} else {
							uni.switchTab({
								url: '../find/find'
							})
						}
          //#endif
          break;
          default:
          if (!uni.getStorageSync('openid')) {
						if (!uni.getStorageSync('user')){
							this.showDialog = true
						}else{
							uni.switchTab({
							  url: '../find/find'
							})
						}
          } else if (!uni.getStorageSync('user').id) {
            uni.redirectTo({
              url: 'register'
            })
          } else {
            uni.switchTab({
              url: '../find/find'
            })
          }
          break;
        }
      },
      goAdv: function () {
        this.advShow = false
        clearInterval(this.interval)
        clearTimeout(this.timeOut)
				plus.runtime.openURL(this.link);  	
      }
    }
  }
</script>

<style lang="scss" scoped>
  .welcome {
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100vh;
    overflow: hidden;
    image {
      width: 100%;
      height: 88vh;
      position: relative;
      z-index: 2;
    }
    .btn {
      padding: 4upx 14upx;
      height: 48upx;
      border-radius: 10upx;
      background-color: rgba($color: #000000, $alpha: .3);
      font-size: 24upx;
      color: #fff;
      text-align: center;
      line-height: 48upx;
      position: absolute;
      z-index: 10;
    }
    .btn-left {
      left: 50upx;
    }
    .btn-right {
      right: 50upx;
    }
    .footer {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 20;
      width: 100%;
      height: 12vh;
      background-color: #fff;
      line-height: 12vh;
      font-size: 38upx;
      image {
        width: 100upx;
        height: 98upx;
        float: left;
        margin-top: 32upx;
        margin-left: 72upx;
        margin-right: 20upx;
      }
    }
  }
</style>
