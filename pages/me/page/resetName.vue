<template>
  <view class="reset-name">
    <form @submit="commit">
      <input type="text" name="name" v-model="userInfo.username" auto-focus/>
      <view class="span-gray">好名字可以让你的朋友更容易记住你</view>
      <view class="sure">
        <button :class="{btn_active: isCommit}" form-type="submit">修改</button>
      </view>
    </form>
  </view>
</template>

<script>
  import urls from '../../../utils/urls.js'
  export default {
    data () {
      return {
        // userInfo: {},
        isCommit: false
      }
    },
    methods: {
      commit: function (e) {
        // console.log(e.detail.value.name)
        this.isCommit = true
        var id = this.userInfo.id
        var name = e.detail.value.name
        // console.log(name)
        uni.request({
          url: urls.HTTP + '/user/edituser',
          method: 'POST',
          data: {
            id: id,
            username: name
          },
          success: (res) => {
            console.log(res)
            if (res.data.code === 0) {
              uni.showToast({
                title: '修改成功'
              })
              this.userInfo.username = res.data.user.username
              this.$store.dispatch('userInfo', this.userInfo)
              uni.redirectTo({
                url: 'userInfo'
              })
            } else {
              uni.showToast({
                title: res.data.error
              })
            }
          }
        })
      }
    },
    computed: {
      userInfo() {
        return this.$store.state.userInfo
      }
    },
  }
</script>

<style lang="scss" scoped>
  .reset-name {
    input {
      width: 90%;
      margin: 20upx auto 10upx;
      line-height: 60upx;
      border: none;
      border-bottom: 1upx solid #BD3037;
      caret-color: #BD3037;
      padding: 10upx 16upx;
      font-size: 32upx;
      color: #515151;
    }
    .span-gray {
      margin-left: 2%;
    }
    .sure {
      width: 240upx;
      margin: 40upx auto;
      border: none;
      border-radius: 100upx;
      button {
       height: 68upx;
       border-radius: 100upx;
       background-color: #d2666b;
       line-height: 68upx;
       text-align: center;
       font-size: 32upx;
       color: #fff;
      }
      .btn_active {
        background-color: #bd3037;
      }
    }
  }
</style>
