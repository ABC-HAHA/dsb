<template>
  <view class="my-reply">
    <view class="ap-content">
      <view class="item">
        <view class="ac-title">
          <view class="fl logo">
            <image :src="logoUrl(userInfo.headimgurl)"></image>
          </view>
          <text class="fl f-14">{{userInfo.username}}</text>
          <text class="fr f-12">{{comment.create_time}}</text>
        </view>
        <view class="ac-comment">
          <view class="acc-content f-14">
            {{comment.content}}
          </view>
        </view>
        <view class="ac-info">
          <text class="icon icon-thumbs-up fr f-12">{{comment.up}}</text>
        </view>
      </view>
    </view>
    <view class="appraise">
      <view class="ap-title">
        <text>全部回复</text>
      </view>
      <view class="ap-no-content" v-if="comment._.length === 0">
        <text>暂无回复</text>
      </view>
      <view class="ap-content" v-if="comment._.length !== 0">
        <view class="item" v-for="(item,index) in comment._" :key="index">
          <view class="ac-title">
            <view class="fl logo">
              <image :src="logoUrl(item.user.headimgurl)"></image>
            </view>
            <text class="fl f-14">{{item.user.username}}</text>
          </view>
          <view class="ac-comment">
            <view class="acc-content f-12">
              {{item.content}}
            </view>
          </view>
          <view class="ac-info">
            <text class="fl f-12">{{item.create_time}}</text>
            <text class="icon icon-thumbs-up fr f-12" :class="{cred: hasUp(item.id)}" @tap="thumbsUp(item)">{{item.up}}</text>
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
        current: 0,
				isLogin: this.$store.state.isLogin
      }
    },
    computed: {
      comment () {
        return this.$store.state.comment
      },
      userInfo () {
        return this.$store.state.userInfo
      }
    },
    methods: {
      thumbsUp: function (item) {
        var id = item.id
        // var uid = uni.getStorageSync('user').id
				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				let id1 = '';
				if(this.isLogin){
					id1 = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id1= 0
				}
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
      hasUp: function (i) {
        if (i === this.current) {
          return true
        } else {
          return false
        }
      },
      logoUrl: function (url) {
        return this.httpUrl + url
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-reply {
    width: 100%;
    background-color: #fff;
    .cred {
      color: red !important;
    }
    .appraise {
      width: 100%;
      .ap-title {
        width: 90%;
        padding: 20upx 0;
        margin: 0 auto;
        line-height: 40upx;
        border-bottom: 1upx solid #f0f0f0;
        font-size: 32upx;
        color: #515151;
        .icon-edit {
          color: red;
          font-size: 28upx;
        }
      }
      .ap-no-content {
        width: 100%;
        height: 100upx;
        text-align: center;
        line-height: 100upx;
        font-size: 32upx;
        color: #515151;
      }
      
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
          font-weight: 600;
        }
        .acc-content {
          color: #515151;
          margin: 20upx 0;
        }
      }
    }
  }
</style>
