<template>
  <view class="reset-info" v-if="isShow" @tap="closeDialog()">
  	<view class="reset-info-box">
      <view class="box-title">
        <text>{{title}}</text>
      </view>
      <view class="box-item" v-if="logo" @tap="getPhoto()">
        <text class="icon icon-photo">相册</text>
      </view>
      <view class="box-item" v-if="logo" @tap="getCamera()">
        <text class="icon icon-camera">拍照</text>
      </view>
      <view class="box-item" v-if="sex" @tap="chooseSex(1)">
        <text class="icon icon-male"></text>
      </view>
      <view class="box-item" v-if="sex" @tap="chooseSex(2)">
        <text class="icon icon-female"></text>
      </view>
  	</view>
  </view>
</template>

<script>
  import urls from '../../utils/urls.js'
  import {pathToBase64, base64ToPath} from '../../utils/base64.js'
  export default {
    props: ['isShow', 'title', 'logo', 'sex',],
    data () {
      return {
		isLogin: this.$store.state.isLogin
      }
    },
    computed: {
      userInfo () {
        return this.$store.state.userInfo
      }
    },
    methods: {
      getPhoto: function () {
        // let id = JSON.parse(uni.getStorageSync('userInfo')).id
		let id = '';
		if(this.isLogin){
			id = JSON.parse(uni.getStorageSync('userInfo')).id
		}else{
			 id = 0
		}
        uni.chooseImage({
        	count: 1,
          sourceType: ['album'],
          success:(res) => {
            pathToBase64(res.tempFilePaths[0])
            .then(base64 => {
              // console.log(base64)
              uni.request({
                url: urls.HTTP + '/user/uploadheadimg',
                method: 'POST',
                name: 'file',
                data: {
                  uid: id,
                  image: base64
                },
                success: (res) => {
                  console.log('上传头像', res)
                  if (res.data.code === 0) {
                    this.$store.dispatch('userInfo', res.data.user)
                    uni.setStorageSync('user', res.data.user)
                  } else {
                    uni.showToast({
                      title: res.data.error,
                      icon: 'none'
                    })
                  }
                }
              })
            })
          }
        })
      },
      getCamera: function () {
        // let id = JSON.parse(uni.getStorageSync('userInfo')).id
		let id = '';
		if(this.isLogin){
			id = JSON.parse(uni.getStorageSync('userInfo')).id
		}else{
			 id = 0
		}
        uni.chooseImage({
        	sourceType: ['camera'],
          success: (res) => {
            let path = res.tempFilePaths[0]
          	uni.saveImageToPhotosAlbum({
          		filePath: path,
              success: () => {
                pathToBase64(path)
                .then(base64 => {
                  uni.request({
                    url: urls.HTTP + '/user/uploadheadimg',
                    method: 'POST',
                    name: 'file',
                    data: {
                      uid: id,
                      image: base64
                    },
                    success: (res) => {
                      if (res.data.code === 0) {
                        this.$store.dispatch('userInfo', res.data.user)
                        uni.setStorageSync('user', res.data.user)
                      } else {
                        uni.showToast({
                          title: res.data.error,
                          icon: 'none'
                        })
                      }
                    }
                  })
                })
              }
              
          	})
          }
        })
      },
      chooseSex: function (s) {
        // var id = JSON.parse(uni.getStorageSync('userInfo')).id
		let id = '';
		if(this.isLogin){
			id = JSON.parse(uni.getStorageSync('userInfo')).id
		}else{
			 id = 0
		}
        uni.request({
          url: urls.HTTP + '/user/edituser',
          method: 'POST',
          data: {
            id: id,
            sex: s
          },
          success: (res) => {
            // console.log('修改性别', res)
            this.$store.dispatch('userInfo', res.data.user)
          }
        })
        this.$emit('getSex', s)
        this.$emit('closeDialog', false)
      },
      closeDialog: function () {
        this.$emit('closeDialog', false)
      }
      
    }
  }
</script>

<style lang="scss">
.reset-info {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: .3);
  z-index: 199;
  .reset-info-box {
    width: 80%;
    background-color: #fff;
    position: absolute;
    top: 360upx;
    left: 10%;
    z-index: 999;
    font-size: 42upx;
    .box-title {
      height: 110upx;
      line-height: 110upx;
      padding-left: 20upx;
      border-bottom: 1upx solid #ccc;
    }
    .box-item {
      height: 100upx;
      line-height: 100upx;
      padding-left: 20upx;
      border-bottom: 1upx solid #ccc;
      .icon {
        font-size: 40upx;
        color: #666;
        &::before {
          margin-right: 10upx;
        }
      }
    }
  }
}
</style>
