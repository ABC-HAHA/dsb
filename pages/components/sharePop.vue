<template>
  <view class="share-pop" v-show="showMe">
    <view class="mask" @tap="close"></view>
    <view class="pop-content">
      <view class="share-icon">
        <!-- <view class="item">
          <text class="icon icon-qq" @tap="shareToQQ"></text>
        </view> -->
        <view class="item" @tap="shareToWeixin('WXSceneSession', story)">
          <text class="icon icon-weixin"></text>
        </view>
        <view class="item" @tap="shareToWeixin('WXSenceTimeline', story)">
          <text class="icon icon-frends-circle"></text>
        </view>
      </view>
      <view class="cancle" @tap="close">取消</view>
    </view>
  </view>
</template>

<script>
  export default {
    props: ['story', 'showMe'],
    data () {
      return {
      }
    },
    methods: {
      // shareToQQ: function () {
      //   uni.share({
      //     provider: 'qq',
      //     type: 2,
      //     title: '点书吧',
      //     href: '/pages/common/login',
      //     success: (res) => {
      //       console.log(res)
      //     },
      //     fail: (err) => {
      //       console.log(err)
      //     }
      //   })
      // },
      shareToWeixin: function (scene, story) {
        if (!story) {
          uni.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album'],
            success: (res) => {
              uni.share({
                provider: 'weixin',
                type: 2,
                title: '点书吧',
                scene: scene,
                imageUrl: res.tempFilePaths[0],
                success: (res) => {
                  uni.showToast({
                    title: '分享成功！'
                  })
                }
              })
            }
          })
        } else {
          uni.share({
            provider: 'weixin',
            type: 0,
            title: '点书吧',
            scene: scene,
            imageUrl: story.pic,
            href: story.url,
            summary: story.content,
            success: (res) => {
              uni.showToast({
                title: '分享成功！'
              })
            }
          })
        }
      },
      close: function () {
        this.$emit('closeSharePop', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .share-pop {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 888;
    .mask {
      width: 100%;
      height: 100vh;
      background-color: rgba($color: #000000, $alpha: .3);
      position: fixed;
      left: 0;
      top: 0;
      z-index: 889;
    }
    .pop-content {
      width: 92%;
      box-sizing: border-box;
      position: absolute;
      z-index: 999;
      left: 4%;
      bottom: 20upx;
      background-color: #fff;
      border-radius: 8upx;
      .share-icon {
        width: 100%;
        height: 15vh;
        padding: 20upx 0 40upx;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        .item {
          width: 20%;
          text-align: center;
          .icon {
            font-size: 88upx;
            display: inline-block;
          }
          .icon-qq {
            color: #5eaade;
          }
          .icon-weixin {
            color: #50b674;
          }
          .icon-frends-circle {
            color: #50b674;
          }
        }
      }
      .cancle {
        width: 100%;
        height: 78upx;
        line-height: 78upx;
        text-align: center;
        border-top: 1upx solid #eee;
        color: #999;
      }
    }
  }
</style>
