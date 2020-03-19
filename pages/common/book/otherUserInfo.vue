<template>
  <view class="user-info">
    <view class="header" :style="{'background-image': 'url(' + imgUrl(otherUser.headimgurl) + ')'}">
      <view class="glass-bg"></view>
      <view class="h-header">
        <view class="hh-top">
          <navigator open-type="navigateBack">
            <text class="fl icon icon-back"></text>
          </navigator>
          <!-- #ifdef MP-WEIXIN -->
          <view class="focus f-left">
            <text :class="{active: isFocus}" @tap="focusTa">{{focusTxt}}</text>
          </view>
          <!-- #endif -->
          
          <!-- #ifndef MP-WEIXIN -->
          <view class="focus f-right">
            <text :class="{active: isFocus}" @tap="focusTa">{{focusTxt}}</text>
          </view>
          <!-- #endif -->
        </view>
        <view class="hh-top hh-bg-top" :animation="animTitle">
          <navigator open-type="navigateBack">
            <text class="fl icon icon-back"></text>
          </navigator>
          <!-- #ifdef MP-WEIXIN -->
          <view class="focus f-left">
            <text :class="{active: isFocus}" @tap="focusTa">{{focusTxt}}</text>
          </view>
          <!-- #endif -->
          
          <!-- #ifndef MP-WEIXIN -->
          <view class="focus f-right">
            <text :class="{active: isFocus}" @tap="focusTa">{{focusTxt}}</text>
          </view>
          <!-- #endif -->
        </view>
        <view class="hh-bottom">
          <view class="box">
            <view class="logo">
              <image :src="imgUrl(otherUser.headimgurl)"></image>
            </view>
            <view class="name">{{otherUser.username}}</view>
            <view class="box-bottom">
              <view class="item">
                <text>关注</text>
                <text>{{user.concernNumber}}</text>
              </view>
              <view class="item">
                <text>粉丝</text>
                <text>{{user.fansNumber}}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="bookshelf">
      <view class="title">
        <text>在读</text>
        <text class="icon icon-next fr"></text>
        <text class="fr">全部{{bookshelf.count}}本</text>
      </view>
      <scroll-view scroll-x="true" class="bookshelf-content">
        <block v-for="(item, index) in bookshelf.novel" :key="index">
          <view class="item" @tap="goDetail(item.id)">
            <view class="img">
              <image :src="imgUrl(item.pic)" mode=""></image>
            </view>
            <text class="item-title text-over-1">{{item.title}}</text>
          </view>
        </block>
      </scroll-view>
    </view>
    <view class="comment">
      <view class="title">
        <text>动态</text>
      </view>
      <view class="comment-content">
        <view class="item" v-for="(item,index) in comment" :key="index">
           <!-- @tap="seeTa(item)" -->
          <view class="ac-title">
            <view class="fl logo">
             <image :src="imgUrl(otherUser.headimgurl)"></image>
            </view>
            <text class="fl f-14">{{item.user.username}}</text>
          </view>
          <view class="ac-comment">
            <view class="acc-title f-16">{{item.title}}</view>
            <view class="acc-content f-14 text-over-3">
              {{item.content}}
            </view>
          </view>
          <view class="book" @tap="goDetail(item.novel.id)">
            <view class="left">
							
              <image :src="(item.novel.pic)"></image>
            </view>
            <view class="right">
              <view class="book-title">{{item.novel.title}}</view>
              <view class="book-info">
                <text>{{item.novel.author}}</text>|
                <text>{{item.novel.category}}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import urls from '../../../utils/urls.js'
  export default {
    data () {
      return {
        user: {},
        comment: [],
        bookshelf: {},
        focusTxt: '关注',
        animTitle: {},
				isLogin: this.$store.state.isLogin,
      }
    },
    onLoad() {
      let fuid = this.$store.state.otherUser.id
      let uid = 0;
			if(this.isLogin==true){
      	 uid = this.$store.state.userInfo.id
      }
			uni.request({
        url: urls.HTTP + '/index/getuserinfo',
        method: 'POST',
        data: {
          fuid: fuid,
          uid: uid
        },
        success: (res) => {
          // console.log(res)
          this.user = res.data.user
          this.comment = res.data.comment
          this.bookshelf = res.data.bookshelf
          this.focusTxt = res.data.tip
        }
      })
    },
    onShow() {
      var animation = uni.createAnimation({
        duration: 1000
      })
      this.animation = animation
    },
    onPageScroll (res) {
      if (res.scrollTop > 20) {
        this.animation.opacity(1).step()
        this.animTitle = this.animation.export()
      } else if (res.scrollTop < 20) {
        this.animation.opacity(0).step()
        this.animTitle = this.animation.export()
      }
    },
    methods: {
      imgUrl: function (img) {
        return urls.UrlHttp + img
      },
      goDetail: function (id) {
        uni.navigateTo({
          url: 'storyDetail?id=' + id
        })
      },
      focusTa: function () {
			if(!this.isLogin){
				 uni.showModal({
				  title: '提示',
				  content: '您还没有登录，是否登录？',
				  success: (res) => {
				    if (res.confirm) {
				      uni.navigateTo({
				        url: '../login'
				      })
				    }
				  }
				})
				return false
			}
        let fuid = this.otherUser.id
				
        let uid = this.userInfo.id
				
        if (fuid !== uid) {
          uni.request({
            url: urls.HTTP + '/user/follow',
            method: 'POST',
            data: {
              fuid: fuid,
              uid: uid
            },
            success: (res) => {
              // console.log(res)
              if (res.data.code === 0) {
                this.focusTxt = res.data.tip
                uni.showToast({
                  title: res.data.error
                })
              } else {
                uni.showToast({
                  title: res.data.error,
                  icon: 'none'
                })
              }
            }
          })
        } else {
          uni.showToast({
            title: '自己不能关注自己哦',
            icon: 'none'
          })
        }
      }
    },
    computed: {
      userInfo () {
        return this.$store.state.userInfo
      },
      otherUser () {
        return this.$store.state.otherUser
      },
      isFocus () {
        if (this.focusTxt === '已关注') {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-info {
    .header {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-repeat: no-repeat;
      background-size: 100%;
      background-attachment: fixed;
      overflow: hidden;
      z-index: 3;
      .glass-bg {
        width: 100%;
        height: 100%;
        background: inherit;
        filter: blur(20upx);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
      }
      .h-header {
        width: 100%;
        position: relative;
        z-index: 5;
        .hh-top {
          width: 100%;
          box-sizing: border-box;
          padding: 44upx 20upx 0 20upx;
          line-height: 88upx;
          overflow: hidden;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 990;
          .focus {
            width: 200upx;
            font-size: 28upx;
            text {
              height: 40upx;
              line-height: 40upx;
              display: inline-block;
              padding: 4upx 8upx;
              border-radius: 10upx;
              border: 1upx solid #BD3037;
              color: #BD3037;
              text-align: center;
            }
            .active {
              background-color: #BD3037;
              color: #fff;
            }
          }
          .f-left {
            margin-left: 100upx;
          }
          .f-right {
            margin-right: 40upx;
          }
        }
        .hh-bg-top {
          z-index: 999;
          opacity: 0;
          background-color: #fff;
        }
        .hh-bottom {
          width: 100%;
          padding-top: 200upx;
          background: linear-gradient(rgba(255,255,255, 0),rgba(255,255,255, 1));
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          padding-bottom: 20upx;
          .box {
            width: 80%;
            height: 280upx;
            margin: 0 auto;
            border-radius: 20upx;
            box-shadow: 0 0 20upx #999;
            position: relative;
            z-index: 6;
            background-color: #fff;
            .logo {
              width: 30%;
              position: absolute;
              top: -70upx;
              left: 35%;
              text-align: center;
              image {
                width: 140upx;
                height: 140upx;
                border-radius: 50%;
              }
            }
            .name {
              margin-top: 80upx;
              text-align: center;
              font-size: 36upx;
            }
            .box-bottom {
              margin-top: 40upx;
              display: flex;
              flex-flow: row nowrap;
              justify-content: center;
              .item {
                margin: 0 20upx;
                font-size: 32upx;
                color: #999;
              }
            }
          }
          
        }
      }
    }
    .bookshelf {
      margin-top: 540upx;
      .bookshelf-content {
        white-space: nowrap; // 滚动必须加的属性
        width: 100%;
        height: 280upx;
        padding: 20upx;
        margin: 0 auto;
        .item {
          width: 24%;
          margin-right: 20upx;
          display: inline-block;
          vertical-align: top;
          .img {
            display: inline-block;
            image {
              width: 170upx;
              height: 220upx;
              border-radius: 6upx;
            }
          }
          .item-title {
            display: block; // 让字体换行
            width: 90%;
            font-size: 30upx;
            line-height: 40upx;
          }
        }
      }
    }
    .comment {
      width: 100%;
      background-color: #fff;
      .comment-content {
        width: 90%;
        margin: 0 auto;
        .item {
          width: 100%;
          padding: 20upx 0;
          border-bottom: 1upx solid #eee;
          .f-16 {
            font-size: 32upx;
            color: #333;
          }
          .f-14 {
            font-size: 28upx;
            color: #666;
          }
          .f-12 {
            font-size: 24upx;
            color: #999;
            margin-left: 10upx;
          }
          .ac-title {
            overflow: hidden;
            line-height: 60upx;
            .logo {
              width: 80upx;
              height: 60upx;
              image {
                width: 60upx;
                height: 60upx;
                border-radius: 50%;
              }
            }
          }
          .acc-title {
            margin: 10upx 0;
          }
          .book {
            width: 96%;
            margin: 20upx auto;
            box-shadow: 0 0 16upx #999;
            border-radius: 4upx;
            box-sizing: border-box;
            padding: 20upx;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            .left {
              width: 24%;
              image {
                width: 120upx;
                height: 160upx;
              }
            }
            .right {
              line-height: 80upx;
              .book-title {
                font-size: 32upx;
              }
              .book-info {
                font-size: 28upx;
                color: #999;
              }
            }
          }
        } 
      }
    }
    .title {
      width: 100%;
      box-sizing: border-box;
      padding: 20upx;
      line-height: 80upx;
      font-size: 32upx;
      font-weight: 600;
      .fr {
        font-size: 28upx; 
        color: #888;
        margin-right: 10upx;
        font-weight: 400;
      }
    }
  }
  
</style>
