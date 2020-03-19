<template>
  <view class="share">
		<view class="hh-top">
		 <!-- <navigator open-type="navigateBack">
		    <text class="fl icon icon-back"></text>
		  </navigator> -->
		  
		  <!-- #ifdef MP-WEIXIN -->
		 <!-- <navigator url="allComments">
		    <text class="fl icon icon-message"></text>
		  </navigator>
		  <button class="fl btn-share" open-type="share">
		    <text class="icon icon-share"></text>
		  </button> -->
		  <!-- #endif -->
		  <!-- #ifndef MP-WEIXIN -->
		  <!-- <text class="fr icon icon-share"></text>
		  <navigator url="allComments">
		    <text class="fr icon icon-message"></text>
		  </navigator> -->
		  <!-- #endif -->
		</view>
    <image class="share-bg" src="../../../static/share_bg2.png" mode=""></image>
    <image class="logo" :src="urlHttp + userInfo.headimgurl" mode=""></image>
		<text class="name">{{userInfo.username}}</text>
		<text class="name1">阅读小说就可以挣钱，大家快来！</text>
    <image class="QR-code" :src="urlHttp + qrcode" mode=""></image>
    <view class="welfare">
      <!-- <text class="gold">奖励金：<text class="coin">{{coin}}</text> 个</text> -->
			<text class="gold">分享成功可得奖励金</text>
      <!-- <button class="withdraw" @tap="capture">提现</button> -->
			<!-- #ifdef MP-WEIXIN -->
			<button class="withdraw" open-type="share">立即分享</button>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<button class=" withdraw" @tap="share">立即分享</button>
			<!-- #endif -->
    </view>
    
    <share-pop :showMe="showShare" @closeSharePop="closepop"></share-pop>
  </view>
</template>

<script>
  import urls from '../../../utils/urls.js'
  import sharePop from '../../components/sharePop.vue'
  export default {
    components: {
      sharePop
    },
    data () {
      return {
        showShare: false,
        qrcode: '',
        coin: 0,
		isLogin: this.$store.state.isLogin
      }
    },
    onLoad() {
      // let uid = uni.getStorageSync('user').id
			// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
			let id = '';
			if(this.isLogin){
				id = JSON.parse(uni.getStorageSync('userInfo')).id
			}else{
				 id = 0
			}
      uni.request({
        url: urls.HTTP + '/Generalize/getGeneralize',
        method: 'POST',
        data: {
          uid: id
        },
        success: (res) => {
          // console.log(res)
          this.qrcode = res.data.qrcode
          this.coin = res.data.bonus
        }
      })
    },
    onShareAppMessage(res) {
      return {
        title: '点书吧',
        path: '/pages/common/login'
      }
    },
    methods: {
      share: function () {
        this.showShare = true
        var pages = getCurrentPages()
        var page = pages[pages.length - 1]
        var bitmap = null
        var currentWebview = page.$getAppWebview()
        bitmap = new plus.nativeObj.Bitmap('amway_img')
        // 将web内容绘制到Bitmap对象中
        currentWebview.draw(bitmap, function () {
          bitmap.save("_doc/a.jpg", {}, function (i) {
            uni.saveImageToPhotosAlbum({
              filePath: i.target,
              success:function(){
                bitmap.clear()
                uni.showToast({
                  title: '保存图片成功',
                  mask: false,
                  duration: 1500
                })
              }
            })
          }
          ,function (e) {
            // console.log('保存失败', + JSON.stringify(e))
          })
        },
        function (e) {
          // console.log('截屏失败', JSON.stringify(e))
        })
      },
      closepop: function (val) {
        this.showShare = false
      },
      capture () {
        var pages = getCurrentPages()
        var page = pages[pages.length - 1]
        var bitmap = null
        var currentWebview = page.$getAppWebview()
        bitmap = new plus.nativeObj.Bitmap('amway_img')
        // 将web内容绘制到Bitmap对象中
        currentWebview.draw(bitmap, function () {
          bitmap.save("_doc/a.jpg", {}, function (i) {
            console.log('保存成功：' + JSON.stringify(i))
            uni.saveImageToPhotosAlbum({
              filePath: i.target,
              success:function(){
                console.log(i.target)
                bitmap.clear()
                uni.showToast({
                  title: '保存图片成功',
                  mask: false,
                  duration: 1500
                })
              }
            })
          }
          ,function (e) {
            console.log('保存失败', + JSON.stringify(e))
          })
        },
        function (e) {
          console.log('截屏失败', JSON.stringify(e))
        })
        
      }
    },
    computed: {
      userInfo () {
        return this.$store.state.userInfo
      },
      urlHttp () {
        return urls.UrlHttp
      }
    }
  }
</script>

<style lang="scss" scoped>
	page{
		background: -webkit-linear-gradient(top,#E75045 0%,#E75045 50%);
		width:100%;
		height:100vh;
	}
  .share {
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 2;
		background:#E75045;
    .share-bg {
      width:80%;
      min-height:400px;
      position: absolute;
      top: 0;
      left: 0;
			bottom: 0;
			right: 0;
			margin: auto;
      z-index: 1;
    }
    .logo {
      position: absolute;
      top:7vh;
      left: 10%;
      width: 130upx;
      height: 130upx;
      border-radius: 50%;
      z-index: 2;
    }
		.name{
			position: absolute;
			top:8vh;
			left:30%;
			z-index: 2;
			color:#fff;
			font-size:20px;
		}
		.name1{
			position: absolute;
			top:13vh;
			left:30%;
			z-index: 2;
			color:#fff;
			font-size:14px;
			background:#fff;
			border-radius:25px;
			color:#E12A1A;
			padding-left:5px;
		}
    .QR-code {
      position: absolute;
      top: 38vh;
      left: 32%;
      z-index: 2;
      width: 280upx;
      height: 280upx;
    }
    .welfare {
      position: absolute;
      bottom: 23vh;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 88upx;
      line-height: 88upx;
      text-align: center;
      overflow: hidden;
      .gold {
        display: inline-block;
        margin-left:15%;
        margin-right: 40upx;
        float: left;
        font-size: 34upx;
        line-height: 88upx;
        .coin {
          font-size: 36upx;
          color: red;
          font-weight: 600;
        }
      }
      .withdraw {
        float: left;
        display: inline-block;
        width: 160upx;
        height: 72upx;
        padding: 0;
        margin-top: 8upx;
        text-align: center;
        line-height: 66upx;
        color: #fff;
        background-color: #e75045;
        box-shadow: 6upx 6upx 8upx #eb645a;
      }
    }
    .share-btn {
      position: absolute;
      bottom: 10vh;
      left: 50%;
      z-index: 2;
      margin-left: -100upx;
      width: 200upx;
      height: 88upx;
      line-height: 88upx;
      padding: 0;
      font-size: 32upx;
      text-align: center;
      background-color: #e75045;
      color: #fff;
      box-shadow: 0 0 30upx #fff;
      animation: animBtn 1.5s infinite;
    }
  }
  @keyframes animBtn {
    0% {
      width: 200upx;
      height: 88upx;
      font-size: 32upx;
    }
    50% {
      transform: scale(1.1, 1.1);
      font-size: 32upx;
    }
    100% {
      width: 200upx;
      height: 88upx;
      font-size: 32upx;
    }
  }
</style>
