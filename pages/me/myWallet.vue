<template>
  <view class="my-wallet">
    <view class="head">
      <image class="bg" src="../../static/wallet-bg.png"></image>
      <view class="top">
        <view class="top-item">
          <text class="text">当前余额</text>
          <view class="balance">
            {{userInfo.bonus}} <text class="text1">  元</text>
          </view>
        </view>
        <view class="top-item">
          <text class="text">累计收益</text>
          <view class="text">
            {{userInfo.income_amount}}元
          </view>
        </view>
      </view>
			<view class="bottom">
			  <text @tap="goExchange" class="icon icon-withdraw" style="float: left;margin-left: 80upx;">兑换书币</text>|
				<text @tap="goWithdraw" class="icon icon-withdraw" style="float: right;margin-right: 80upx;">余额提现</text>
			</view>
    </view>
    <view class="detail">
      <view class="title">余额明细</view>
      <view class="none" v-if="!userInfo.captial">
        暂无明细
      </view>
      <view class="detail-content" v-else>
        <view class="item" v-for="(item,index) in userInfo.captial" :key="index">
          <text class="icon icon-dot c-red"></text>
          <view class="content">
            <view class="item-title">{{item.description}}</view>
            <text class="span-gray">{{item.create_time}}</text>
          </view>
          <text class="c-red">{{item.amount}}元</text>
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
        userInfo: {},
        balanceDetail: [],
				isLogin: this.$store.state.isLogin
      }
    },
    onLoad() {
      // let id = uni.getStorageSync('user').id
			// let id = JSON.parse(uni.getStorageSync('userInfo')).id
			let id = '';
			if(this.isLogin){
				id = JSON.parse(uni.getStorageSync('userInfo')).id
			}else{
				 id = 0
			}
      uni.request({
        url: urls.HTTP + '/user/usercapitalinfo',
        method: 'POST',
        data: {
          id: id
        },
        success: (res) => {
          console.log('账户余额', res)
          this.userInfo = res.data.user
        }
      })
    },
    methods: {
      goWithdraw: function () {
        let bonus = this.userInfo.bonus
        uni.navigateTo({
          url: 'page/withdraw?bonus=' + bonus
        })
      },
			goExchange:function(){
				let bonus = this.userInfo.bonus
				uni.navigateTo({
				  url: 'page/exchange?bonus=' + bonus
				})
			}
    }
  }
</script>

<style lang="scss" scoped>
  .my-wallet {
    .head {
      width: 94%;
      height: 320upx;
      margin: 10upx auto;
      position: relative;
      border-radius: 20upx;
      border-top: 1upx solid #fff;
      z-index: 1;
      .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
      .top {
        width: 100%;
        margin-top: 80upx;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        border-bottom: 1upx solid #aaa;
        padding-bottom: 20upx;
        .top-item {
          width: 50%;
          line-height: 60upx;
          text-align: center;
          .text {
            font-size: 28upx;
          }
          .balance {
            font-size: 56upx;
            font-weight: 600;
          }
          .text1 {
            font-size: 36upx;
            font-weight: 600;
          }
        }
      }
      .bottom {
        width: 100%;
        height: 74upx;
        text-align: center;
        font-size: 32upx;
        line-height: 74upx;
      }
    }
    .detail {
      width: 94%;
      margin: 10upx auto;
      .title {
        font-size: 32upx;
        font-weight: 600;
        padding: 20upx;
        border-bottom: 1upx solid #ccc;
      }
      .detail-content {
        .item {
          width: 100%;
          padding: 10upx;
          box-sizing: border-box;
          border-bottom: 1upx solid #ccc;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          font-size: 28upx;
          .icon-dot {
            font-size: 16upx;
          }
          .content {
            flex: 1;
            color: #515151;
            font-size: 32upx;
            margin: 0 20upx;
          }
        }
      }
      .none {
        width: 100%;
        line-height: 100upx;
        text-align: center;
        font-size: 30upx;
        color: #999;
      }
    }
  }
</style>
