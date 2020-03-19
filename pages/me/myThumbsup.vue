<template>
  <view class="my-star">
    <view class="task-card">
    	<view class="card-item" :class="{on: isOne}" @tap="changeClass(0)">
        <text>谁赞了我</text>
      </view>
      <view class="card-item" :class="{on: !isOne}" @tap="changeClass(1)">
        <text>我赞了谁</text>
      </view>
      <view class="active-line">
        <view class="slider" :animation="sliderAnim"></view>
      </view>
    </view>
    <view class="no-content" v-if="lists.length === 0">
      <text class="icon icon-thumbs-up"></text>
      <view>暂无点赞！</view>
    </view>
    <view class="content" v-if="isOne">
      <view class="item" v-for="(item, index) in lists" :key="index">
        <view class="img">
          <image :src="userLogo(item.userpic)" mode=""></image>
        </view>
        <view class="right">
          <view class="title text-over-1"><text class="c-red">{{item.username}}</text>赞了<text class="c-red"> 我 </text>的评论：<text>《{{item.noveltitle}}》</text></view>
          <view class="reply text-over-1">
            {{item.content}}
          </view>
        </view>
      </view>
    </view>
    <view class="content" v-else>
      <view class="item" v-for="(item, index) in lists" :key="index">
        <view class="img">
          <image :src="userLogo(item.userpic)" mode=""></image>
        </view>
        <view class="right">
          <view class="title text-over-1"><text class="c-red"> 我 </text>赞了<text class="c-red">{{item.username}}</text>的评论：<text>《{{item.noveltitle}}》</text></view>
          <view class="reply text-over-1">
            {{item.content}}
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
        current: 0,
        sliderAnim: {},
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
        url: urls.HTTP + '/user/formyup',
        method: 'POST',
        data: {
          id: id
        },
        success: (res) => {
          if (res.data.code === 0) {
            this.lists = res.data.userup
          } else {
            this.lists = []
          }
          // console.log('谁赞了我', res)
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
        var url = '/user/formyup'
        if (n === 0) {
          this.animation.left(0).step()
          this.sliderAnim = this.animation.export()
          url = '/user/formyup'
        } else {
          this.animation.left(100 + '%').step()
          this.sliderAnim = this.animation.export()
          url = '/user/myup'
        }
        uni.request({
          url: urls.HTTP + url,
          method: 'POST',
          data: {
            id: id
          },
          success: (res) => {
            // console.log(url, res)
            if (res.data.code === 0) {
              this.lists = res.data.userup
            } else {
              this.lists = []
              uni.showToast({
                title: res.data.error,
                icon: 'none'
              })
            }
          }
        })
      },
      userLogo: function (img) {
        return urls.UrlHttp + img
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
  .my-star {
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
    .no-content {
      width: 100%;
      font-size: 30upx;
      color: #999;
      text-align: center;
      margin-top: 160upx;
      image {
        width: 581upx;
        height: 390upx;
        margin-bottom: 40upx;
      }
      .icon {
        font-size: 60upx;
      }
    }
    .content {
      width: 100%;
      margin-top: 100upx;
      .item {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 10upx 30upx;
        border-bottom: 1upx solid #eee;
        image {
          width: 100upx;
          height: 100upx;
          border-radius: 50%;
        }
        .right {
          width: 84%;
          font-size: 28upx;
          .title {
            width: 96%;
            color: #888;
            display: inline-block;
          }
          .reply {
            width: 96%;
            color: #aaa;
            display: inline-block;
          }
        }
      }
    }
  }
</style>
