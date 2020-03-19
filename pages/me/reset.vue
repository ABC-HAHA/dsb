<template>
  <view class="reset">
    <view class="content">
      <!-- #ifndef MP-WEIXIN -->
      <view class="item" @tap="changeUser" v-if="isLogin">
        <text class="fl">切换账号</text>
        <text class="icon icon-next fr"></text>
        <image class="fr" :src="urlHttp + userInfo.headimgurl" mode=""></image>
      </view>
      <!-- #endif -->
      <view class="item" v-if="isLogin">
        <text class="fl">是否接受推送</text>
        <switch class="fr switch" v-if="isacceptnews == 0" checked @change="switchChange" color="#BD3037"/>
		    <switch class="fr switch" v-if="isacceptnews == 1"  @change="switchChange" color="#BD3037"/>
      </view>
      <navigator url="../common/userAgreement" class="item">
        <text class="fl">用户协议</text>
        <text class="icon icon-next fr"></text>
      </navigator>
      <navigator url="../common/userSecretProtect" class="item">
        <text class="fl">隐私保护政策</text>
        <text class="icon icon-next fr"></text>
      </navigator>
      <navigator url="page/shareDetail" class="item" v-if="isLogin">
        <text class="fl">推荐详情</text>
        <text class="icon icon-next fr"></text>
      </navigator>
      <!-- <view class="item" v-if="isLogin">
        <text class="fl">好评支持</text>
        <text class="icon icon-next fr"></text>
      </view> -->
      <!-- <view class="item">
        <text class="fl">版本</text>
        <text class="fr">1.0.0</text>
      </view> -->
	   <navigator url="gengxin" class="item" >
	    <text class="fl">版本更新</text>
	    <text class="icon icon-next fr"></text>
	  </navigator>
    </view>
  </view>
</template>
 
<script>
  import urls from '../../utils/urls.js'
  export default {
    data () {
      return {
        version: '0.0.0',
				isacceptnews: "",
				isLogin:this.$store.state.isLogin,
      }
    },
    onLoad() { 
			  var uid = this.$store.state.userInfo.id;
		     if(uid){
						uni.request({
					  url: urls.HTTP + '/index/getacceptnews',
					  method: 'POST',
					  data: {
					    uid: uid,
					  },
					  success: (res) => {
					   this.isacceptnews = res.data.user.isacceptnews
					   
					  }
					}) 
				 }
			 // this.version = plus.runtime.version
      
		
    },
    methods: {
      changeUser: function () {
        uni.showModal({
          title: '提示',
          content: '确定要退出登录吗？',
          success(res) {
            if (res.confirm) {
              uni.removeStorageSync('user')
							uni.reLaunch({
								url:'../common/login'
							})
							uni.removeStorageSync('userInfo')
							this.$store.dispatch('isLogin', false)
            }
          }
        })
      },
      switchChange: function (e) {
				let _this = this
        if (e.detail.value) {
          var isacceptnews = 0
        } else {
          isacceptnews = 1
        }
        // let uid = uni.getStorageSync('user').id
				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				let id = '';
				if(_this.isLogin){
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id = 0
				}
        console.log(isacceptnews)
        uni.request({
          url: urls.HTTP + '/user/edituser',
          method: 'POST',
          data: {
            id: id,
            isacceptnews: isacceptnews
          },
          success: (res) => {
            // console.log(res)
            uni.setStorageSync('user', res.data.user)
            this.$store.dispatch('userInfo', res.data.user)
          }
        })
      }
    },
    computed: {
      // userInfo () {
      //   return JSON.parse(uni.getStorageSync('userInfo')).id
      // },
      urlHttp () {
        return urls.UrlHttp
      }
    }
  }
</script>

<style lang="scss" scoped>
.reset {
  .content {
    .item {
      width: 100%;
      line-height: 64upx;
      padding: 16upx 30upx;
      box-sizing: border-box;
      overflow: hidden;
      font-size: 32upx;
      color: #515151;
      border-bottom: 1upx solid #ccc;
      image {
        width: 64upx;
        height: 64upx;
        border-radius: 50%;
        margin-right: 20upx;
      }
      .switch {
        transform: scale(.8, .7);
      }
    }
  }
}
</style>
