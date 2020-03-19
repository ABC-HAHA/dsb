<template>
  <view class="girl-choose">
    <view class="h-22"></view>
    <image class="bg" src="../../static/redbg.png"></image>
  	<view class="title">
  		<view class="text1">
  			请选择您的阅读偏好<text class="text2">(最多5个)</text>
  		</view>
      <view class="text1">
      	让我们更好的为您服务
      </view>
  	</view>
    <view class="content">
    	<view class="content-title">
    		<text class="icon icon-girl">女生爱看</text>
    	</view>
      <checkbox-group class="content-class" @change="chooseFemaleLike">
        <label class="item" v-for="(item, index) in femaleLike" :key="index" :class="{on: item.isChecked}">
          <checkbox :value="item.id"></checkbox>
          <text class="item-text">{{item.title}}</text>
        </label>
      </checkbox-group>
    </view>
    <button class="commit" @tap="commit">开启阅读之旅</button>
  </view>
</template>

<script>
  import urls from '../../utils/urls.js'
  export default {
    data () {
      return {
        femaleLike: [],
        currentArr: [], // 当前选项，最大为5
        hasPass: false, // 是否是第一次从头开始选，当所有选项取消选择后也视为第一次
        oldArr: [] ,// 上一次的选项
				isLogin: this.$store.state.isLogin
      }
    },
    onLoad() {
      uni.request({
        url: urls.HTTP + '/index/getnovelcategory',
        method: 'POST',
        success: (res) => {
          // console.log(res)
          this.femaleLike = res.data.woman
        }
      })
    },
    methods: {
      commit: function () {
        let arr = this.currentArr
        // let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				let id = '';
				if(this.isLogin){
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id = 0
				}
        uni.request({
          url: urls.HTTP + '/user/userlike',
          method: 'POST',
          data: {
            cids: arr,
            uid: id
          },
          success: (res) => {
            // console.log(res)
            if (res.data.code === 0) {
              uni.setStorageSync('user', res.data.user)
              this.$store.dispatch('userInfo', res.data.user)
              uni.switchTab({
                url: '../find/find'
              })
            } else {
              uni.showToast({
                title: res.data.error
              })
            }
          }
        })
      },
      chooseFemaleLike: function (e) {
        // console.log(e)
        if (e.detail.value.length > 5) {
          if (!this.hasPass) {
            this.hasPass = true
            if (e.detail.value.length > this.oldArr.length) {
              this.currentArr = e.detail.value.slice(0, 5)
              uni.showToast({
                title: '最多5个',
                icon: 'none'
              })
            } else {
              let arr = []
              for (var i = 0; i < this.currentArr.length; i++) {
                for (var j = 0; j < 5; j++) {
                  if (this.currentArr[i] === e.detail.value[j]) {
                    arr.push(this.currentArr[i])
                  } else {
                    continue
                  }
                }
              }
              this.currentArr = arr
            }
          } else {
            if (e.detail.value.length > this.oldArr.length) {
              let n = e.detail.value.length
              if (this.currentArr.length < 5) {
                this.currentArr.push(e.detail.value[n - 1])
              } else {
                uni.showToast({
                  title: '最多5个',
                  icon: 'none'
                })
              }
            } else {
              let arr = []
              for (var i = 0; i < this.currentArr.length; i++) {
                let n = e.detail.value.indexOf(this.currentArr[i])
                if (n !== -1) {
                  arr.push(this.currentArr[i])
                } else {
                  continue
                }
              }
              this.currentArr = arr
            }
          }
        } else {
          if (this.hasPass) {
            if (e.detail.value.length < this.oldArr.length) {
              let arr = []
              for (var i = 0; i < this.currentArr.length; i++) {
                let n = e.detail.value.indexOf(this.currentArr[i])
                if (n !== -1) {
                  arr.push(this.currentArr[i])
                } else {
                  continue
                }
              }
              this.currentArr = arr
            } else {
              let n = e.detail.value.length
              this.currentArr.push(e.detail.value[n - 1])
            }
          } else {
            this.currentArr = e.detail.value
          }
          
          if (e.detail.value.length === 0) {
            this.hasPass = false
          }
        }
        for (var i = 0, lenI = this.femaleLike.length; i < lenI; ++i) {
          this.femaleLike[i].isChecked = false;
          for (var j = 0, lenJ = this.currentArr.length; j < lenJ; ++j) {
            if (this.femaleLike[i].id == this.currentArr[j]) {
              this.femaleLike[i].isChecked = true
              break
            }
          }
        }
        this.oldArr = e.detail.value
      }
    }
  }
</script>

<style lang="scss" scoped>
  .girl-choose {
    .bg {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .title {
      margin-top: 80upx;
      margin-left: 5%;
      .text1 {
        font-size: 36upx;
        .text2 {
          font-size: 24upx;
          color: #999;
        }
      }
    }
    .content {
      width: 100%;
      margin-top: 40upx;
      .content-title {
        text-align: center;
        line-height: 80upx;
        font-size: 32upx;
        .icon {
          &::before {
            font-size: 48upx;
          }
        }
      }
      .content-class {
        width: 90%;
        margin: 20upx auto;
        color: #ee3680;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        .item {
          width: 30%;
          height: 60upx;
          font-size: 28upx;
          line-height: 60upx;
          border-radius: 30upx;
          margin-bottom: 20upx;
          margin-right: 3%;
          text-align: center;
          box-sizing: border-box;
          border: 1upx solid #ee3680;
          checkbox {
            display: none;
          }
        }
        .on {
          border: none;
          background-color: #ee3680;
          color: #fff;
        }
      }
    }
    .commit {
      width: 480upx;
      height: 88upx;
      line-height: 88upx;
      margin: 280upx auto 0;
      border: none;
      background-color: #ee3680;
      border-radius: 50upx;
      color: #fff;
    }
  }
</style>
