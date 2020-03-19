<template>
  <view class="pay-info" v-show="payShow">
    <view class="mask" @tap="close"></view>
    <view class="box">
      <view class="title">请填写信息</view>
      <text class="tips">为保证您提现成功，请正确填写您的账户信息</text>
      <view class="content" v-if="type === 'wx'">
        <view class="item">
          <label class="left">微信号：</label>
          <input type="text" v-model="wx_account" placeholder="请填写微信号"/>
        </view>
        <text v-if="errShow" class="tips">信息不能为空！</text>
        <view class="btn">
          <button @tap="sure('wx')">确定</button>
        </view>
      </view>
      <view class="content" v-if="type === 'zfb'">
        <view class="item">
          <label class="left">姓名：</label>
          <input type="text" v-model="name" />
        </view>
        <view class="item">
          <label class="left">支付宝账号：</label>
          <input type="text" v-model="zfb_phone" />
        </view>
        <text v-if="errShow" class="tips">信息不能为空！</text>
        <view class="btn">
          <button @tap="sure('zfb')">确定</button>
        </view>
      </view>
      <view class="content" v-if="type === 'yl'">
        <view class="item">
          <label class="left">开户行：</label>
          <input type="text" v-model="bank" />
        </view>
        <view class="item">
          <label class="left">开户支行：</label>
          <input type="text" v-model="sub_branch" />
        </view>
        <view class="item">
          <label class="left">姓名：</label>
          <input type="text" v-model="bank_name" />
        </view>
        <view class="item">
          <label class="left">卡号：</label>
          <input type="text" v-model="card" />
        </view>
        <text v-if="errShow" class="tips">信息不能为空！</text>
        <view class="btn">
          <button @tap="sure('yl')">确定</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: ['payShow', 'type'],
    data () {
      return {
        wx_account: '',
        name: '',
        zfb_phone: '',
        bank: '',
        sub_branch: '',
        bank_name: '',
        card: '',
        errShow: false
      }
    },
    methods: {
      sure: function (s) {
        if (s === 'wx') {
          if (!this.wx_account) {
            this.errShow = true
          } else {
            this.errShow = false
            this.$emit('getStyleInfo', this.wx_account)
            this.$emit('closePayInfo', false)
          }
        } else if (s === 'zfb') {
          if (!this.name || !this.zfb_phone) {
            this.errShow = true
          } else {
            this.errShow = false
            let obj = {}
            obj.name = this.name
            obj.zfb_phone = this.zfb_phone
            this.$emit('getStyleInfo', obj)
            this.$emit('closePayInfo', false)
          }
        } else if (s === 'yl') {
          if (!this.bank || !this.sub_branch || !this.bank_name || !this.card) {
            this.errShow = true
          } else {
            this.errShow = false
            let obj = {}
            obj.bank = this.bank
            obj.sub_branch = this.sub_branch
            obj.bank_name = this.bank_name
            obj.card = this.card
            this.$emit('getStyleInfo', obj)
            this.$emit('closePayInfo', false)
          }
        }
      },
      close: function () {
        this.$emit('closePayInfo', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pay-info {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    .mask {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
      background-color: rgba($color: #000000, $alpha: .3);
    }
    .box {
      width: 90%;
      margin: 40upx auto;
      border: 1upx solid #eee;
      border-radius: 20upx;
      background-color: #fff;
      position: relative;
      z-index: 999;
      .title {
        width: 100%;
        font-size: 34upx;
        font-weight: 600;
        text-align: center;
        line-height: 100upx;
        border-bottom: 1upx solid #eee;
      }
      .tips {
        font-size: 24upx;
        color: red;
        display: inline-block;
        padding: 10upx 20upx;
      }
      .content {
        width: 100%;
        padding-bottom: 40upx;
        .item {
          width: 92%;
          margin: 10upx auto;
          .left {
            width: 100%;
            line-height: 48upx;
            font-size: 28upx;
            color: #aaa;
            text-align: right;
            margin-right: 20upx;
          }
          input {
            width: 90%;
            height: 72upx;
            line-height: 72upx;
            font-size: 32upx;
            border: 1upx solid #ccc;
            border-radius: 8upx;
            padding: 0 20upx;
            box-sizing: border-box;
          }
        }
        .btn {
          width: 50%;
          height: 88upx;
          margin: 20upx auto;
          line-height: 88upx;
          text-align: center;
          margin-top: 40upx;
          button {
            background-color: #BD3037;
            color: #fff;
            border: none;
            font-size: 32upx;
            border-radius: 50upx;
          }
        }
      }
    }
  }
</style>
