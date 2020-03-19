<template>
  <view class="feedback">
    <form @submit="sure">
      <view class="top">
        <text>问题描述或建议</text>
        <view class="input">
          <textarea
          :class="{error: errTextarea}"
          v-model="intro"
          :placeholder="placeholder"
          placeholder-style="color: #aaa"
          @blur="introCheck"/>
        </view>
      </view>
      <view class="img-box">
        <text>上传图片</text>
        <view class="img">
          <view
          v-if="imgArr"
          class="img-item"
          v-for="(item, index) in imgurl"
          :key="index">
            <image :src="item"></image>
            <view class="mask" v-if="per !== 100">
              <progress class="progress" :percent="per" stroke-width="4"></progress>
            </view>
          </view>
          <image src="../../static/add.png" @tap="addImg"></image>
        </view>
      </view>
      <view class="phone">
        <text>联系方式：</text>
        <input type="text" v-model="phone" :class="{error: errInput}" @blur="phoneCheck"/>
      </view>
      <view class="tips">
        <text>请填写正确的联系方式，方便我们随时向您反馈结果</text>
      </view>
      <view class="btn">
        <button form-type="submit" :loading="isSure" :class="{gray: isSure}" :disabled="isSure">提交</button>
      </view>
    </form>
  </view>
</template>

<script>
  import {pathToBase64} from '../../utils/base64.js'
  import urls from '../../utils/urls.js'
  export default {
    data () {
      return { // 定义变量
        placeholder: '请您详细描述问题发生的场景和现象,并添加截图,这样有助于我们快速解决您的问题',
        imgArr: [],
        per: 1,
        intro: '',
        phone: '',
        errInput: false,
        errTextarea: false,
        isSure: false,
				isLogin: this.$store.state.isLogin
      }
    },
    methods: {
      introCheck: function () {
        if (!this.intro) {
          this.errTextarea = true
        } else {
          this.errTextarea = false
        }
      },
      phoneCheck: function () {
        if (!this.phone) {
          this.errInput = true
        } else {
          this.errInput = false
        }
      },
      addImg: function () {
        // var id = uni.getStorageSync('user').id
				// let id = JSON.parse(uni.getStorageSync('userInfo')).id
				let id = '';
				if(this.isLogin){
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id = 0
				}
        uni.chooseImage({
        	count: 3,
          sourceType: ['album'],
          success:(res) => {
            // console.log(res.tempFilePaths)
            this.imgArr = res.tempFilePaths
            let arr = []
            for (let i = 0; i < res.tempFilePaths.length; i++) {
              pathToBase64(res.tempFilePaths[i])
              .then(base64 => {
                arr[i] = base64
              })
            }
            setTimeout(() => {
              uni.request({
                url: urls.HTTP + '/user/upload_multi',
                method: 'POST',
                data: {
                  images: arr
                },
                success: (res) => {
                  // console.log('上传图片', res)
                  this.per = 100
                  this.imgArr = res.data.path
                }
              })
            }, 500)
            let interval = setInterval(() => {
              if (this.per < 61) {
                this.per = this.per + 30
              } else if (this.per >= 61 && this.per < 100) {
                this.per = 94
                clearInterval(interval)
              }
            }, 500)
          }
        })
      },
      sure: function (e) {
        if (!this.intro) {
          this.errTextarea = true
        } else if (!this.phone) {
          this.errInput = true
        } else {
          this.errInput = false
          this.isSure = true
          // let id = uni.getStorageSync('user').id
					// let id = JSON.parse(uni.getStorageSync('userInfo')).id
					let id = '';
					if(this.isLogin){
						id = JSON.parse(uni.getStorageSync('userInfo')).id
					}else{
						 id = 0
					}
          uni.request({
            url: urls.HTTP + '/user/userfeedback',
            method: 'POST',
            data: {
              picpath: this.imgArr,
              uid: id,
              content: this.intro,
              contact: this.phone
            },
            success: (res) => {
              this.isSure = false
              if (res.data.code === 0) {
                uni.showToast({
                  title: '提交成功'
                })
                this.intro = ''
                this.imgArr = []
                this.phone = ''
              } else {
                uni.showToast({
                  title: res.data.error,
                  icon: 'none'
                })
              }
            }
          })
        }
      }
    },
    computed: {
      imgurl () {
        if (this.per !== 100) {
          return this.imgArr
        } else {
          let arr = []
          for (let i = 0; i < this.imgArr.length; i++) {
            arr[i] = urls.UrlHttp + this.imgArr[i]
          }
          return arr
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .feedback {
    font-size: 28upx;
    color: #666;
    .top {
      width: 92%;
      margin: 20upx auto;
      .input {
        textarea {
          width: 100%;
          height: 300upx;
          border: 1upx solid #eee;
          border-radius: 20upx;
          box-sizing: border-box;
          box-shadow: 0 0 6upx #999;
          padding: 20upx;
          margin-top: 20upx;
          caret-color: #BD3037;
        }
        .error {
          border: 1upx solid red;
          box-shadow: 0 0 20upx red;
        }
      }
    }
    .img-box {
      width: 92%;
      margin: 20upx auto;
      image {
        width: 142upx;
        height: 142upx;
        border-radius: 12upx;
      }
      .img-item {
        display: inline-block;
        width: auto;
        border: 1upx solid #eee;
        position: relative;
        z-index: 1;
        margin: 20upx 10upx;
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          width: 100%;
          height: 100%;
          background-color: rgba($color: #000000, $alpha: .3);
          .progress {
            width: 50%;
            margin-top: 68upx;
            margin-left: 25%;
          }
        }
      }
    }
    .phone {
      width: 92%;
      margin: 20upx auto;
      line-height: 84upx;
      input {
        display: inline-block;
        width: 60%;
        border: 1upx solid #ccc;
        border-radius: 16upx;
        padding: 10upx 20upx;
        vertical-align: middle;
        caret-color: #BD3037;
      }
      .error {
        border: 1upx solid red;
        box-shadow: 0 0 20upx red;
      }
    }
    .btn {
      width: 100%;
      text-align: center;
      margin-top: 40upx;
      button {
        display: inline-block;
        width: 280upx;
        height: 78upx;
        line-height: 78upx;
        border-radius: 50upx;
        border: none;
        color: #fff;
        background-color: #BD3037;
        box-shadow: 4upx 4upx 8upx #999;
      }
      .gray {
        box-shadow: none;
      }
    }
    .tips {
      width: 92%;
      margin: 10upx auto;
      font-size: 24upx;
      color: red;
    }
  }
</style>
