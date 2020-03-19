<template>
  <view class="chapters">
    <view class="chapters-list">
      <view class="item" v-for="(item, index) in chaptersList" :key="index" :class="{vipColor: !isFree(item.isfree)}" @tap="goStory(item)">
        <text>{{1+index}}、</text>
        <text>{{item.title}}</text>
        <text class="vip" v-if="!isFree(item.isfree)">付费</text>
      </view>
    </view>
  </view>
</template>

<script>
  import urls from '../../../utils/urls.js'
  export default {
    data() {
      return {
        chaptersList: [],
        story: {},
        currentPage: 1,
				isLogin: this.$store.state.isLogin
      }
    },
    onLoad() {
      var title = this.$store.state.pageTitle
      uni.setNavigationBarTitle({
        title: title
      })
      uni.showLoading({
        mask: true,
        title: '正在加载'
      })
      var bookId = this.$store.state.bookId
			
			let id = ''
			if(this.isLogin){
				id = JSON.parse(uni.getStorageSync('userInfo')).id
			}else{
				 id = 0
			}

      var pagenum = this.currentPage
      uni.request({
        url: urls.HTTP + '/novel/getchapterlist',
        method: 'POST',
        data: {
          id: bookId,
          uid: id,
          pagesize: 200,
          pagenum: pagenum
        },
        success: (res) => {
          this.chaptersList = res.data.chapter
          uni.hideLoading()
        },
				fail: () => {
				}
      })
    },
    onReachBottom () {
      uni.showLoading({
        mask: true,
        title: '正在加载'
      })
      var bookId = this.$store.state.bookId
      var uid = uni.getStorageSync('user').id
      this.currentPage++
      var pagenum = this.currentPage
      uni.request({
        url: urls.HTTP + '/novel/getchapterlist',
        method: 'POST',
        data: {
          id: bookId,
          uid: uid,
          pagesize: 200,
          pagenum: pagenum
        },
        success: (res) => {
          console.log(res);
          this.chaptersList = res.data.chapter
          uni.hideLoading()
          if (res.data.islast === 1) {
            uni.showToast({
              title: '已经到底啦',
              icon: 'none'
            })
          }
        }
      })
    },
    methods: {
      isFree(isfree) {
        if (isfree === 1) { // 1为收费
          return false
        } else {
          return true
        }
      },
      goStory(item) {
        var bookId = this.$store.state.story.source_id
        var key = item.id
				let id = '';
				if(this.isLogin){
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id = 0
				}
       
        uni.request({
          url: urls.HTTP + '/novel/getnovelcontent',
          method: 'POST',
          data: {
            id: bookId,
            key: key,
            uid: id
          },
          success: (res) => {
						
            // console.log(res)
            this.$store.dispatch('storyData', res.data)
            uni.redirectTo({
              url: 'story'
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .chapters {
    width: 100%;
    .chapters-list {
      width: 100%;
      margin: 0 auto;
      font-size: 28upx;
      .item {
        width: 100%;
        line-height: 60upx;
        box-sizing: border-box;
        padding: 10upx 40upx;
        border-bottom: 1upx solid #eee;
        .vip {
          display: inline-block;
          height: 26upx;
          line-height: 26upx;
          margin-top: 17upx;
          float: right;
          color: #BD3037;
          border: 1upx solid #BD3037;
          padding: 2upx 6upx;
          border-radius: 10upx;
          font-size: 24upx;
        }
      }
      .vipColor {
        color: #BD3037;
      }
    }
  }
</style>
