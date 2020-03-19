<template>
  <view class="register">
    <form class="form" @submit="submit">
      <view class="input">
      	<input name="phone" :disabled="!showText" type="number" maxlength="11" placeholder="请输入手机号" @blur="checkPhone"/>
      </view>
      <view class="input">
      	<input name="code" maxlength="6" class="input-code" type="number" placeholder="请输入验证码" @blur="getIdenCode"/>
        <text class="iden-code" @tap="getCode" v-if="showText">获取验证码</text>
        <text class="gray-code" v-else>{{second}}s后重新获取</text>
      </view>
      <!-- <view class="input">
      	<input name="password" password placeholder="请输入密码" @blur="checkPsd"/>
      </view> -->
      <!-- <view class="err-tips" v-if="psdErr">应输入由字母、数字、下划线组成，长度为6-16位的密码</view> -->
    	<view class="sure">
    		<button form-type="submit" :loading="isRequest" :class="{btn_active: isSure}">下一步</button>
    	</view>
    </form>
  </view>
</template>

<script>
  import urls from '../../../utils/urls.js'
  export default {
    data () {
      return {
        isSure: false,
        second: 60,
        showText: true,
        phone: '',
        psdErr: false,
        isRequest: false,
				isLogin: this.$store.state.isLogin
      }
    },
    methods: {
      checkPhone: function (e) {
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
            data: {
              username: phone
            }
          })
          setTimeout(() => {
            clearInterval(interval)
            this.showText = true
          }, 60000)
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
        if (!e.detail.value.phone || !e.detail.value.code) {
          uni.showToast({
            title: '信息不能为空',
            icon: 'none'
          })
        } else {
          this.isRequest = true
          uni.request({
            url: urls.HTTP + '/user/checkmobile',
            method: 'POST',
            data: {
              mobile: e.detail.value.phone,
              code: e.detail.value.code,
              id: id
            },
            success: (res) => {
              this.isRequest = false
              console.log(res)
              if (res.data.code === 1) {
                uni.showToast({
                  title: res.data.error,
                  icon: 'none'
                })
              } else {
                uni.showToast({
                  title: res.data.error
                })
                uni.redirectTo({
                  url: 'resetPsdTwo'
                })
              }
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
 .register {
   width: 100%;
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
       :focus {
         caret-color: #bd3037;
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
