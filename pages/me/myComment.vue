<template>
  <view class="my-comment">
    <view class="task-card">
    	<view class="card-item" :class="{on: isOne}" @tap="changeClass(0)">
        <text>我的书评</text>
      </view>
      <view class="card-item" :class="{on: !isOne}" @tap="changeClass(1)">
        <text>我的评论</text>
      </view>
      <view class="active-line">
        <view class="slider" :animation="sliderAnim"></view>
      </view>
    </view>
    <view class="no-content" v-if="lists.length === 0">
      <image src="../../static/book_bg.png" mode=""></image>
      <view>别太低调哟，书友都在期待您的发声！</view>
    </view>
    <view class="content" v-if="isOne && lists.length > 0">
      <view class="item" v-for="(item, index) in lists" :key="index">
        <view class="book-info">
          <image class="fl" :src="imgUrl(item.novel.pic)" mode=""></image>
          <text class="fl book-name">《{{item.novel.title}}》</text>
          <text class="fr author">作者：{{item.novel.author}}</text>
        </view>
        <view class="text text-over-1">{{item.content}}</view>
        <view class="content-footer">
          <text class="fl time">{{item.create_time}}</text>
          <text class="fr icon icon-refresh" @tap="delThis(item)"></text>
          <text class="fr">{{item.up}}</text>
          <text class="fr icon icon-thumbs-up"></text>
          <!-- <text class="fr"></text> -->
          <text class="icon icon-comment fr f-12" @tap="goDetail(item)">{{item.replys}}</text>
        </view>
      </view>
    </view>
    <view class="content" v-if="!isOne && lists.length > 0">
      <view class="item" v-for="(item, index) in lists1" :key="index">
        <view class="book-info">
          <view class="intro">
             “我” 评论了 “<text class="c-red">{{item.rusername}}</text>” 的书评：
          </view>
          <view class="his-comment text-over-1">
            “{{item.rcontent}}”
          </view>
        </view>
        <view class="text text-over-1">{{item.content}}</view>
        <view class="content-footer">
          <text class="fl time">{{item.create_time}}</text>
          <text class="fr icon icon-refresh" @tap="delThis(item)"></text>
          <text class="fr">{{item.up}}</text>
          <text class="fr icon icon-thumbs-up"></text>
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
        lists1: [],
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
        url: urls.HTTP + '/user/mycomment',
        method: 'POST',
        data: {
          id: id
        },
        success: (res) => {
          // console.log(res)
          if (res.data.code === 0) {
            this.lists = res.data.commentlist
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
            url: urls.HTTP + '/user/mycomment',
            method: 'POST',
            data: {
              id: id
            },
            success: (res) => {
              // console.log(res)
              if (res.data.code === 0) {
                this.lists = res.data.commentlist
              } else {
                uni.showToast({
                  title: res.data.error,
                  icon: 'none'
                })
                this.lists = []
              }
            }
          })
        } else {
          this.animation.left(100 + '%').step()
          this.sliderAnim = this.animation.export()
          uni.request({
            url: urls.HTTP + '/user/myreplycomment',
            method: 'POST',
            data: {
              id: id
            },
            success: (res) => {
              console.log(res)
              if (res.data.code === 0) {
                this.lists1 = res.data.commentlist
              } else {
                uni.showToast({
                  title: res.data.error,
                  icon: 'none'
                })
                this.lists1 = []
              }
            }
          })
        }
      },
      goDetail: function (val) {
        this.$store.dispatch('comment', val)
        uni.navigateTo({
          url: 'page/myReply'
        })
      },
      delThis: function (item) {
        uni.showModal({
          title: '提示',
          content: '是否删除此书评？',
          success: (res) => {
            if (res.confirm) {
              uni.showToast({
                title: '删除成功!'
              })
            }
          }
        })
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
  .my-comment {
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
        width: 100%;
        padding: 20upx 40upx;
        box-sizing: border-box;
        border-bottom: 1upx solid #eee;
        .book-info {
          overflow: hidden;
          image {
            width: 120upx;
            height: 160upx;
            border: 1upx solid #eee;
            box-shadow: 0 0 4upx #515151;
          }
          .book-name {
            font-size: 30upx;
            margin-left: 20upx;
          }
          .author {
            font-size: 28upx;
            color: #999;
          }
          .intro {
            font-size: 28upx;
            color: #999;
          }
          .his-comment {
            font-size: 26upx;
            color: #aaa;
            width: 96%;
            line-height: 40upx;
          }
        }
        
        .text {
          display: inline-block;
          width: 90%;
          font-size: 28upx;
          color: #515151;
        }
        .content-footer {
          overflow: hidden;
          font-size: 24upx;
          color: #999;
          line-height: 28upx;
          .icon {
            margin-left: 20upx;
            margin-right: 10upx;
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
        width: 581upx;
        height: 390upx;
        margin-bottom: 40upx;
      }
    }
  }
</style>
