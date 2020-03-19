<template>
  <view class="withdraw">
    <form @submit="sure" class="form">
      <view class="item">
        <label class="left">奖励金：</label>
        <view class="right">
          <text class="c-red">{{bonus}}</text><text class="gray">个</text>
        </view>
      </view>
      <view class="item">
        <label class="left">提现金额：</label>
        <view class="right">
					<radio-group @change="t_money" class="group">
						<radio value="10" checked /> 10
						<radio value="30" /> 30
					 </radio-group>
          <!-- <input type="text" v-model="money" placeholder="请输入提现金额" placeholder-style="color: #ccc;"/> -->
        </view>
      </view>
      <view class="item">
        <label class="left">提现方式：</label>
        <view class="right">
          <radio-group @change="changeStyle" class="group">
            <label class="radio-item">
              <radio value="wx" checked/>
              <!-- <text class="icon icon-wx-pay"></text> -->
							<image src="../../../static/weixin.png"></image>
            </label>
            <!-- #ifndef MP-WEIXIN -->
            <label class="radio-item">
              <radio value="zfb"/>
              <text class="icon icon-zfb-pay"></text>
            </label>
            <label class="radio-item">
              <radio value="yl"/>
              <image src="../../../static/bank.png" mode=""></image>
            </label>
            <!-- #endif -->
          </radio-group>
        </view>
      </view>
      <view class="btn">
        <button type="primary" form-type="submit">提现</button>
      </view>
    </form>
    <pay-info :payShow="showPayPop" :type="type" @closePayInfo="closePop" @getStyleInfo="getInfo"></pay-info>
  </view>
</template>

<script>
  import payInfo from '../../components/payInfo.vue'
  import urls from '../../../utils/urls.js'
  export default {
    components: {
      payInfo
    },
    data () {
      return {
        money: 10,
        bonus: 1,
        type: 'wx',
        showPayPop: false,
        wx_account: '',
        name: '',
        zfb_phone: '',
        bank: '',
        sub_branch: '',
        bank_name: '',
        card: '',
				isLogin: this.$store.state.isLogin
      }
    },
    onLoad (options) {
      this.bonus = options.bonus
    },
    methods: {
      changeStyle: function (e) {
        this.type = e.detail.value
      },
			t_money: function(e){
				this.money = e.detail.value
			},
      closePop: function (val) {
        this.showPayPop = val
      },
      getInfo: function (obj) {
        if (this.type === 'wx') {
          this.wx_account = obj
        } else if (this.type === 'zfb') {
          this.name = obj.name
          this.zfb_phone = obj.zfb_phone
        } else {
          this.bank = obj.bank
          this.sub_branch = obj.sub_branch
          this.bank_name = obj.bank_name
          this.card = obj.card
        }
      },
      sure: function () {
        // let uid = uni.getStorageSync('user').id
				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				let id = '';
				if(this.isLogin){
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id = 0
				}
        let obj = {}
        obj.uid = id
        obj.pay_type = this.type
        obj.bonus = this.money
        if (!this.money) {
          uni.showToast({
            title: '请填写提现金额',
            icon: 'none'
          })
        } else if (this.type === 'wx') {
          if (!this.wx_account) {
            this.showPayPop = true
          } else {
            obj.wx_account = this.wx_account
            uni.request({
              url: urls.HTTP + '/Generalize/cashWithdrawal',
              method: 'POST',
              data: obj,
              success: (res) => {
                // console.log('提交', res)
                if (res.data.code === 0) {
                  uni.showToast({
                    title: res.data.error,
                    icon: 'none'
                  })
                  this.bonus = res.data.userbonus
                } else {
                  uni.showToast({
                    title: res.data.error,
                    icon: 'none'
                  })
                }
              }
            })
          }
        } else if (this.type === 'zfb') {
          if (!this.name || !this.zfb_phone) {
            this.showPayPop = true
          } else {
            obj.name = this.name
            obj.zfb_phone = this.zfb_phone
            uni.request({
              url: urls.HTTP + '/Generalize/cashWithdrawal',
              method: 'POST',
              data: obj,
              success: (res) => {
                // console.log('提交', res)
                if (res.data.code === 0) {
                  uni.showToast({
                    title: res.data.error,
                    icon: 'none'
                  })
                  this.bonus = res.data.userbonus
                } else {
                  uni.showToast({
                    title: res.data.error,
                    icon: 'none'
                  })
                }
              }
            })
          }
        } else if (this.type === 'yl') {
          if (!this.bank || !this.sub_branch || !this.bank_name || !this.card) {
            this.showPayPop = true
          } else {
            obj.bank = this.bank
            obj.sub_branch = this.sub_branch
            obj.bank_name = this.bank_name
            obj.card = this.card
            uni.request({
              url: urls.HTTP + '/Generalize/cashWithdrawal',
              method: 'POST',
              data: obj,
              success: (res) => {
                // console.log('提交', res)
                if (res.data.code === 0) {
                  uni.showToast({
                    title: res.data.error,
                    icon: 'none'
                  })
                  this.bonus = res.data.userbonus
                } else {
                  uni.showToast({
                    title: res.data.error,
                    icon: 'none'
                  })
                }
              }
            })
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .withdraw {
    .form {
      width: 100%;
      .item {
        width: 92%;
        margin: 40upx auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        .left {
          width: 22%;
          text-align: right;
          font-size: 28upx;
          color: #999;
        }
        .right {
          flex: 1;
          margin-left: 20upx;
          .gray {
            color: #999;
            font-size: 28upx;
          }
          input {
            width: 72%;
            padding: 10upx 20upx;
            border: 1upx solid #ccc;
            border-radius: 8upx;
            caret-color: #BD3037;
            font-size: 32upx;
          }
          .group {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            .radio-item {
              width: 33%;
              line-height: 60upx;
              overflow: hidden;
              margin-right: 30upx;
              radio {
                transform: scale(.8, .8);
                float: left;
              }
              .icon {
                font-size: 60upx;
              }
              .alipay {
                width: 54upx;
                height: 54upx;
              }
              image {
                width: 62upx;
                height: 54upx;
                float: left;
              }
            }
          }
        }
      }
      .btn {
        width: 92%;
        margin: 0 auto;
      }
    }
  }
</style>
