<template>
  <view class="my-focus">
  	<view class="focus-list" v-if="focusList.length > 0">
  		<view class="item" v-for="(item, index) in focusList" :key="index">
        <view class="logo">
          <image :src="logoUrl(item.headimgurl)" mode=""></image>
        </view>
        <view class="info" @tap="seeTa(item)">
        	<text class="h3">{{item.username}}</text>
          <view class="text-over-1">{{item.introduce}}</view>
        </view>
        <view class="btn">
        	<button :class="{active: isFocus}" @tap="focusTa(item.id)">取消关注</button>
        </view>
      </view>
  	</view>
    <view class="no-focus" v-else>
      <text class="icon icon-cry-face"></text>
      <view class="text">暂无关注</view>
    </view>
  </view>
</template>

<script>
  import urls from '../../utils/urls.js'
  export default {
    data () {
      return {
        focusList: [],
				isLogin: this.$store.state.isLogin
      }
    },
    onLoad() {
    	// var id = uni.getStorageSync('user').id
			// let id = JSON.parse(uni.getStorageSync('userInfo')).id
			let id = '';
			if(this.isLogin){
				id = JSON.parse(uni.getStorageSync('userInfo')).id
			}else{
				 id = 0
			}
      uni.request({
        url: urls.HTTP + '/user/userConcern',
        method: 'POST',
        data: {
          uid: id
        },
        success: (res) => {
          // console.log(res)
          if (res.data.code === 0) {
            this.focusList = res.data.datalist
          } else {
            this.focusList = []
          }
        }
      })
    },
    methods: {
      logoUrl: function (pic) {
        return urls.UrlHttp + pic
      },
      seeTa: function (item) {
        console.log(item)
        this.$store.dispatch('otherUser', item)
        uni.navigateTo({
          url: '../common/book/otherUserInfo'
        })
      },
      focusTa: function (id) {
        let fuid = id
        let uid = this.userInfo.id
        if (!this.isFocus) {
          uni.request({
            url: urls.HTTP + '/user/removefollow',
            method: 'POST',
            data: {
              fuid: fuid,
              uid: uid
            },
            success: (res) => {
              // console.log(res)
              if (res.data.code === 0) {
                this.focusList = res.data.datalist
                uni.showToast({
                  title: '取消成功',
                  icon: 'none'
                })
              } else {
                this.focusList = []
                uni.showToast({
                  title: '取消成功',
                  icon: 'none'
                })
              }
            }
          })
        }
      }
    },
    computed: {
      userInfo () {
        return this.$store.state.userInfo
      }
    }
  }
</script>

<style lang="scss" scoped>
.my-focus {
  .no-focus {
    width: 100%;
    margin-top: 30vh;
    text-align: center;
    .icon-cry-face {
      font-size: 88upx;
    }
    .text {
      width: 100%;
      font-size: 28upx;
      color: #999;
    }
  }
  .focus-list {
    width: 94%;
    margin: 0 auto;
    .item {
      width: 100%;
      padding: 20upx 0;
      border-bottom: 1upx solid #efefef;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      .logo {
        max-width: 25%;
        image {
          width: 120upx;
          height: 120upx;
          border-radius: 50%;
        }
      }
      .info {
        flex: 1;
        width: 50%;
        margin: 0 20upx;
        line-height: 48upx;
        color: #999;
        font-size: 28upx;
        .text-over-1 {
          width: 100%;
        }
      }
      .btn {
        max-width: 25%;
        text-align: center;
        button {
          display: inline-block;
          width: 100%;
          height: 60upx;
          line-height: 60upx;
          color: #fff;
          font-size: 28upx;
          background-color: #BD3037;
        }
        .active {
          background-color: #fff;
          border: 1upx solid #BD3037;
          color: #BD3037;
        }
      }
    }
  }
}
</style>
