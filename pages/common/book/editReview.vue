<template>
  <view class="edit-review">
    <!-- <view class="star">
      <uni-rate class="five-star" :value="star" size="54" @change="starChange"></uni-rate>
      <view class="text" v-if="star === 1">难看</view>
      <view class="text" v-if="star === 2">一般</view>
      <view class="text" v-if="star === 3">还行</view>
      <view class="text" v-if="star === 4">好看</view>
      <view class="text" v-if="star === 5">精彩</view>
    </view> -->
    <form @submit="sure">
      <view class="content">
        <!-- <input type="text" value="" placeholder="在这里添加标题"/> -->
        <textarea value="" name="content" maxlength="2000" placeholder="在这里输入评价内容" @input="getContent"/>
        <view class="num"><text>{{current}}/2000</text></view>
      </view>
      <button class="submit" form-type="submit">发布</button>
    </form>
  </view>
</template>

<script>
  import uniRate from '../../components/uni-rate.vue'
  import urls from '../../../utils/urls.js'
  export default {
    components: {uniRate},
    data () {
      return {
        star: 4,
        current: 0,
				isLogin: this.$store.state.isLogin
      }
    },
    methods: {
      starChange: function (v) {
        this.star = v.value
      },
      getContent: function (event) {
        var value = event.detail.value
        this.current = value.length
      },
      sure: function (e) {
				if(this.$store.state.isLogin==false){
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
				}else{
					let id = '';
					if(this.isLogin){
						id = JSON.parse(uni.getStorageSync('userInfo')).id
					}else{
						 id = 0
					}
					
					// var id = JSON.parse(uni.getStorageSync("userInfo")).id
					  var bookId = this.$store.state.bookId
					  var content = e.target.value.content
					  if (content) {
					    uni.request({
					      url: urls.HTTP + '/comment/addcomment',
					      method: 'POST',
					      data: {
					        uid: id,
					        novel_id: bookId,
					        content: content
					      },
					      success: (res) => {
					        // console.log(res)
					        if (res.data.code === 0) {
					          uni.showModal({
					            title: '提示',
					            content: res.data.error,
					            showCancel: false,
					            success: (res) => {
					              uni.redirectTo({
					                url: 'storyDetail'
					              })
					            }
					          })
					        } else {
					          uni.showToast({
					            title: res.data.error,
					            icon: 'none'
					          })
					        }
					      }
					    })
					  }
					}
				}
        // console.log(e)
    },
    computed: {
      rate () {
        return Math.floor(this.star * 2)
      }
    }
  }
</script>

<style lang="scss">
.edit-review {
  .star {
    text-align: center;
    margin-top: 40upx;
    .five-star {
      display: inline-block;
    }
    .text {
      width: 100%;
      font-size: 28upx;
      color: #999;
      padding: 20upx 0;
    }
  }
  .content {
    width: 96%;
    margin: 0 2%;
    font-size: 32upx;
    input {
      border-bottom: 1upx solid #efefef;
      padding: 10upx 20upx;
    }
    textarea {
      border: 1upx solid #eee;
      border-radius: 12upx;
      margin-top: 20upx;
      width: 100%;
      padding: 20upx;
      font-size: 30upx;
      box-sizing: border-box;
      :focus {
        caret-color: #BD3037;
      }
    }
    .num {
      width: 100%;
      text-align: right;
      color: #999;
    }
  }
  .submit {
    width: 280upx;
    height: 80upx;
    background-color: #BD3037;
    color: #fff;
    text-align: center;
    line-height: 80upx;
    border-radius: 50upx;
    border: none;
    margin: 30upx auto;
    font-size: 32upx;
  }
}
</style>
