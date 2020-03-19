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
        <label class="left">兑换金额：</label>
        <view class="right">
					<radio-group @change="t_money" class="group" style="display:inline-block;">
						<p><radio value="10" checked /> 10（5奖励金）</p>
						<p style="padding:10upx  0 10upx 0;"><radio value="30" /> 30（15奖励金）</p>
						<p><radio :value="(gold)" />{{gold}}({{bonus}}奖励金)</p>
					 </radio-group>
        </view>
      </view>      
      <view class="btn">
        <button type="primary" form-type="submit">兑换</button>
      </view>
    </form>
  </view>
</template>

<script>
  import payInfo from '../../components/payInfo.vue'
  import urls from '../../../utils/urls.js'
  export default {
    data () {
      return {
        money: 10,
        bonus: 0,
        gold: 0,       
				isLogin: this.$store.state.isLogin
      }
    },
    onLoad (options) {
      this.bonus = options.bonus
			this.gold = this.bonus*2
    },
    methods: {
			t_money: function(e){
				this.money = e.detail.value
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
        if (!this.money) {
          uni.showToast({
            title: '请选择兑换金额',
            icon: 'none'
          })
        }
				obj.bonus = this.money/2
				obj.wx_account = this.wx_account
				uni.request({
				  url: urls.HTTP + '/Generalize/exchange',
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
							this.gold = this.bonus*2
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
