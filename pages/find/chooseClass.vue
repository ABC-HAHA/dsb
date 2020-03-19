<template>
  <view class="choose-class">
  	<view class="aside-left">
  		<view class="item" :class="{on: isActive[0]}" @tap="changeClass(0)">
  			<text>男生</text>
  		</view>
      <view class="item" :class="{on: isActive[1]}" @tap="changeClass(1)">
      	<text>女生</text>
      </view>
  	</view>
    <view class="aside-right">
    	<view class="title">
        <view class="short-line"></view>
        <text>{{currentText[current]}}</text>
        <view class="short-line"></view>
      </view>
      <view class="content">
      	<view class="item" v-for="(item, index) in classList" :key="index" @tap="goDetail(item)">
      		<view class="left">
      			<view class="font-middle">{{item.title}}</view>
      	    <view class="font-small">{{item.novelcount}}本</view>
      		</view>
      	  <view class="right">
      	  	<image :src="imgUrl(item.novelpic)"></image>
      	  </view>
      	</view>
      </view>
    </view>
  </view>
</template>

<script>
  import urls from '../../utils/urls.js'
  export default {
    data () {
      return {
        current: 0,
        classList: [],
        bookClassList: [],
        currentText: ['男生', '女生', '出版']
      }
    },
    onLoad() {
      uni.request({
        url: urls.HTTP + '/index/getcategory',
        method: 'POST',
        data: {
          cid: 4
        },
        success: (res) => {
          console.log(res)
          this.classList = res.data
        }
      })
    },
    computed: {
      isActive () {
        if (this.current === 0) {
          return [true, false, false]
        } else if (this.current === 1) {
          return [false, true, false]
        } else if (this.current === 2) {
          return [false, false, true]
        }
      }
    },
    methods: {
      goDetail: function (item) {
        this.$store.dispatch('pageTitle', item.title)
        this.$store.dispatch('novelType', item.id)
        uni.navigateTo({
          url: 'classBook'
        })
      },
      changeClass: function (n) {
        this.current = n
        if (n === 0) {
          uni.request({
            url: urls.HTTP + '/index/getcategory',
            method: 'POST',
            data: {
              cid: 4
            },
            success: (res) => {
              // console.log(res)
              this.classList = res.data
            }
          })
        } else if (n === 1) {
          uni.request({
            url: urls.HTTP + '/index/getcategory',
            method: 'POST',
            data: {
              cid: 8
            },
            success: (res) => {
              // console.log(res)
              this.classList = res.data
            }
          })
        } else if (n === 2) {
          this.classList = file.classList2
        }
      },
      imgUrl: function (img) {
        return urls.UrlHttp + img
      }
    }
  }
</script>

<style lang="scss" scoped>
.choose-class {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  .aside-left {
    width: 20%;
    box-sizing: border-box;
    height: 100vh;
    border-right: 1upx solid #f0f0f0;
    .item {
      width: 80%;
      box-sizing: border-box;
      margin: 20upx auto;
      padding-left: 20upx;
      font-size: 32upx;
      font-weight: 400;
    }
    .on {
      border-left: 6upx solid #BD3037;
    }
  }
  .aside-right {
    width: 80%;
    .title {
      width: 100%;
      height: 80upx;
      line-height: 80upx;
      background-color: #f6f6f6;
      text-align: center;
      color: #ccc;
      .short-line{
        width: 35%;
        height: 2upx;
        background-color: #ccc;
        display: inline-block;
        margin: 10upx;
      }
    }
    .content {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      .item {
        width: 46%;
        background-color: #f6f6f6;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin: 20upx 2%;
        .left {
          width: 55%;
          color: #999;
          text-align: center;
          margin-top: 20upx;
        }
        .right {
          width: 45%;
          image {
            width: 100%;
            height: 100upx;
          }
        }
      }
    }
  }
}
</style>
