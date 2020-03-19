<template>
  <view class="share-detail">
    <view class="header">
      <text class="fl">成功人数：<text class="num">{{shareInfo.gencount}}</text>人</text>
      <text class="fr">奖励金：<text class="num">{{shareInfo.usermoney}}</text>个</text>
    </view>
    <view class="content">
      <view class="title">推广列表</view>
      <view class="item" v-for="(item, index) in shareInfo.generalize" :key="index">
        <image :src="urlHttp + item.headimgurl" mode=""></image>
        <view class="info">
           <text class="name">姓名：{{item.username}}</text>
           <view class="time">推广时间：{{time(item.create_time)}}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import urls from '../../../utils/urls.js'
  export default {
    data () {
      return {
        shareInfo: {},
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
        url: urls.HTTP + '/Generalize/promoteuser',
        method: 'POST',
        data: {
          uid: id
        },
        success: (res) => {
          console.log(res)
          this.shareInfo = res.data
        }
      })
    },
    methods: {
      time: function (t) {
        let date = new Date(t * 1000)
        let yy = date.getFullYear()
        let mm = date.getMonth() + 1
        let dd = date.getDate()
        return yy + '-' + mm + '-' + dd
      }
    },
    computed: {
      urlHttp () {
        return urls.UrlHttp
      }
    }
  }
</script>

<style lang="scss" scoped>
  .share-detail {
    width: 100%;
    .header {
      width: 100%;
      box-sizing: border-box;
      padding: 80upx 120upx;
      line-height: 40upx;
      overflow: hidden;
      color: #515151;
      background-color: #f9f9f9;
      font-size: 28upx;
      .num {
        font-size: 36upx;
        color: red;
      }
    }
    .content {
      width: 100%;
      .title {
        width: 100%;
        box-sizing: border-box;
        line-height: 80upx;
        padding-left: 20upx;
        font-size: 32upx;
        color: #515151;
        border-bottom: 1upx solid #eee;
      }
      .item {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1upx solid #eee;
        image {
          width: 120upx;
          height: 120upx;
          border-radius: 50%;
          margin: 0 20upx;
        }
        .info {
          line-height: 60upx;
          .name {
            color: #515151;
            font-size: 30upx;
          }
          .time {
            color: #aaa;
            font-size: 28upx;
          }
        }
      }
    }
  }
</style>
