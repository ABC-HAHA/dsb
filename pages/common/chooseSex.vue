<template>
  <view class="choose-sex">
    <view class="h-22"></view>
    <image class="bg" src="../../static/redbg.png"></image>
  	<view class="info">
      <view class="text1">请选择您的性别</view>
      <text class="text2">根据您的性别为您推荐最合适的书籍</text>
    </view>
    <view class="sex">
    	<view @tap="chooseSex('boy')" class="item">
    		<image src="../../static/male-logo.png"></image>
        <view class="btn">男生</view>
    	</view>
      <view @tap="chooseSex('girl')" class="item">
      	<image src="../../static/female-logo.png"></image>
        <view class="btn">女生</view>
      </view>
    </view>
  </view>
</template>

<script>
  import urls from '../../utils/urls.js'
  export default {
    data () {
      return {
        isLogin: this.$store.state.isLogin
      }
    },
    methods: {
      chooseSex: function (sex) {
        // let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				let id = '';
				if(this.isLogin){
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id = 0
				}
        if (sex === 'boy') {
          uni.request({
            url: urls.HTTP + '/user/editsex',
            method: 'POST',
            data: {
              uid: id,
              sex: 1
            },
            success: (res) => {
              console.log('选择性别', res)
              if (res.data.code === 0) {
                uni.setStorageSync('user', res.data.user)
                uni.redirectTo({
                  url: 'boyChoose'
                })
              }
            }
          })
        } else {
          uni.request({
            url: urls.HTTP + '/user/editsex',
            method: 'POST',
            data: {
              uid: uid,
              sex: 2
            },
            success: (res) => {
              uni.showToast({
                title: res.data.error
              })
              if (res.data.code === 0) {
                uni.setStorageSync('user', res.data.user)
                uni.redirectTo({
                  url: 'girlChoose'
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
  .choose-sex {
    width: 100%;
    .bg {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .info {
      margin-top: 160upx;
      margin-left: 3%;
      .text1 {
        font-size: 32upx;
      }
      .text2 {
        font-size: 28upx;
        color: #515151;
      }
    }
    .sex {
      width: 100%;
      margin-top: 80upx;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      .item {
        width: 40%;
        text-align: center;
        image {
          width: 180upx;
          height: 240upx;
        }
        .btn {
          width: 200upx;
          height: 60upx;
          margin-top: 20upx;
          border-radius: 30upx;
          background-color: #BD3037;
          color: #fff;
          font-size: 32upx;
          line-height: 60upx;
          display: inline-block;
        }
      }
    }
  }
</style>
