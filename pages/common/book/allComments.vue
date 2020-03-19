<template>
  <view class="all-comments">
    <view class="ap-no-content" v-if="comments.length === 0">
      <text>暂无书评</text>
    </view>
    <view class="ap-content" v-if="comments.length !== 0">
      <view class="item" v-for="(item,index) in comments" :key="index">
        <view class="ac-title" @tap="seeTa(item)">
          <view class="fl logo">
            <image :src="(NewUrl)+(item.user.headimgurl)"></image>
          </view>
          <text class="fl f-14">{{item.user.username}}</text>
        </view>
        <view class="ac-comment">
          <view class="acc-title f-16">{{item.title}}</view>
          <view class="acc-content f-14 text-over-3">
            {{item.content}}
          </view>
        </view>
        <view class="ac-info">
          <text class="fl f-12">{{item.create_time}}</text>
          <text class="icon icon-thumbs-up fr f-12" :class="{cred: hasUp(item.id)}" @tap="thumbsUp(item)">{{item.up}}</text>
          <text class="icon icon-comment fr f-12" @tap="goDetail(item)">{{item.replys}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import urls from '../../../utils/urls.js'
  export default {
    data() {
      return {
        current: 0,
				isLogin: this.$store.state.isLogin,
				NewUrl: urls.ImgUrl
      }
    },
    computed: {
      comments () {
        return this.$store.state.comments
      },
      id () {
        return JSON.parse(uni.getStorageSync('userInfo')).id
      }
    },
    methods: {
      seeTa: function (item) {
        console.log(item)
        this.$store.dispatch('otherUser', item.user)
        uni.navigateTo({
          url: 'otherUserInfo'
        })
      },
      thumbsUp: function (item) {
        // console.log(item)
        var id = item.id
				let id1 = '';
				if(this.isLogin){
					id1 = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id1 = 0
				}
        // var uid = JSON.parse(uni.getStorageSync('userInfo')).id
        var fuid = item.user.id
        this.current = id
        uni.request({
          url: urls.HTTP + '/comment/upcomment',
          method: 'POST',
          data: {
            cid: id,
            uid: id1,
            fuid: fuid
          },
          success: (res) => {
            // console.log(res)
            if (res.data.code === 0) {
              item.up++
            } else {
              uni.showToast({
                title: '请不要重复点赞',
                icon: 'none'
              })
            }
          }
        })
      },
      goDetail: function (val) {
        this.$store.dispatch('comment', val)
        uni.navigateTo({
          url: 'commontDetail'
        })
      },
      logoUrl: function (url) {
        return urls.UrlHttp + url
      },
      hasUp: function (i) {
        if (i === this.current) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .all-comments {
    width: 100%;
    background: #fff;
    .cred {
      color: red !important;
    }
    .ap-no-content {
      width: 100%;
      height: 100upx;
      text-align: center;
      line-height: 100upx;
      font-size: 32upx;
      color: #515151;
    }
    .ap-content {
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
        .ac-info {
          overflow: hidden;
          margin-top: 20upx;
          .icon {
            margin-left: 30upx;
          }
        }
        .acc-title {
          margin: 10upx 0;
        }
      }
    }
  }
</style>
