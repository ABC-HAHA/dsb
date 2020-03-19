<template>
  <view class="comment-detail">
    <view class="ap-content">
      <view class="item">
        <view class="ac-title">
          <view class="fl logo">
            <image :src="urlHttp + comment.user.headimgurl"></image>
          </view>
          <text class="fl f-14">{{comment.user.username}}</text>
          <text class="fr f-12">{{comment.create_time}}</text>
        </view>
        <view class="ac-comment">
          <!-- <view class="acc-title f-16">{{comment.title}}</view> -->
          <view class="acc-content f-14">
            {{comment.content}}
          </view>
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
              <image :src="urlHttp + item.user.headimgurl"></image>
            </view>
            <text class="fl f-14">{{item.user.username}}</text>
            <!-- <text class="fl f-12">lv.{{item.user.exp}}</text> -->
          </view>
          <view class="ac-comment">
            <view class="acc-content f-12">
              {{item.content}}
            </view>
          </view>
          <view class="ac-info">
            <text class="fl f-12">{{item.create_time}}前</text>
            <!-- <text class="fl f-12">{{comment._.length - index}}楼</text> -->
            <text class="icon icon-thumbs-up fr f-12" :class="{cred: hasUp(item.id)}" @tap="thumbsUp(item)">{{item.up}}</text>
          </view>
        </view>
      </view>
    </view>
    <view style="width: 100%; height: 51px;"></view>
    <view class="footer">
      <textarea v-model="textarea" placeholder="在此添加评论" fixed show-confirm-bar="false"/>
      <button class="submit" @tap="sure"><text class="icon icon-send"></text></button>
    </view>
  </view>
</template>

<script>
  import urls from '../../../utils/urls.js'
  export default {
    data () {
      return {
        urlHttp: '',
        current: 0,
        textarea: '',
				isLogin: this.$store.state.isLogin
      }
    },
    onLoad() {
      this.urlHttp = urls.UrlHttp
    },
    methods: {
      sure: function () {
        var pid = this.comment.id
				let id = '';
				if(this.isLogin){
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id = 0
				}
        // var id = JSON.parse(uni.getStorageSync('userInfo')).id
        var bookId = this.$store.state.bookId
        var content = this.textarea
        uni.request({
          url: urls.HTTP + '/comment/addcomment',
          method: 'POST',
          data: {
            uid: id,
            novel_id: bookId,
            pid: pid,
            content: content
          },
          success: (res) => {
            // console.log(res)
            if (res.data.code === 0) {
              uni.showToast({
                title: res.data.error
              })
              this.comment._ = res.data.replycomment
              this.textarea = ''
            } else {
              uni.showToast({
                title: res.data.error,
                icon: 'none'
              })
            }
          }
        })
      },
      thumbsUp: function (item) {
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
      logoUrl: function (item) {
        if (item.uid === this.id) {
          return item.user.headimgurl
        } else {
          return urls.UrlHttp + item.user.headimgurl
        }
      },
      hasUp: function (i) {
        if (i === this.current) {
          return true
        } else {
          return false
        }
      }
    },
    computed: {
      comment () {
        return this.$store.state.comment
      },
      id () {
        return JSON.parse(uni.getStorageSync('userInfo')).id
      }
    }
  }
</script>

<style lang="scss">
  .comment-detail {
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
    .footer {
      width: 100%;
      padding: 20upx;
      box-sizing: border-box;
      background-color: #fff;
      border-top: 1upx solid #eee;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 99;
      textarea {
        display: inline-block;
        width: 86%;
        height: 60upx;
        line-height: 30upx;
        font-size: 28upx;
        caret-color: #BD3037;
        padding: 10upx 20upx;
        box-sizing: border-box;
        background-color: #f0f0f0;
        border-radius: 10upx;
      }
      .submit {
        width: 14%;
        height: 60upx;
        display: inline-block;
        line-height: 60upx;
        font-size: 60upx;
        color: #BD3037;
        border: none;
        outline: none;
        padding: 0;
        background-color: rgba($color: #000000, $alpha: 0);
        text-align: center;
        &::after {
          border: none;
        }
      }
    }
  }
</style>
