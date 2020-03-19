<template>
  <view class="boy-choose">
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
    		<text class="icon icon-boy">男生爱看</text>
    	</view>
      <checkbox-group class="content-class" @change="chooseMaleLike">
        <label class="item" v-for="(item, index) in maleLike" :key="index" :class="{on: item.isChecked}">
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
        maleLike: [],
        currentArr: [], // 当前用户想要的选项，最大为5
        oldArr: [], // 上一次的返回值
        hasPass: false, // 用户之前是否选择过，是为true
				isLogin: this.$store.state.isLogin
      }
    },
    onLoad() {
    	uni.request({
    	  url: urls.HTTP + '/index/getnovelcategory',
    	  method: 'POST',
    	  success: (res) => {
    	    // console.log(res)
    	    this.maleLike = res.data.man
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
      chooseMaleLike: function (e) {
        if (e.detail.value.length > 5) { // 如果选择的个数超过5个
          if (!this.hasPass) { // 当用户选择数量是第一次超过5
            this.hasPass = true
            if (e.detail.value.length > this.oldArr.length) { // 如果当前选择总数大于上一次选择总数（用户没有取消过选择）
              this.currentArr = e.detail.value.slice(0, 5)
              uni.showToast({
                title: '最多5个',
                icon: 'none'
              })
            } else { // 如果当前选择总数小于上一次选择总数（用户取消部分选择）
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
          } else { // 当用户选择数量不是第一次超过5（这时候change事件的返回值里有不一定是用户想要的值，所以需要做判断）
            if (e.detail.value.length > this.oldArr.length) { // 用户又增加了选项
              let n = e.detail.value.length
              if (this.currentArr.length < 5) {
                this.currentArr.push(e.detail.value[n - 1])
              } else {
                uni.showToast({
                  title: '最多5个',
                  icon: 'none'
                })
              }
            } else { // 用户取消了部分选项
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
        } else { // 如果选择的个数小于等于5
          if (this.hasPass) { // 不是第一次小于5，即之前多选过，后来又取消选择
            if (e.detail.value.length < this.oldArr.length) { // 用户取消了部分选择
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
            } else { // 用户增加选择，增加的新选项在数组最后
              let n = e.detail.value.length
              this.currentArr.push(e.detail.value[n - 1])
            }
          } else { // 是第一次小于5，这个最简单了，直接选了什么就给什么
            this.currentArr = e.detail.value
          }
          
          if (e.detail.value.length === 0) { // 如果用户取消了全部选择，让hasPass为false，即下一次再选时就会判断为第一次选择
            this.hasPass = false
          }
        }
        for (var i = 0, lenI = this.maleLike.length; i < lenI; ++i) { // 给用户的选项添加样式
          this.maleLike[i].isChecked = false;
          for (var j = 0, lenJ = this.currentArr.length; j < lenJ; ++j) {
            if (String(this.maleLike[i].id) === String(this.currentArr[j])) {
              this.maleLike[i].isChecked = true
              break
            }
          }
        }
        this.oldArr = e.detail.value // 把当前返回值赋值给上一次的返回值
      }
    }
  }
</script>

<style lang="scss" scoped>
  .boy-choose {
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
      color: #3f82e7;
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
          border: 1upx solid #3f82e7;
          checkbox {
            display: none;
          }
        }
        .on {
          border: none;
          background-color: #3f82e7;
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
      background-color: #3f82e7;
      border-radius: 50upx;
      color: #fff;
    }
  }
</style>
