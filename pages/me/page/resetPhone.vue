<template>
  <view class="reset-phone">
    <view class="span-gray" v-if="userInfo.mobile">更换手机号后，下次登录可使用新手机号登录,当前手机号为:{{userInfo.mobile}}</view>
    <form class="form" @submit="submit">
      <view class="input">
      	<input  type="number" maxlength="11" value="" placeholder="请输入手机号" v-model="phone"/>
      </view>
      <view class="input">
      	<input name="code" maxlength="6" class="input-code" type="number" value="" placeholder="请输入验证码" @blur="getIdenCode"/>
        <text class="iden-code" @tap="getCode" v-if="showText">获取验证码</text>
        <text class="gray-code" v-else>{{second}}s后重新获取</text>
      </view>
    	<view class="sure">
    		<button form-type="submit" :disabled="!isSure" :class="{btn_active: isSure}" v-if="userInfo.mobile">修 改</button>
			<button form-type="submit" :disabled="!isSure" :class="{btn_active: isSure}" v-if="!userInfo.mobile">绑 定</button>
    	</view>
    </form>
  </view>
</template>

<script>
  import urls from '../../../utils/urls.js'
  export default {
    data () {
      return {
        isCommit: false,
        isSure: false,
        second: 60,
        showText: true,
        phone: '',
        code: '',
				isLogin: this.$store.state.isLogin
      }
    },
    computed: {
      userInfo () {
        return this.$store.state.userInfo
      }
    },
    methods: {
      // getPhone: function (e) {
      //   this.phone = e.detail.value
      // },
      getIdenCode: function (e) {
        if (e.detail.value.length >= 4) {
          this.isSure = true
          this.showText = true
        } else {
          uni.showToast({
            title: '请填写正确的验证码',
            icon: 'none'
          })
        }
      },
      getCode: function () {
        // var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
		var reg = /^1[345678]\d{9}$/
        var phone = this.phone
        if (!reg.test(phone)) {
          uni.showToast({
            title: '请输入正确的手机号',
            icon: 'none'
          })
        } else {          
          uni.request({
            url: urls.HTTP + '/user/getmobilecode',
						method: 'POST',
            data: {
              mobile: phone
            },
			success:(res) =>{
				if (res.data.code == 1) {
				  uni.showToast({
					title:res.data.error,
						icon:'none'
				  })
				}else{
					this.showText = false
					var interval = setInterval(() => {
					  --this.second
					}, 1000)
					setTimeout(() => {
					  clearInterval(interval)
					  this.showText = true
					}, 60000)
				}
			}
          })		  
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
        uni.request({
          url: urls.HTTP + '/user/editmobile',
          method: 'POST',
          data: {
            id: id,
            mobile:this.phone,
            code: e.detail.value.code
          },
          success: (res) => {
            console.log('修改手机号', res)
            if (res.data.code === 0) {
              uni.showModal({
                title: '提示',
                content: '修改成功！',
                showCancel: false,
                success: (res) => {
                  uni.redirectTo({
                    url: 'userInfo'
                  })
                }
              })
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .reset-phone {
    input {
      width: 90%;
      margin: 20upx auto 10upx;
      line-height: 60upx;
      border: none;
      border-bottom: 1upx solid #BD3037;
      caret-color: #BD3037;
      padding: 10upx 16upx;
      font-size: 32upx;
      color: #515151;
    }
    .span-gray {
      width: 88%;
      margin: 20upx auto;
    }
    .input {
      width: 88%;
      margin: 16upx auto;
      font-size: 24upx;
      position: relative;
      z-index: 7;
      input {
        width: 100%;
        height: 80upx;
        line-height: 80upx;
        padding: 0 16upx;
        box-sizing: border-box;
        position: relative;
        z-index: 10;
        &:focus {
          caret-color: #bd3037;
        }
      }
      .input-code {
        width: 100%;
        padding-right: 0;
        margin: 0;
      }
      .iden-code {
        position: absolute;
        width: 26%;
        height: 80upx;
        line-height: 80upx;
        text-align: center;
        top: 0;
        right: 0;
        color: #bd3037;
        z-index: 99;
      }
      .gray-code {
        position: absolute;
        width: 26%;
        height: 80upx;
        line-height: 80upx;
        text-align: center;
        top: 0;
        right: 0;
        color: #999;
        z-index: 99;
      }
    }
    .sure {
      width: 240upx;
      margin: 40upx auto;
      border: none;
      border-radius: 100upx;
      button {
       height: 68upx;
       border-radius: 100upx;
       background-color: #d2666b;
       line-height: 68upx;
       text-align: center;
       color: #fff;
       font-size: 32upx;
      }
      .btn_active {
        background-color: #bd3037;
      }
    }
  }
</style>
