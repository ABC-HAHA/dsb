<template>
  <view class="register">
    <image class="bg" src="../../static/redbg.png"></image>
    <image class="logo" src="../../static/logo.png"></image>
    <form class="form" @submit="submit">
      <view class="input">
      	<input name="phone" :disabled="!showText" type="number" maxlength="11" placeholder="请输入手机号" @input="getPhone"/>
      </view>
      <view class="input">
      	<input name="code" maxlength="6" class="input-code" type="number" placeholder="请输入验证码" @blur="getIdenCode"/>
        <text class="iden-code" @tap="getCode" v-if="showText">获取验证码</text>
        <text class="gray-code" v-else>{{second}}s后重新获取</text>
      </view>
    	<view class="sure">
    		<button form-type="submit" :loading="isRequest" :class="{btn_active: isSure}">绑定账号</button>
        <view class="err-tips">没有账号将自动注册</view>
    	</view>
      <checkbox-group class="agree-check" @change="checkAgree" name="isAgree">
        <label><checkbox value="true" :checked="isAgree" color="#BD3037"/>已阅读并同意 <navigator class="a" url="userAgreement">《用户协议》</navigator>和 <navigator class="a" url="userSecretProtect">《用户隐私保护政策》</navigator></label>
      </checkbox-group>
    </form>
  </view>
</template>

<script>
  import urls from '../../utils/urls.js'
  export default {
    data () {
      return {
        isAgree: true,
        isSure: false,
        second: 60,
        showText: true,
        phone: '',
        psdErr: false,
        isRequest: false,
		cid:''  //个推id
      }
    },
    onShow() {
			this.cid = plus.push.getClientInfo().clientid,
      uni.showToast({
        title: '你还没有账号哦，赶紧注册一个吧',
        icon: 'none'
      })
			
    },
    methods: {
      checkAgree: function (e) {
        if (e.detail.value.length > 0) {
          this.isAgree = true
        } else {
          this.isAgree = false
        }
      },
      getPhone: function (e) {
        this.phone = e.detail.value
      },
      getIdenCode: function (e) {
        if (e.detail.value.length >= 4) {
          this.showText = true
          this.isSure = true
          this.second = 60
        } else {
          uni.showToast({
            title: '请填写正确的验证码',
            icon: 'none'
          })
        }
      },
      getCode: function () {
        var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
        var phone = this.phone
        if (!reg.test(phone)) {
          uni.showToast({
            title: '请输入正确的手机号',
            icon: 'none'
          })
        } else {
          this.showText = false
          var interval = setInterval(() => {
            --this.second
          }, 1000)
          uni.request({
            url: urls.HTTP + '/user/getmcodenum',
            method: 'POST',
            data: {
              username: phone
            },
			success: (res) => {
				if (res.data.code === 0) {
					uni.showToast({
						title: res.data.error,
						icon: 'none'
					})
				} else {								
					uni.showToast({
						title: res.data.error,
						icon: 'none'
					})
				}
			}
          })
          setTimeout(() => {
            clearInterval(interval)
            this.showText = true
            this.second = 60
          }, 60000)
        }
      },
      submit: function (e) {
        let qqopenid = uni.getStorageSync('qqopenid')
        let unionid = uni.getStorageSync('openid')
        let type = this.$store.state.loginType
        let openid = ''
        if (type === 1) {
          openid = unionid
        } else {
          openid = qqopenid
        }
        if (this.isAgree) {
          if (!e.detail.value.phone || !e.detail.value.code) {
            uni.showToast({
              title: '信息不能为空',
              icon: 'none'
            })
          } else {
            this.isRequest = true
            uni.request({
              url: urls.HTTP + '/user/Binduser',
              method: 'POST',
              data: {
                mobile: e.detail.value.phone,
                code: e.detail.value.code,
                openid: openid,
                type: type,
				cid : this.cid
              },
              success: (res) => {
                // console.log('绑定', res)
                this.isRequest = false
                if (res.data.code === 0) {
                  if (res.data.tip === 1) { // tip值为0表示绑定账号，为1表示添加新用户
                    uni.showModal({
                      title: '提示',
                      content: '自动注册成功，初始密码为123456',
                      showCancel: false,
                      success: () => {
                        uni.setStorageSync('user', res.data.user)
                        uni.setStorage({
                        	key: 'userInfo',
                        	data: JSON.stringify(res.data.user), // 对象转字符串进行本地存储
                        	success: (res) => {
                        		console.log(res)
                        	}
                        })
                        this.$store.dispatch('isLogin', true)
                        if (res.data.user.sex === 0) {
                          uni.redirectTo({
                            url: 'chooseSex'
                          })
                        } else {
                          uni.switchTab({
                            url: '../find/find'
                          })
                        }
                      }
                    })
                  } else {
                    uni.showModal({
                      title: '提示',
                      content: '绑定成功！',
                      showCancel: false,
                      success: () => {
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
                      }
                    })
                  }
                } else {
                  uni.showToast({
                    title: res.data.error,
                    icon: 'none'
                  })
                }
              }
            })
          }
        } else {
          uni.showToast({
            title: '请先阅读协议并同意',
            icon: 'none'
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
 .register {
   width: 100%;
   .bg {
     width: 100%;
     height: 100vh;
     position: absolute;
     top: 0;
     left: 0;
     z-index: -1;
   }
   .logo {
     width: 260upx;
     height: 260upx;
     display: block;
     margin: 20vh auto 80upx;
   }
   .input {
     width: 88%;
     margin: 16upx auto;
     font-size: 24upx;
     position: relative;
     z-index: 7;
     input {
       width: 100%;
       background-color: rgba(237, 237, 240, .5);
       height: 80upx;
       line-height: 80upx;
       padding: 0 16upx;
       border-radius: 18upx;
       box-sizing: border-box;
       position: relative;
       z-index: 10;
       &::focus {
         caret-color: #bd3037;
         border: 1upx solid #bd3037;
         box-shadow: 0 0 2upx #999;
       }
     }
     .input-code {
       width: 74%;
       border-radius: 18upx 0 0 18upx;
       padding-right: 0;
     }
     .iden-code {
       position: absolute;
       width: 26%;
       height: 80upx;
       line-height: 80upx;
       border-radius: 0 18upx 18upx 0;
       text-align: center;
       top: 0;
       right: 0;
       color: #bd3037;
       z-index: 99;
       background-color: rgba(237, 237, 240, .5);
     }
     .gray-code {
       position: absolute;
       width: 26%;
       height: 80upx;
       line-height: 80upx;
       border-radius: 0 18upx 18upx 0;
       text-align: center;
       top: 0;
       right: 0;
       color: #999;
       z-index: 99;
       background-color: rgba(237, 237, 240, .5);
     }
   }
   .err-tips {
     width: 88%;
     margin: 16upx auto;
     font-size: 24upx;
     color: #bd3037;
   }
   .sure {
     width: 88%;
     margin: 40upx auto;
     border: none;
     border-radius: 100upx;
     button {
      height: 88upx;
      border-radius: 100upx;
      background-color: #d2666b;
      line-height: 88upx;
      text-align: center;
      color: #fff;
     }
     .btn_active {
       background-color: #bd3037;
     }
   }
   .line {
     display: block;
     width: 80%;
     height: 22upx;
     margin: 20upx auto;
   }
   .other {
     width: 100%;
     height: 88upx;
     font-size: 64upx;
     text-align: center;
     .icon {
       margin: 0 30upx;
       color: #bd3037;
     }
   }
   .agree-check {
     width: 100%;
     text-align: center;
     font-size: 24upx;
     margin-top: 20upx;
     color: #999;
     .a {
       display: inline-block;
     }
   }
   .more {
     width: 100%;
     text-align: center;
     color: #bd3037;
     font-size: 24upx;
     margin-top: 40upx;
   }
 }
</style>
