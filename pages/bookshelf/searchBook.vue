<template>
  <view class="search-book">
    <view class="h-22 bg-red"></view>
    <view class="header">
      <navigator class="back" open-type="navigateBack">
        <text class="icon icon-back"></text>
      </navigator>
      <!-- #ifdef MP-WEIXIN -->
      <text class="c-red" @tap="search">搜索</text>
      <input
      type="text"
      v-model="content"
      @input="getValue"
      :placeholder="ph"
      placeholder-style="color: #aaa; font-size: 14px;"/>
      <!-- #endif -->
      <!-- #ifndef MP-WEIXIN -->
      <input
      type="text"
      v-model="content"
      @input="getValue"
      :placeholder="ph"
      placeholder-style="color: #aaa; font-size: 14px;"/>
      <text class="c-red" @tap="search">搜索</text>
      <!-- #endif -->
    </view>
    <scroll-view scroll-y="true" class="select" v-if="selectList.length > 0">
      <text
      class="item text-over-1"
      v-for="(item, index) in selectList"
      :key="index"
      @tap="goDetail(item)">
      {{item.title}}
      </text>
    </scroll-view>
    <view class="content">
      <view class="content-item">
        <view class="title">
          <text>搜索历史</text>
          <view class="fr clear" @tap="clearHistory">
            <text>清除历史</text>
            <text class="icon icon-refresh"></text>
          </view>
        </view>
        <view class="item" v-for="(item, index) in history" :key="index" @tap="goDetail(item)">
          <text class="fl icon icon-history"></text>
          <text class="fl">{{item.title}}</text>
        </view>
      </view>
			
			<view class="content-item1">
				<view class="Title">
				  <text>热门搜索</text>
				</view>
				<view class="hot">
					<view class="hotOne" v-for="(hot,hotindex) in hotsearch" :key="hotindex" @tap="goDetails(hot.id)">
						<text class="TextOne">{{hotindex+1}}</text>
						<text class="TextTwo">{{hot.title}}</text>
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
        content: '',
        ph: '搜索书籍名称、作者名',
        selectList: [],
        history: [],
				hotsearch:[]
      }
    },
    onLoad() {
      if (uni.getStorageSync('history')) {
        this.history = uni.getStorageSync('history')
      }
			
			uni.request({
			  url: urls.HTTP + '/index/hotsearch',
			  method: 'POST',
			  success: (res) => {
			    var arr = []
			    var list = res.data.hotsearch
			    //console.log(list);
			    for (var i = 0; i < list.length; i++) {
			    	var obj = {
							id:list[i].novelid,
			    		title: list[i].title,
			    	}
			    	arr.push(obj)
			    }
			    this.hotsearch = arr
			    // console.log(this.hotsearch);
			  }
			})
    },
    methods: {
      search: function () {
				uni.navigateTo({
					url:"search?content="+this.content
				})
        // console.log(this.selectList)
      //   if (this.selectList.length > 0) {
      //     let arr = this.history
      //     arr.push(this.selectList[0])
      //     this.history = arr
      //     uni.setStorageSync('history', arr)
      //     this.$store.dispatch('history', arr)
      //     this.$store.dispatch('bookId', this.selectList[0].id)
      //     uni.navigateTo({
      //       // url: '../common/book/storyDetail?id='+this.$store.state.bookId
						// url:"search?content="+this.content
      //     })
      //   } else {
      //     uni.showToast({
      //       title: '抱歉，没有你要搜索的书籍',
      //       icon: 'none'
      //     })
      //   }
      },
      goDetail: function (item) {
        console.log(this.history)
        let arr = this.history
        arr.push(item)
        this.history = arr
				console.log(item)
        uni.setStorageSync('history', arr)
        this.$store.dispatch('history', arr)
        this.$store.dispatch('bookId', item.id)
        uni.navigateTo({
          url: '../common/book/storyDetail?id='+this.$store.state.bookId
        })
      },
			goDetails: function (id) {
			  this.$store.dispatch('bookId', id)
			  uni.navigateTo({
			    url: '../common/book/storyDetail?id=' + id
			  })
			},
      getValue: function (e) {
        uni.request({
          url: urls.HTTP + '/index/searchnovel',
          method: 'POST',
          data: {
            keyword: this.content
          },
          success: (res) => {
            console.log(res)
            this.selectList = res.data
          }
        })
      },
      clearHistory: function () {
        uni.showModal({
          title: '提示',
          content: '是否清空所有历史记录？',
          success: (res) => {
            if (res.confirm) {
              this.history = []
              uni.removeStorageSync('history')
              uni.showToast({
                title: '删除成功',
                icon: 'none'
              })
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-book {
    width: 100%;
    height: 100vh;
    background-color: #f9f9f9;
    position: relative;
    z-index: 1;
    .header {
      width: 100%;
      height: 88upx;
      line-height: 88upx;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      font-size: 32upx;
      background-color: #fff;
      border-bottom: 1upx solid #eee;
      box-sizing: border-box;
      .back {
        margin: 0 20upx;
      }
      input {
        flex: 1;
        background-color: #efefef;
        border-radius: 16upx;
        height: 66upx;
        line-clamp: 66upx;
        padding: 0 20upx;
        margin-left: 20upx;
        margin-right: 20upx;
        color: #666;
      }
    }
    .select {
      position: absolute;
      top: 132upx;
      left: 0;
      z-index: 99;
      width: 100%;
      min-height: 100vh;
      background-color: #fff;
      .item {
        display: block;
        width: 94%;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 20upx;
        font-size: 32upx;
        color: #666;
        border-bottom: 1upx solid #eee;
      }
    }
    .content {
      width: 100%;
      .title {
        width: 94%;
        margin: 0 auto;
        font-size: 30upx;
        color: #999;
        line-height: 80upx;
        border-bottom: 1upx solid #eee;
        .clear {
          display: inline-block;
          overflow: hidden;
          font-size: 26upx;
          .icon-refresh {
            margin-left: 10upx;
          }
        }
      }
			.Title{
				width: 94%;
				margin: 0 auto;
				font-size: 30upx;
				color: #999;
				line-height: 80upx;
			}
			.hot{
				width:90%;
				margin:0 auto;
				.hotOne{
					width:50%;
					float:left;
					font-size: 30upx;
					color: #999;
					display:flex;
					justify-content:space-between;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					text{
						display:inline-block;
						margin-top:10px;
					}
					.TextOne{
						text-align:center;
						color:#fff;
						background:#ccc;
						width:18px;
						height:18px;
						text-align:center;
						line-height:18px;
					}
					.TextTwo{
						width:85%;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
				}
				.hotOne:nth-child(1) .TextOne{
					background:#FF4342;
				}
				.hotOne:nth-child(2) .TextOne{
					background:#FD9948;
				}
				.hotOne:nth-child(3) .TextOne{
					background:#FFCD01;
				}
			}
      .item {
        width: 94%;
        margin: 0 auto;
        overflow: hidden;
        padding: 10upx 0;
        border-bottom: 1upx solid #eee;
        font-size: 28upx;
        color: #666;
        line-height: 60upx;
      }
    }
  }
</style>
