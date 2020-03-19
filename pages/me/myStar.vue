<template>
  <view class="my-star">
    <view class="h-22"></view>
  	<view class="head">
      <navigator open-type="navigateBack">
        <text class="icon icon-back"></text>
      </navigator>
      <view class="user-info">
      	<view class="logo">
          <image :src="userInfo.logo"></image>
        </view>
        <view class="user-content">
        	<text class="name">{{userInfo.username}}</text>
          <view class="intro text-over-2">{{userInfo.intro}}</view>
          <view class="dynamics">
          	<navigator url="page/myFocus" class="item">
          		<text>关注</text>
              <view>{{userInfo.focus}}</view>
          	</navigator>
            <navigator url="page/myFans" class="item">
            	<text>粉丝</text>
              <view>{{userInfo.fans}}</view>
            </navigator>
            <navigator url="page/myIssue" class="item">
            	<text>发布</text>
              <view>{{userInfo.issue}}</view>
            </navigator>
            <navigator url="page/myStar" class="item c-red">
            	<text>收藏</text>
              <view>{{userInfo.star}}</view>
            </navigator>
          </view>
        </view>
      </view>
  	</view>
    <view class="content" v-if="starList.length === 0">
    	<view class="no-star">
    		<text>暂无收藏</text>
        <text class="icon icon-cry-face"></text>
    	</view>
    </view>
    <view class="content" v-if="starList.length !== 0">
    	<view class="book-item" v-for="(item,index) in starList" :key="index">
    		<view class="logo">
    			<image class="book-bg" :src="item.src"></image>
          <image class="mark" src="../../../static/icon-free.png" v-if="item.free"></image>
          <image class="mark" src="../../../static/icon-update.png" v-if="item.update"></image>
    		</view>
        <view class="info">
        	<text class="h3 text-over-1">{{item.bookName}}</text>
          <text class="author">{{item.author}}</text>
          <view class="text-over-2">{{item.intro}}</view>
          <view class="update">
          	<text v-if="!item.finish">更新到{{item.chapter}}章</text>
            <text v-if="item.finish">已完结</text>
            <text class="c-red">{{item.chapterName}}</text>
          </view>
        </view>
        <view class="detail">查看详情</view>
    	</view>
    </view>
    <view class="focus" @tap="focus()">关 注</view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        starList: [],
        userInfo: {},
				isLogin: this.$store.state.isLogin
      }
    },
    onLoad() {
    	this.userInfo = file.userInfo
      this.starList = file.recommendation
    },
    methods: {
      focus: function () {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
.my-star {
  .head {
    width: 94%;
    background-image: url('~@/static/dy-bg.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 20upx;
    font-size: 28upx;
    margin: 0 auto 20upx;
    .icon-back {
      color: #fff;
      font-size: 36upx;
      display: inline-block;
      margin-top: 16upx;
      margin-left: 20upx;
      width: 60upx;
      height: 60upx;
    }
    .user-info {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      .logo {
        width: 20%;
        text-align: center;
        image {
          width: 120upx;
          height: 120upx;
          border-radius: 50%;
        }
      }
      .user-content {
        flex: 1;
        .name {
          color: #fff;
          font-size: 36upx;
          display: block;
        }
        .intro {
          height: 72upx;
          font-size: 24upx;
          margin-top: 10upx;
          line-height: 32upx;
          width: 96%;
          color: #666;
        }
        .dynamics {
          width: 100%;
          color: #fff;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          .item {
            width: 25%;
            height: 80upx;
            border: none;
          }
        }
      }
    }
  }
  .content {
    padding-bottom: 88upx;
    .no-star {
      width: 100%;
      padding: 160upx 0;
      font-size: 28upx;
      color: #999;
      text-align: center;
      .icon-cry-face {
        font-size: 200upx;
        display: block;
      }
    }
    .book-item {
      width: 94%;
      margin: 20upx auto;
      border: 2upx solid #f0f0f0;
      box-shadow: 2upx 2upx 4upx #ccc;
      padding: 20upx 0;
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      .logo {
        position: relative;
        margin-right: 20upx;
        .book-bg {
          width: 160upx;
          height: 200upx;
          margin-left: 10upx;
          border: 2upx solid #e7e7e7;
          box-shadow: 4upx 4upx 8upx #e7e7e7;
        }
        .mark {
          width: 80upx;
          height: 30upx;
          position: absolute;
          top: 0;
          left: 10upx;
        }
      }
      .info {
        flex: 1;
        font-size: 24upx;
        color: #999;
        .h3 {
          width: 300upx;
          display: block;
          line-height: 48upx;
        }
        .author {
          line-height: 48upx;
        }
        .update {
          line-height: 30upx;
          margin-top: 10upx;
          .c-red {
            display: inline-block;
            padding-left: 20upx;
            border-left: 2upx solid #BD3037;
            margin-left: 10upx;
          }
        }
      }
      .detail {
        position: absolute;
        top: 20upx;
        right: 10upx;
        font-size: 20upx;
        padding: 10upx;
        border: 1upx solid #BD3037;
        color: #BD3037;
        border-radius: 12upx;
      }
    }
  }
  .focus {
    width: 100%;
    height: 88upx;
    text-align: center;
    line-height: 88upx;
    color: #BD3037;
    background-color: #f0f0f0;
    position: fixed;
    left: 0;
    bottom: 0;
  }
}
</style>
