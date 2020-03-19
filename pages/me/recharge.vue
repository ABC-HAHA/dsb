<template>
  <view class="recharge">
    <view class="balance">
      当前账户余额：<text class="c-red">{{userInfo.gold}}</text> 书币
    </view>
    <view class="recharge-number">
      <view class="title">充值金额</view>
      <radio-group @change="changeMoney" class="content">
        <label class="item" v-for="(item, index) in lists" :key="item.amount" :class="{on: isChecked(index)}">
          <view class="radio">
            <radio :value="item.amount" :checked="index === current" />
          </view>
          <view>
            <view class="coin"><text class="gray">{{item.gold}}</text>书币</view>
            <view class="money"><text class="red">{{item.amount}}</text>元</view>
          </view>
        </label>
      </radio-group>
    </view>
    <view class="recharge-style">
      <view class="title">充值方式</view>
      <radio-group @change="typeChange" class="style">
        <label class="item" v-for="(item, index) in styleItems" :key="index">
          <radio class="radio" :value="item.value" :checked="index === curType"/>
          <view class="style-item">
            <view class="logo">
              <image :src="item.pic"></image>
            </view>
            <view class="style-name">
              <view class="h4">{{item.name}}</view>
              <view class="span-gray">1元=100阅读币</view>
              <!-- <image class="tag" :src="item.tagpic"></image> -->
            </view>
          </view>
        </label>
      </radio-group>
    </view>
    <view class="btn">
      <button class="sure bg-red" :loading="isSure" @tap="recharge">充值</button>
    </view>
    <!-- <view class="tips">
      <view class="title">温馨提示：</view>
      <view class="tips-item" v-for="(item,index) in tips" :key="index">
        {{index+1}}、{{item.text}}
      </view>
    </view> -->
  </view>
</template>

<script>
  import urls from '../../utils/urls.js'
  export default {
    data () {
      return {
        money: 0,
        lists: [],
        current: 0,
        curType: 0,
        type: 'wx',
        isSure: false,
        styleItems: [
          {
            name: '微信',
            value: 'wx',
            pic: '../../static/weixin.png',
            // tagpic: '../../static/icon-free.png'
          },
          // #ifndef MP-WEIXIN
          {
            name: '支付宝',
            value: 'zfb',
            pic: '../../static/alipay.png',
            // tagpic: '../../static/icon-free.png'
          }
          // #endif
          // {
          //   name: '银行卡',
          //   value: 'yl',
          //   pic: '../../static/bank.png',
          //   tagpic: '../../static/icon-free.png'
          // }
        ],
        tips: [
          {
            text: '提示提示提示提示'
          },
          {
            text: '提示提示提示提示'
          },
          {
            text: '提示提示提示提示'
          },
          {
            text: '提示提示提示提示'
          },
          {
            text: '提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示'
          }
        ],
				isLogin: this.$store.state.isLogin
      }
    },
    onLoad() {
      uni.request({
        url: urls.HTTP + '/Generalize/moneylist',
        method: 'POST',
        success: (res) => {
          // console.log(res)
          this.lists = res.data.money
          this.money = this.lists[0].amount
        }
      })
    },
    methods: {
      changeMoney: function (e) {
        // console.log(e)
        let val = e.detail.value
        this.money = e.detail.value
        for (let i = 0; i < this.lists.length; i++) {
          if (val === this.lists[i].amount) {
            this.current = i
            break
          } else {
            continue
          }
        }
      },
      typeChange: function (e) {
        this.type = e.detail.value
        let val = e.detail.value
        if (val === 'wx') {
          this.curType = 0
        } else if (val === 'zfb') {
          this.curType = 1
        } else if (val === 'yl') {
          this.curType = 2
        }
      },
      isChecked: function (index) {
        return index === this.current ? true : false
      },
      recharge: function () {
        this.isSure = true
        if (this.type === 'wx') {
          // #ifdef MP-WEIXIN
          // uni.login({
          //   provider: 'weixin',
          //   success: (res) => {
          //     let code = res.code
          //     // 请求后台数据 prepay_id paySign nonceStr timeStamp
          //     uni.request({
          //       url: '',
          //       data: {
          //         
          //       },
          //       success: (res) => {
          //         console.log(res)
          //         // 调起支付
          //         uni.requestPayment({
          //           provider: 'wxpay',
          //           timeStamp: String(Date.now()),
          //           nonceStr: res.nonceStr,
          //           package: res.package,
          //           signType: 'MD5',
          //           paySign: res.paySign,
          //           success: (res) => {
          //             console.log('支付成功': + res)
          //           }
          //         })
          //       }
          //     })
          //   }
          // })
          // #endif
          // #ifndef MP-WEIXIN
          // uni.request({
          //   url: urls.HTTP + '/pay/appwxpay',
          //   method: 'POST',
          //   success: (res) => {
          //     console.log(res)
          //     // 调起支付
          //     uni.requestPayment({
          //       provider: 'wxpay',
          //       orderInfo: {
          //       },
          //       success: res => {}
          //     })
          //   }
          // })
          // #endif
        } else if (this.type === 'zfb') {
          // uni.request({
          //   url: urls.HTTP + '/pay/appwxpay',
          //   method: 'POST',
          //   success: (res) => {
          //     console.log(res)
          //     // 调起支付
          //     uni.requestPayment({
          //       provider: 'alipay',
          //       orderInfo: {
          //       },
          //       success: res => {}
          //     })
          //   }
          // })
        }
      }
    },
    computed: {
      userInfo () {
        return this.$store.state.userInfo
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recharge {
    min-height: 100vh;
    background-color: #f0f0f0;
    .balance {
      font-size: 28upx;
      color: #515151;
      width: 100%;
      padding: 20upx 3%;
      background-color: #fff;
      box-sizing: border-box;
    }
    .tips {
      width: 90%;
      margin: 40upx auto;
      font-size: 26upx;
      color: #aaa;
      line-height: 48upx;
      border: 1upx solid #ccc;
      border-radius: 12upx;
      background-color: #fff;
      box-sizing: border-box;
      padding: 20upx;
      .title {
        color: #BD3037;
        font-size: 32upx;
        line-height: 60upx;
      }
    }
    .recharge-number {
      width: 100%;
      .title {
        font-size: 30upx;
        font-weight: 600;
        line-height: 80upx;
        margin-left: 40upx;
      }
      .content {
        width: 92%;
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .item {
          width: 32%;
          position: relative;
          border: 1upx solid #ddd;
          background-color: #f9f9f9;
          box-sizing: border-box;
          padding: 8upx;
          border-radius: 10upx;
          margin: 10upx 0;
          .radio {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
          }
          .coin {
            width: 100%;
            line-height: 42upx;
            font-size: 24upx;
            color: #515151;
            .gray {
              color: #888;
            }
          }
          .money {
            width: 100%;
            font-size: 32upx;
            color: #515151;
            text-align: right;
            .red {
              color: #f00;
            }
          }
        }
        .on {
          background-color: rgba($color: #f00, $alpha: .1);
          border: 1upx solid hotpink;
        }
      }
    }
    .recharge-style {
      width: 100%;
      .title {
        font-size: 30upx;
        font-weight: 600;
        line-height: 80upx;
        margin-left: 40upx;
      }
      .style {
        width: 100%;
        background-color: #fff;
        border-bottom: 1upx solid #eee;
        .item {
          width: 100%;
          margin: 0 auto;
          padding: 16upx 3%;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1upx solid #f0f0f0;
          .radio {
            transform: scale(.8, .8);
          }
          .logo {
            margin: 10upx 20upx 0 20upx;
            text-align: center;
            image {
              width: 60upx;
              height: 54upx;
            }
          }
          .style-item {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            position: relative;
            align-items: center;
            .tag {
              position: absolute;
              top: 0;
              left: 70%;
              width: 200upx;
              height: 34upx;
            }
          }
        }
      }
    }
    .btn {
      width: 100%;
      text-align: center;
      margin-top: 60upx;
      .sure {
        width: 50%;
        height: 80upx;
        line-height: 80upx;
        border: none;
        border-radius: 50upx;
        color: #fff;font-size: 32upx;
      }
    }
  }
</style>
