<template>
  <view class="user-info">
  	<view class="item" @tap="changeLogo()">
      <text class="fl">头像</text>
      <text class="fr icon icon-next"></text>
      <view class="fr logo"><image :src="urlHttp + userInfo.headimgurl"></image></view>
    </view>
    <navigator class="item" url="resetName">
      <text class="fl">昵称</text>
      <text class="fr icon icon-next"></text>
      <text class="fr">{{userInfo.username}}</text>
    </navigator>
    <view class="item" @tap="changeSex()">
      <text class="fl">性别</text>
      <text class="fr icon icon-next"></text>
      <text class="fr icon icon-male" v-if="boy"></text>
      <text class="fr icon icon-female" v-else></text>
    </view>
    <!-- <navigator url="resetPsd" class="item">
      <text class="fl">密码</text>
      <text class="fr icon icon-next"></text>
    </navigator> -->
    <view class="item">
      <text class="fl">手机号</text>
      <navigator url="resetPhone" class="fr reset" v-if="userInfo.mobile">修改绑定</navigator>
      <navigator url="resetPhone" class="fr reset" v-if="!userInfo.mobile">去绑定</navigator>
      <text class="fr">{{phone}}</text>
    </view>
    <!-- #ifndef MP-WEIXIN -->
    <view class="item">
      <text class="fl">QQ</text>
      <text class="fr reset" v-if="hasQQ" @tap="removeQQ">解除绑定</text>
      <text class="fr reset" v-if="!hasQQ" @tap="bindQQ">去绑定</text>
      <text class="fr">{{userInfo.qqNumber}}</text>
    </view>
    <view class="item">
      <text class="fl">微信</text>
      <text class="fr reset" v-if="hasWechat" @tap="removeWX">解除绑定</text>
      <text class="fr reset" v-if="!hasWechat" @tap="bindWX">去绑定</text>
      <text class="fr">{{userInfo.wechatNumber}}</text>
    </view>
    <!-- #endif -->
    
    <!-- <view class="item">
      <text class="fl">银行卡</text>
      <text class="fr reset">修改绑定</text>
      <text class="fr">{{userInfo.bankCard}}</text>
    </view> -->
    <reset-info :isShow="showDialog" :title="dialogTitle" :logo="showPhoto" :sex="showSex" @closeDialog="closeDialog" @getSex="getSex"></reset-info>
  </view>
</template>

<script>
  import urls from '../../../utils/urls.js'
  import resetInfo from '../../components/resetInfo.vue'
  export default {
    components: {
      resetInfo
    },
    data () {
      return {
        showDialog: false,
        dialogTitle: '修改头像',
        showPhoto: false,
        showSex: false,
		isLogin: this.$store.state.isLogin
      }
    },
    onLoad() {
	  let id = '';
	  if(this.isLogin){
		 id = JSON.parse(uni.getStorageSync('userInfo')).id
	  }else{
		 id = 0
	  }
      uni.request({
        url: urls.HTTP + '/user/userpersonalinfo',
        method: 'POST',
        data: {
          id: id
        },
        success: (res) => {
          // console.log('个人信息', res)
          this.$store.dispatch('userInfo', res.data.user)
		  uni.setStorage({
		  	key: 'userInfo',
		  	data: JSON.stringify(res.data.user), // 对象转字符串进行本地存储
		  	success: (res) => {
		  		console.log(res)
		  	}
		  })
        }
      })
    },
    computed: {
      boy () {
        if (this.userInfo.sex === 1) {
          return true
        } else {
          return false
        }
      },
      phone () {
        var mobile = String(this.userInfo.mobile)
		if(mobile){
			return mobile.substr(0,3) + '****' + mobile.substr(7)
		}else{
			return '未绑定';
		}
      },
      userInfo () {
        return this.$store.state.userInfo
      },
      hasQQ () {
        if (this.userInfo.qqNumber === '未绑定') {
          return false
        } else {
          return true
        }
      },
      hasWechat () {
        if (this.userInfo.wechatNumber === '未绑定') {
          return false
        } else {
          return true
        }
      },
      urlHttp () {
        return urls.UrlHttp
      }
    },
    methods: {
      changeLogo: function () {
        // 修改头像
        this.dialogTitle = '修改头像'
        this.showDialog = true
        this.showPhoto = true
        this.showSex = false
      },
      changeSex: function () {
        // 修改性别
        this.dialogTitle = '修改性别'
        this.showDialog = true
        this.showSex = true
        this.showPhoto = false
      },
      closeDialog: function (e) {
        // 关闭弹框
        this.showDialog = e
      },
      getSex: function (e) {
        // 获取性别
        this.userInfo.sex = e
      },
      bindQQ: function () {
        // let uid = uni.getStorageSync('user').id
				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
		let id = '';
		if(this.isLogin){
			id = JSON.parse(uni.getStorageSync('userInfo')).id
		}else{
			 id = 0
		}
        uni.login({
          provider: 'qq',
          success:(loginRes) => {
            uni.getUserInfo({
              provider: 'qq',
              success: (infoRes) => {
                uni.setStorageSync('qqopenid', infoRes.userInfo.openId)
                uni.request({
                  url: urls.HTTP + '/Callback/appqqbind',
                  method: 'POST',
                  data: {
                    uid: id,
                    nickname: infoRes.userInfo.nickName,
                    gender: infoRes.userInfo.gender,
                    province: infoRes.userInfo.province,
                    city: infoRes.userInfo.city,
                    year: infoRes.userInfo.year,
                    headimgurl: infoRes.userInfo.headimgurl,
                    openid: infoRes.userInfo.openId
                  },
                  success: (res) => {
                    // console.log('绑定', res)
                    if (res.data.code === 0) {
                      this.$store.dispatch('userInfo', res.data.user)
                      uni.setStorageSync('user', res.data.user)
                      uni.setStorage({
                      	key: 'userInfo',
                      	data: JSON.stringify(res.data.user), // 对象转字符串进行本地存储
                      	success: (res) => {
                      		console.log(res)
                      	}
                      })
                      uni.showToast({
                        title: '绑定成功'
                      })
                    } else if (res.data.code === 1) {
                      uni.showToast({
                        title: res.data.error,
                        icon: 'none'
                      })
                    }
                  }
                })
              }
            })
          }
        })
      },
      bindWX: function () {
        // let uid = uni.getStorageSync('user').id
		let uid = JSON.parse(uni.getStorageSync('userInfo')).id
        uni.showLoading({
          title: '正在登录...',
          mask: true
        })
        uni.login({
          provider: 'weixin',
          success: (res) => {
            uni.getUserInfo({
              provider: 'weixin',
              success: (infoRes) => {
                uni.setStorageSync('openid', infoRes.userInfo.unionId)
                uni.request({
                  url: urls.HTTP + '/Callback/appwxbind',
                  method: 'POST',
                  data: {
                    uid: uid,
                    country: infoRes.userInfo.country,
                    nickname: infoRes.userInfo.nickName,
                    gender: infoRes.userInfo.gender,
                    province: infoRes.userInfo.province,
                    city: infoRes.userInfo.city,
                    headimgurl: infoRes.userInfo.avatarUrl,
                    unionid: infoRes.userInfo.unionId
                  },
                  success: (res) => {
                    // console.log('绑定', res)
                    uni.hideLoading()
                    if (res.data.code === 0) {
                     uni.setStorageSync('user', res.data.user)
                     uni.setStorage({
                     	key: 'userInfo',
                     	data: JSON.stringify(res.data.user), // 对象转字符串进行本地存储
                     	success: (res) => {
                     		console.log(res)
                     	}
                     })
                      uni.showToast({
                        title: '绑定成功'
                      })
					  this.$store.dispatch('userInfo', res.data.user)
                    } else if (res.data.code === 1) {
                      uni.showToast({
                        title: res.data.error,
                        icon: 'none'
                      })
                    }
                  }
                })
              }
            })
          }
        })
      },
      removeQQ: function () {
        // let uid = uni.getStorageSync('user').id
		// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
		let id = '';
		if(this.isLogin){
			id = JSON.parse(uni.getStorageSync('userInfo')).id
		}else{
			 id = 0
		}
        uni.request({
          url: urls.HTTP + '/Callback/appqqUnbind',
          method: 'POST',
          data: {
            uid: id
          },
          success: (res) => {
            // console.log('解除绑定', res)
            if (res.data.code === 0) {
              this.$store.dispatch('userInfo', res.data.user)
              uni.setStorageSync('user', res.data.user)
              uni.setStorage({
              	key: 'userInfo',
              	data: JSON.stringify(res.data.user), // 对象转字符串进行本地存储
              	success: (res) => {
              		console.log(res)
              	}
              })
              uni.showToast({
                title: '解绑成功'
              })
            } else if (res.data.code === 1) {
              uni.showToast({
                title: res.data.error,
                icon: 'none'
              })
            }
          }
        })
      },
      removeWX: function () {
        // let uid = uni.getStorageSync('user').id
				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
		let id = '';
		if(this.isLogin){
			id = JSON.parse(uni.getStorageSync('userInfo')).id
		}else{
			 id = 0
		}
        uni.request({
          url: urls.HTTP + '/Callback/appwxUnbind',
          method: 'POST',
          data: {
            uid: id
          },
          success: (res) => {
            // console.log('解除绑定', res)
            if (res.data.code === 0) {
              this.$store.dispatch('userInfo', res.data.user)
              uni.setStorageSync('user', res.data.user)
              uni.setStorage({
              	key: 'userInfo',
              	data: JSON.stringify(res.data.user), // 对象转字符串进行本地存储
              	success: (res) => {
              		console.log(res)
              	}
              })
              uni.showToast({
                title: '解绑成功'
              })
            } else if (res.data.code === 1) {
              uni.showToast({
                title: res.data.error,
                icon: 'none'
              })
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.user-info {
  .item {
    width: 92%;
    margin: 20upx auto;
    overflow: hidden;
    font-size: 32upx;
    padding: 4upx 10upx;
    height: 72upx;
    line-height: 72upx;
    border-bottom: 1upx solid #aaa;
    .logo {
      display: inline-block;
      image {
        width: 72upx;
        height: 72upx;
        border-radius: 50%;
      }
    }
    .fr {
      color: #999;
    }
    .reset {
      display: inline-block;
      height: 40upx;
      padding: 0 6upx;
      line-height: 40upx;
      margin-left: 20upx;
      margin-top: 6upx;
      border: 1upx solid #BD3037;
      border-radius: 20upx;
      color: #BD3037;
      font-size: 24upx;
    }
  }
}
</style>
