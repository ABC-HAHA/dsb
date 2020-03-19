<template>
  <view class="reset-psd">
    <view class="intro">请设置您的密码。你可以使用手机号+密码登录，更快捷。</view>
    <form @submit="submit" class="form">
      <view class="item">
        <text class="text">新密码</text>
        <input type="password" name="newPsd" v-model="newPsd" placeholder="填写新密码" @blur="checkNewPsd"/>
      </view>
      <view class="item">
        <text class="text">确认新密码</text>
        <input type="password" name="surePsd" v-model="surePsd" placeholder="确认新密码" @blur="checkSurePsd"/>
      </view>
      <view class="err-tips">应输入由字母、数字、下划线组成，长度为6-16位的密码</view>
      <view class="sure">
        <button form-type="submit">完成</button>
      </view>
    </form>
  </view>
</template>

<script>
  import urls from '../../../utils/urls.js'
  export default {
    data() {
      return {
        newPsd: '',
        surePsd: '',
				isLogin: this.$store.state.isLogin
      }
    },
    methods: {
      checkNewPsd: function (e) {
        var reg = /^(\w){6,16}$/
        if (reg.test(e.detail.value)) {
          this.newPsd = e.detail.value
        } else {
          uni.showToast({
            title: '请输入正确格式的密码',
            icon: 'none'
          })
          this.newPsd = ''
        }
      },
      checkSurePsd: function (e) {
        if (this.newPsd === e.detail.value) {
          this.surePsd = e.detail.value
        } else {
          uni.showToast({
            title: '两次输入密码不一致，请重新输入',
            icon: 'none'
          })
          this.surePsd = e.detail.value
        }
      },
      submit: function (e) {
        // var id = uni.getStorageSync('user').id
				// let id = JSON.parse(uni.getStorageSync('userInfo')).id
				let id = '';
				if(this.isLogin){
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id = 0
				}
        if (!e.detail.value.newPsd || !e.detail.value.surePsd) {
          uni.showToast({
            title: '请确认信息全都不为空',
            icon: 'none'
          })
        } else {
          uni.request({
            url: urls.HTTP + '/user/forgetpwd',
            method: 'POST',
            data: {
              id: id,
              newpassword: e.detail.value.newPsd
            },
            success: (res) => {
              console.log('重置密码', res)
              if (res.data.code === 0) {
                uni.showModal({
                  title: '提示',
                  content: '密码修改成功！',
                  showCancel: false,
                  success() {
                    uni.redirectTo({
                      url: 'userInfo'
                    })
                  }
                })
              } else {
                uni.showToast({
                  title: '修改失败，' + res.data.error,
                  icon: 'none'
                })
              }
            }
          })
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .reset-psd {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .intro{
      width: 92%;
      margin: 20upx auto;
      font-size: 28upx;
      color: #999;
    }
    .form {
      width: 100%;
      .item {
        width: 92%;
        margin: 10upx auto;
        line-height: 88upx;
        font-size: 30upx;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        .text {
          display: inline-block;
          width: 26%;
        }
        input {
          width: 72%;
          height: 88upx;
          box-sizing: border-box;
          line-height: 88upx;
          padding: 0 10upx;
          border: none;
          caret-color: #BD3037;
          border-bottom: 1upx solid #BD3037;
        }
      }
      .err-tips {
        width: 88%;
        margin: 16upx auto;
        font-size: 24upx;
        color: #bd3037;
      }
      .sure {
        width: 100%;
        margin-top: 40upx;
        button {
          width: 30%;
          height: 80upx;
          line-height: 80upx;
          margin: 0 auto;
          border: none;
          border-radius: 60upx;
          background-color: #BD3037;
          color: #fff;
        }
      }
      .forget {
        width: 100%;
        line-height: 88upx;
        text-align: center;
        text-decoration: underline;
        color: dodgerblue;
        font-size: 28upx;
        &:hover {
          color: #BD3037;
        }
      }
    }
  }
</style>
