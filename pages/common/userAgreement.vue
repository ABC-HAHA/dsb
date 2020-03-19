<template>
  <view class="user-agreement">
    <view class="content">
      <rich-text :nodes="content"></rich-text>
    </view>
  </view>
</template>

<script>
  import urls from '../../utils/urls.js'
  export default {
    data () {
      return {
        content: ''
      }
    },
    onLoad() {
      uni.request({
        url: urls.HTTP + '/index/userAgreement',
        method: 'POST',
        success: (res) => {
          // console.log(res)
          this.content = res.data
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .user-agreement {
    width: 100%;
    .content {
      width: 96%;
      margin: 20upx auto;
      font-size: 28upx;
      color: #515151;
      word-break: break-all; // 防止文本不换行
      text-indent: 2em;
    }
  }
</style>
