<template>
  <view class="my-fans">
  	<view class="fans-list">
  		<navigator class="item" url="userInfo" v-for="(item, index) in fansList" :key="index">
        <view class="logo">
          <image :src="item.logo"></image>
        </view>
        <view class="info">
        	<text class="h3">{{item.username}}</text>
          <view class="text-over-1">{{item.intro}}</view>
        </view>
        <view class="btn">
          <button type="warn" v-if="item.isFocus">互相关注</button>
        	<button type="warn" plain v-if="!item.isFocus">关注</button>
        </view>
      </navigator>
  	</view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        fansList: []
      }
    },
    onLoad() {
    	var item = this.$store.state.userInfo
      for (let i = 0; i < 4; i++) {
        this.fansList.push(item)
      }
    }
  }
</script>

<style lang="scss" scoped>
.my-fans {
  .fans-list {
    width: 94%;
    margin: 0 auto;
    .item {
      width: 100%;
      padding: 20upx 0;
      border-bottom: 1upx solid #efefef;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      .logo {
        max-width: 25%;
        image {
          width: 120upx;
          height: 120upx;
          border-radius: 50%;
        }
      }
      .info {
        flex: 1;
        width: 50%;
        margin: 0 20upx;
        line-height: 48upx;
        color: #999;
        font-size: 28upx;
        .text-over-1 {
          width: 100%;
        }
      }
      .btn {
        width: 25%;
        text-align: center;
        button {
          display: inline-block;
          width: 100%;
          height: 60upx;
          line-height: 60upx;
          font-size: 28upx;
        }
      }
    }
  }
}
</style>
