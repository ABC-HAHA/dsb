<template>
	<view class="login">
		<image class="bg" src="../../static/redbg.png"></image>
		<image class="logo" src="../../static/logo.png"></image>
		<form class="form" @submit="submit">
			<view class="input">
				<input name="phone" :disabled="!showText" type="number" maxlength="11" placeholder="请输入手机号" @input="getPhone" />
			</view>
			<view class="input">
				<input name="code" maxlength="6" class="input-code" type="number" placeholder="请输入验证码" @blur="getIdenCode" />
				<text class="iden-code" @tap="getCode" v-if="showText">获取验证码</text>
				<text class="gray-code" v-else>{{second}}s后重新获取</text>
			</view>
			<view class="sure">
				<button form-type="submit" :loading="showLoading" :class="{btn_active: isSure}">登 录</button>
			</view>
			<image class="line" src="../../static/line.png"></image>
			<view class="other">
				<text class="icon icon-qq" @tap="qqLogin"></text>
				<text class="icon icon-weixin" @tap="wxLogin"></text>
			</view>
			<checkbox-group class="agree-check" @change="checkAgree" name="isAgree">
				<label>
					<checkbox value="true" :checked="isAgree" color="#BD3037" />已阅读并同意 <navigator class="a" url="userAgreement">《用户协议》</navigator>和
					<navigator class="a" url="userSecretProtect">《用户隐私保护政策》</navigator></label>
			</checkbox-group>
		</form>
	</view>
</template>

<script>
	import urls from '../../utils/urls.js'
	export default {
		data() {
			return {
				isAgree: true,
				isSure: false,
				second: 60,
				showText: true,
				phone: '',
				showLoading: false,
				cid:''  //个推id
			}
		},
		onLoad() {
			uni.hideLoading()
			this.cid = plus.push.getClientInfo().clientid
		},

		methods: {
			checkAgree: function(e) {
				if (e.detail.value.length > 0) {
					this.isAgree = true
				} else {
					this.isAgree = false
				}
			},
			getPhone: function(e) {
				this.phone = e.detail.value
			},
			getIdenCode: function(e) {
				if (e.detail.value.length >= 4) {
					this.isSure = true
					this.showText = true
					this.second = 60
				} else {
					uni.showToast({
						title: '请填写正确的验证码',
						icon: 'none'
					})
				}
			},
			getCode: function() {
				var reg = /^1[345678]\d{9}$/
				var phone = this.phone
				if (!reg.test(phone)) {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none'
					})
				} else {
					this.showText = false
					var interval = setInterval(() => {
						--this.second
					}, 1000)
					uni.request({
						url: urls.HTTP + '/user/getmcodenum',
						method: 'POST',
						data: {
							username: phone
						},
						success: (res) => {
							if (res.data.code === 0) {
								uni.showToast({
									title: res.data.error,
									icon: 'none'
								})
							} else {								
								uni.showToast({
									title: res.data.error,
									icon: 'none'
								})
							}
						}
					})
					setTimeout(() => {
						clearInterval(interval)
						this.second = 60
						this.showText = true
					}, 60000)
				}
			},
			more: function() {
				uni.switchTab({
					url: '../find/find'
				})
			},
			submit: function(e) {
				if (this.isAgree) {
					if (!e.detail.value.phone || !e.detail.value.code) {
						uni.showToast({
							title: '手机号或验证码不能为空',
							icon: 'none'
						})
					} else {
						this.showLoading = true
						uni.request({
							url: urls.HTTP + '/user/checkpost',
							method: 'POST',
							data: {
								mobile: e.detail.value.phone,
								code: e.detail.value.code,
								cid : this.cid
							},
							success: (res) => {
								if (res.data.code === 0) {
									this.showLoading = false
									uni.setStorageSync('user', res.data.user)
									uni.setStorage({
										key: 'userInfo',
										data: JSON.stringify(res.data.user), // 对象转字符串进行本地存储
										success: (res) => {
											console.log(res)
										}
									})
									// console.log(uni.getStorageSync('user'))
									// this.$store.dispatch('userInfo', res.data.user)
									this.$store.dispatch('isLogin', true)
									if (res.data.user.sex !== 0) {
										uni.switchTab({
											url: '../find/find'
										})
									} else {
										uni.redirectTo({
											url: 'chooseSex'
										})
									}
								} else {
									uni.showToast({
										title: res.data.error,
										icon: 'none'
									})
								}
							}
						})
					}
				} else {
					uni.showToast({
						title: '请先阅读协议并同意',
						icon: 'none'
					})
				}
			},
			wxLogin: function() {

				uni.showLoading({
					title: '正在登录...',
					mask: true
				})
				uni.login({
					provider: 'weixin',
					success: (res) => {
						uni.getUserInfo({
							provider: 'weixin',
							success: (infoRes) => {
								//Console.log(infoRes.userInfo);
								uni.setStorageSync('openid', infoRes.userInfo.unionId)
								uni.request({
									url: urls.HTTP + '/callback/appwxlogin',
									method: 'POST',
									data: {
										country: infoRes.userInfo.country,
										nickname: infoRes.userInfo.nickName,
										gender: infoRes.userInfo.gender,
										province: infoRes.userInfo.province,
										city: infoRes.userInfo.city,
										headimgurl: infoRes.userInfo.avatarUrl,
										unionid: infoRes.userInfo.unionId
									},
									success: (res) => {										
										uni.hideLoading()
										if (res.data.code === 0) {
											this.$store.dispatch('userInfo', res.data.user)
											uni.setStorageSync('user', res.data.user)
											uni.setStorage({
												key: 'userInfo',
												data: JSON.stringify(res.data.user), // 对象转字符串进行本地存储
												success: (res) => {
													console.log(res)
												}
											})
											this.$store.dispatch('isLogin', true)
											if (res.data.user.sex !== 0) {
												uni.switchTab({
													url: '../find/find'
												})
											} else {
												uni.redirectTo({
													url: 'chooseSex'
												})
											}
										} else if (res.data.code === 1) {
											this.$store.dispatch('loginType', 1)
											uni.redirectTo({
												url: 'register'
											})
										}
									}
								})
							}
						})
					}
				})
			},
			qqLogin: function() {
				uni.login({
					provider: 'qq',
					success: (loginRes) => {
						uni.getUserInfo({
							provider: 'qq',
							success: (infoRes) => {
								uni.setStorageSync('qqopenid', infoRes.userInfo.openId)
								uni.request({
									url: urls.HTTP + '/callback/appqqlogin',
									method: 'POST',
									data: {
										nickname: infoRes.userInfo.nickName,
										gender: infoRes.userInfo.gender,
										province: infoRes.userInfo.province,
										city: infoRes.userInfo.city,
										year: infoRes.userInfo.year,
										headimgurl: infoRes.userInfo.headimgurl,
										openid: infoRes.userInfo.openId
									},
									success: (res) => {
										// console.log('登录', res)
										if (res.data.code === 0) {
											this.$store.dispatch('userInfo', res.data.user)
											uni.setStorageSync('user', res.data.user)
											uni.setStorage({
												key: 'userInfo',
												data: JSON.stringify(res.data.user), // 对象转字符串进行本地存储
												success: (res) => {
													console.log(res)
												}
											})
											// console.log(uni.getStorageSync('user'))
											// this.$store.dispatch('userInfo', res.data.user)
											this.$store.dispatch('isLogin', true)
											if (res.data.user.sex !== 0) {
												uni.switchTab({
													url: '../find/find'
												})
											} else {
												uni.redirectTo({
													url: 'chooseSex'
												})
											}
										} else if (res.data.code === 1) {
											this.$store.dispatch('loginType', 2)
											uni.redirectTo({
												url: 'register'
											})
										}
									}
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		width: 100%;

		.bg {
			width: 100%;
			height: 100vh;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
		}

		.logo {
			width: 260upx;
			height: 260upx;
			display: block;
			margin: 20vh auto 80upx;
		}

		.input {
			width: 88%;
			margin: 16upx auto;
			font-size: 24upx;
			position: relative;
			z-index: 7;

			input {
				width: 100%;
				background-color: rgba(237, 237, 240, .5);
				height: 80upx;
				line-height: 80upx;
				padding: 0 16upx;
				border-radius: 18upx;
				box-sizing: border-box;
				position: relative;
				z-index: 10;

				&:focus {
					caret-color: #bd3037;
				}
			}

			.input-code {
				width: 74%;
				border-radius: 18upx 0 0 18upx;
				padding-right: 0;
			}

			.iden-code {
				position: absolute;
				width: 26%;
				height: 80upx;
				line-height: 80upx;
				border-radius: 0 18upx 18upx 0;
				text-align: center;
				top: 0;
				right: 0;
				color: #bd3037;
				z-index: 99;
				background-color: rgba(237, 237, 240, .5);
			}

			.gray-code {
				position: absolute;
				width: 26%;
				height: 80upx;
				line-height: 80upx;
				border-radius: 0 18upx 18upx 0;
				text-align: center;
				top: 0;
				right: 0;
				color: #999;
				z-index: 99;
				background-color: rgba(237, 237, 240, .5);
			}
		}

		.sure {
			width: 88%;
			margin: 40upx auto;
			border: none;
			border-radius: 100upx;

			button {
				height: 88upx;
				border-radius: 100upx;
				background-color: #d2666b;
				line-height: 88upx;
				text-align: center;
				color: #fff;
			}

			.btn_active {
				background-color: #bd3037;
			}
		}

		.line {
			display: block;
			width: 80%;
			height: 22upx;
			margin: 20upx auto;
		}

		.other {
			width: 100%;
			height: 88upx;
			font-size: 64upx;
			text-align: center;

			.icon {
				margin: 0 30upx;
				color: #bd3037;
			}
		}

		.agree-check {
			width: 100%;
			text-align: center;
			font-size: 24upx;
			margin-top: 20upx;
			color: #999;

			.a {
				display: inline-block;
			}
		}

		.more {
			width: 100%;
			text-align: center;
			color: #bd3037;
			font-size: 24upx;
			margin-top: 40upx;
		}
	}
</style>
