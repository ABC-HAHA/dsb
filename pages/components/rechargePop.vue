<template>
  <view class="share-pop" v-show="showRecharge" @touchmove.stop.prevent="moveHandle">
    <view class="mask" @tap="close"></view>
    <view class="pop-content">
      <view class="title">
        <text>余额不足</text>
        <text class="icon icon-close fr" @tap="close"></text>
      </view>
      <view class="recharge-info">
        <view class="price">价格：<text>{{story.price}}</text>书币/章<text class="c-red">（已购章节不扣费）</text></view>
        <view class="balance">余额：<text>{{story.gold}}</text>书币</view>
      </view>
      <view class="recharge-number">
        <view class="title">充值金额</view>
        <radio-group @change="changeMoney" class="content">
          <label class="item" v-for="(item, index) in list" :key="item.amount" :class="{on: isChecked(index)}">
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
            <radio class="radio" :value="item.value" :checked="index === curType" color="#BD3037"/>
            <view class="style-item">
              <view class="logo">
                <text :class="item.pic"></text>
              </view>
              <view class="style-name">
                <view class="h4">{{item.name}}</view>
                <view class="span-gray">1元 = 2书币</view>
                <!-- <image class="tag" :src="item.tagpic"></image> -->
              </view>
            </view>
          </label>
        </radio-group>
      </view>
      <view class="sure" @tap="sure">充值</view>
    </view>
  </view>
</template>

<script>
  export default {
    props: ['story', 'showRecharge', 'list'],
    data () {
      return {
        current: 0,
        money: 0,
        curType: 0,
        styleItems: [
          {
            name: '微信',
            value: 'wx',
            pic: 'icon icon-wx-pay',
          },
          // #ifndef MP-WEIXIN
          {
            name: '支付宝',
            value: 'zfb',
            pic: 'icon icon-zfb-pay',
          }
          // #endif
        ]
      }
    },
    methods: {
      close: function () {
        this.$emit('closeRechargePop', false)
      },
      moveHandle: function () { // 禁止蒙版下的页面滑动
      },
      changeMoney: function (e) {
        // console.log(e)
        let val = e.detail.value
        this.money = e.detail.value
        for (let i = 0; i < this.list.length; i++) {
          if (val === this.list[i].amount) {
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
      sure: function () {
        if (this.money === 0) {
          this.money = this.list[0].amount
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .share-pop {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 888;
    overflow: hidden;
    .mask {
      width: 100%;
      height: 100vh;
      background-color: rgba($color: #000000, $alpha: .3);
      position: fixed;
      left: 0;
      top: 0;
      z-index: 889;
    }
    .pop-content {
      width: 92%;
      box-sizing: border-box;
      position: absolute;
      z-index: 999;
      left: 4%;
      bottom: 20upx;
      background-color: #fff;
      border-radius: 8upx;
      box-shadow: 0 0 8upx #666;
      .title {
        width: 100%;
        height: 88upx;
        line-height: 88upx;
        box-sizing: border-box;
        padding-left: 20upx;
        font-size: 30upx;
        font-weight: 600;
        border-bottom: 2upx solid #ccc;
        .icon-close {
          margin-right: 20upx;
          color: #999;
        }
      }
      .recharge-info {
        width: 100%;
        font-size: 28upx;
        line-height: 40upx;
        box-sizing: border-box;
        padding-left: 20upx;
        color: #999;
        background-color: #f9f9f9;
      }
      .recharge-number {
        width: 100%;
        .title {
          width: 100%;
          height: 66upx;
          font-size: 30upx;
          font-weight: 600;
          line-height: 66upx;
          box-sizing: border-box;
          padding-left: 20upx;
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
      .input {
        width: 100%;
        line-height: 60upx;
        text-align: center;
        margin: 40upx auto;
        .icon {
          font-size: 48upx;
        }
        input {
          display: inline-block;
          width: 120upx;
          height: 60upx;
          border: 1upx solid #aaa;
          line-height: 60upx;
          padding: 0 20upx;
        }
      }
      .recharge-style {
        width: 100%;
        min-height: 30vh;
        .title {
          width: 100%;
          height: 66upx;
          font-size: 30upx;
          font-weight: 600;
          line-height: 66upx;
          box-sizing: border-box;
          padding-left: 20upx;
        }
        .style {
          width: 100%;
          background-color: #fff;
          border-bottom: 1upx solid #eee;
          .item {
            width: 100%;
            margin: 0 auto;
            padding: 16upx 3%;
            box-sizing: border-box;
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
              .icon {
                font-size: 64upx;
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
      .sure {
        width: 100%;
        height: 88upx;
        line-height: 88upx;
        text-align: center;
        color: #fff;
        background-color: #09bb07;
        border-radius: 0 0 8upx 8upx;
      }
    }
  }
</style>
