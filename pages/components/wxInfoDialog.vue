<template>
  <view class="wx-info-dialog" v-show="isShow">
    <view class="dialog-content">
      <view class="title">提示</view>
      <view class="intro">
        小程序登录需要获取您的用户信息，请确认是否获取您的权限
      </view>
      <view class="dialog-footer">
        <button class="btn cancle" @tap="cancle">取消</button>
        <button class="btn sure" open-type="getUserInfo" @tap="getUserInfo">确认</button>
      </view>
    </view>
  </view>
</template>

<script>
  import urls from '../../utils/urls.js'
  export default {
    props: ['isShow'],
    data() {
      return {
      }
    },
    methods: {
      cancle () {
        this.$emit('goClose', false)
      },
      getUserInfo: function () {
        uni.login({
          provider: 'weixin',
          success: (res) => {
            console.log(res.code)
            var code = res.code
            uni.getUserInfo({
              provider: 'weixin',
              success: (userRes) => {
                // console.log(userRes)
                userRes.userInfo.code = code
                uni.request({
                  url: urls.HTTP + '/user/checkapplet',
                  method: 'POST',
                  data: JSON.stringify(userRes.userInfo),
                  success: (res) => {
                    console.log(res)
                    if (res.data.code === 1) {
                      uni.setStorageSync('openid', res.data.openid)
                      uni.redirectTo({
                        url: 'register'
                      })
                    } else if (res.data.code === 0) {
											uni.setStorageSync('openid', res.data.user.openid)
											uni.setStorageSync('user', res.data.user)
											uni.setStorage({
												key: 'userInfo',
												data: JSON.stringify(res.data.user), // 对象转字符串进行本地存储
												success: (res) => {
													console.log(res)
												}
											})
											this.$store.dispatch('isLogin', true)											
											uni.switchTab({
												url: '../find/find'
											})											
                    } else {
                      uni.showToast({
                        title: '登录失败，请检查您的网络',
                        icon: 'none'
                      })
                    }
                  }
                })
              }
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .wx-info-dialog {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
    background: rgba($color: #000000, $alpha: .3);
    .dialog-content {
      width: 80%;
      position: absolute;
      top: 30vh;
      left: 10%;
      z-index: 99;
      border-radius: 20upx;
      background-color: #fff;
      .title {
        width: 100%;
        line-height: 90upx;
        text-align: center;
        font-size: 36upx;
        font-weight: 600;
        border-bottom: 1upx solid #eee;
      }
      .intro {
        font-size: 28upx;
        color: #515151;
        line-height: 60upx;
        padding: 20upx 30upx;
      }
      .dialog-footer {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        .btn {
          width: 50%;
          height: 88upx;
          line-height: 88upx;
          text-align: center;
          border: none;
        }
        .cancle {
          color: #999;
          background-color: #f9f9f9;
          border-radius: 0 0 0 20upx;
          border-top: 1upx solid #eee;
          &::after {
            border: none;
          }
        }
        .sure {
          color: #fff;
          background-color: #09bb07;
          border-radius: 0 0 20upx 0;
          &::after {
            border: none;
          }
        }
      }
    }
  }
</style>
