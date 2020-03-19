<template>
  <view class="message">
    <view class="task-card">
    	<view class="card-item" :class="{on: isOne}" @tap="changeClass(0)">
        <text>通知消息</text>
      </view>
      <view class="card-item" :class="{on: !isOne}" @tap="changeClass(1)">
        <text>系统消息</text>
      </view>
      <view class="active-line">
        <view class="slider" :animation="sliderAnim"></view>
      </view>
    </view>
    <view class="no-content" v-if="isOne && lists.length === 0 || !isOne && listss.length === 0">
      <image src="../../static/message.png" mode=""></image>
      <view>暂无消息！</view>
    </view>
    <view class="content" v-if="isOne && lists.length > 0">
      <view class="item" v-for="(item, index) in lists" :key="index" @tap="goDetail(item, index)">
        <view class="img">
          <image :src="imgUrl(item.userpic)" mode=""></image>
          <text class="icon icon-dot" v-if="item.status === 0"></text>
        </view>
        <view class="right">
          <view class="title text-over-1" v-if="item.type === 'userup'"><text>{{item.username}} 赞了你的评论：</text></view>
          <view class="title text-over-1" v-if="item.type === 'comment'"><text>{{item.username}} 回复了你：</text></view>
          <text class="date">{{item.create_time}}</text>
          <view class="reply text-over-1">
            {{item.content}}
          </view>
        </view>
      </view>
    </view>
    <view class="content" v-if="!isOne && listss.length > 0">
      <view class="item" v-for="(item, index) in listss" :key="index">
        <view class="img">
          <image src="../../static/alipay.png" mode="" v-if="item.pay_type==1"></image>
					<image src="../../static/weixin1.png" mode="" v-if="item.pay_type==2"></image>
        <!--  <text class="icon icon-dot"></text> -->
        </view>
        <view class="right">
          <view class="title text-over-1" v-if="item.status==1">充值成功！</view>
					<view class="title text-over-1" v-if="item.status==0">交易取消！</view>
          <text class="date">{{item.add_time}}</text>
          <view class="reply text-over-1">
            恭喜您于{{item.add_time}}充值了{{item.money}}元（1元=10书币），感谢您对点书吧的支持！
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
        lists: [],
				listss:[],
        current: 0,
        curIndex: null,
        sliderAnim: {},
				isLogin: this.$store.state.isLogin,
				pay_type:'123',
				status:'123',
				add_time:'123',
				money:'123'
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
        url: urls.HTTP + '/user/usermessage',
        method: 'POST',
        data: {
          id: id
        },
        success: (res) => {
          if (res.data.code === 0) {
            console.log('用户通知', res.data.message)
            this.lists = res.data.message
          } else {
            uni.showToast({
              title: res.data.error,
              icon: 'none'
            })
          }
        }
      })
    },
    onShow (){
      // 创建一个动画实例
    	var animation = uni.createAnimation({
    		duration: 500,
        timingFunction: 'ease'
    	})
      
      this.animation = animation
    },
    methods: {
      changeClass: function (n) {
        this.current = n
        // let id = uni.getStorageSync('user').id
				// let id = JSON.parse(uni.getStorageSync('userInfo')).id
				let id = '';
				if(this.isLogin){
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id = 0
				}
        if (n === 0) {
          this.animation.left(0).step()
          this.sliderAnim = this.animation.export()
          uni.request({
            url: urls.HTTP + '/user/usermessage',
            method: 'POST',
            data: {
              id: id
            },
            success: (res) => {
              if (res.data.code === 0) {
                // console.log('用户通知', res.data.message)
                this.lists = res.data.message
              } else {
                uni.showToast({
                  title: res.data.error,
                  icon: 'none'
                })
              }
            }
          })
        } else {
          this.animation.left(100 + '%').step()
          this.sliderAnim = this.animation.export()
          uni.request({
            url: urls.HTTP + '/user/usermessage',
            method: 'POST',
            data: {
              id: id
            },
            success: (res) => {
              if (res.data.code === 0) {
                // console.log('用户通知', res.data.message)
                this.lists = res.data.message
              } else {
                uni.showToast({
                  title: res.data.error,
                  icon: 'none'
                })
              }
            }
          })
        }
				
				if(n==1){
					uni.request({
						url: urls.HTTP + '/user/systemmessage',
						method: 'POST',
						data: {
						  uid: id
						},
						success:(res) =>{
							console.log(res)
							this.listss = res.data.message
							// this.pay_type = res.data.message.pay_type
							// this.status = res.data.message.status
							// this.add_time = res.data.message.add_time
							// this.money = res.data.message.money
						}
					})
				}
      },
      goDetail: function (val, i) {
        let id = val.id
        uni.request({
          url: urls.HTTP + '/user/messagedetail',
          method: 'POST',
          data: {
            id: id
          },
          success: (res) => {
            // console.log(res)
            if (res.data.code === 0) {
              this.$store.dispatch('comment', res.data.commet[0])
              uni.navigateTo({
                url: 'page/myReply'
              })
            } else {
              uni.showToast({
                title: res.data.error,
                icon: 'none'
              })
            }
          }
        })
        this.curIndex = i
      },
      delThis: function (item) {
        uni.showModal({
          title: '提示',
          content: '是否删除此通知？',
          success: (res) => {
            if (res.confirm) {
              uni.showToast({
                title: '删除成功!'
              })
            }
          }
        })
      },
      noRead: function (i) {
        if (i === this.curIndex) {
          return false
        } else {
          return true
        }
      },
      imgUrl: function (url) {
        return urls.UrlHttp + url
      }
    },
    computed: {
      isOne () {
        if (this.current === 0) {
          return true
        } else if (this.current === 1) {
          return false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .message {
    position: relative;
    .task-card {
      width: 100%;
      padding: 20upx 0;
      border-bottom: 1upx solid #cfcfcf;
      color: #666;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      background-color: #fff;
      .card-item {
        flex: 1;
        text-align: center;
        font-size: 32upx;
      }
      .on {
        color: #BD3037;
      }
      .active-line {
        width: 52%;
        height: 6upx;
        position: absolute;
        bottom: 0;
        left: 21%;
        z-index: 100;
        .slider {
          width: 10%;
          height: 6upx;
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: #BD3037;
          z-index: 101;
        }
      }
    }
    .content {
      width: 100%;
      margin-top: 100upx;
      .item {
        position: relative;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 10upx 30upx;
        border-bottom: 1upx solid #eee;
        .img {
          position: relative;
          width: 100upx;
          height: 100upx;
          image {
            width: 100upx;
            height: 100upx;
            border-radius: 50%;
          }
          .icon-dot {
            font-size: 20upx;
            position: absolute;
            top: 0;
            right: 0;
            color: #f00;
          }
        }
        .right {
          width: 84%;
          font-size: 28upx;
          .title {
            width: 70%;
            font-size: 26upx;
            color: #888;
            display: inline-block;
          }
          .reply {
            width: 96%;
            color: #aaa;
            display: inline-block;
          }
          .date{
            position: absolute;
            top: 14upx;
            right: 30upx;
            font-size: 26upx;
            color: #999;
          }
        }
      }
    }
    .no-content {
      width: 100%;
      font-size: 30upx;
      color: #999;
      text-align: center;
      margin-top: 160upx;
      image {
        width: 289upx;
        height: 204upx;
        margin-bottom: 40upx;
      }
    }
  }
</style>
