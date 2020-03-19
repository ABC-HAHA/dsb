<template>
  <view class="content">
    <view class="item">
      <view class="class-item">
        <view class="item-content">
          <view v-for="(item,index) in lists" :key="index" @tap="goDetail(item.id)">
            <view class="content-top">
              <view class="left">
              	<image class="book-logo" :src="item.pic"></image>
              </view>
              <view class="right">
              	<view class="book-name">{{item.title}}</view>
                <view class="book-intro">{{item.content}}</view>
                <view class="book-info">
                	<text class="icon icon-person">{{item.author}}</text>
                  <text class="fr tag">{{item.hits}}人气</text>
                  <text class="fr tag">{{item.ctitle}}</text>
                </view>
              </view>
            </view>
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
        bottomList: [],
        lists: []
      }
    },
    onLoad() {
      let title = this.$store.state.pageTitle
      let type = this.$store.state.novelType
      uni.setNavigationBarTitle({
        title: title
      })
      uni.request({
        url: urls.HTTP + '/novel/novelbycategory',
        method: 'POST',
        data: {
          cid: type
        },
        success: (res) => {
          // console.log(res)
          this.lists = res.data
        }
      })
    },
    methods: {
      goDetail: function (id) {
        uni.navigateTo({
          url: '../common/book/storyDetail?id=' + id
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    .class-item {
      width: 100%;
      padding: 10upx 20upx;
      box-sizing: border-box;
      .item-title {
        overflow: hidden;
        padding: 18upx 0;
        border-bottom: 2upx solid #f0f0f0;
        .fl {
          font-size: 32upx;
          // font-weight: 600;
        }
        .fr {
          font-size: 24upx;
          color: #999;
          margin-top: 10upx;
        }
      }
      .item-content {
        padding: 20upx 0;
        .content-top {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          .left {
            margin-right: 20upx;
            .book-logo {
              width: 180upx;
              height: 220upx;
            }
          }
          .right {
            height: 220upx;
            flex: 1;
            .book-name {
              font-size: 32upx;
              // font-weight: 600;
              max-width: 470upx;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .book-intro {
              font-size: 28upx;
              color: #999;
              margin-top: 20upx;
              height: 80upx;
              line-height: 40upx;
              display: block;
              display: -webkit-box;
              max-width: 470upx;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .book-info {
              width: 470upx;
              height: 40upx;
              font-size: 28upx;
              margin-top: 20upx;
              line-height: 40upx;
              .icon-person {
                color: #999;
              }
              .tag {
                padding: 2upx 10upx;
                font-size: 24upx;
                background-color: #f0f0f0;
                color: #999;
                margin: 0 10upx;
                border-radius: 20upx;
              }
            }
          }
        }
        .content-bottom {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          .item {
            width: 23%;
            height: 280upx;
            image {
              width: 100%;
              height: 200upx;
            }
            .book-name {
              width: 100%;
              height: 80upx;
              line-height: 40upx;
              font-size: 30upx;
              display: block;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
</style>
