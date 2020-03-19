<template>
	<view class="me">
		<view class="h-22 bg-red"></view>
		<view class="me-box" v-if="isLogin">
			<view class="head">
				<image src="../../static/lvbg2.png" class="head-bg"></image>
				<view class="logo"><image :src="imgUrl(userInfo.headimgurl)"></image></view>
				<view class="content">
					<text class="name">{{ userInfo.username }}</text>
					<view class="edit-input">
						<textarea class="intro text-over-2" :class="{ 'is-edit': isEdit }" :disabled="!isEdit" :value="userInfo.introduce" @blur="changeEdit" />
						<text class="icon icon-feedback" @tap="isEdit = true"></text>
					</view>
					<view class="dynamics">
						<navigator url="myFocus" class="item"><text>关注</text></navigator>
						<navigator open-type="switchTab" url="../bookshelf/bookshelf" class="item"><text>收藏</text></navigator>
						<navigator url="myComment" class="item"><text>评论</text></navigator>
						<navigator url="myThumbsup" class="item"><text>点赞</text></navigator>
					</view>
				</view>
				<navigator url="page/userInfo" class="right"><text class="icon icon-next"></text></navigator>
			</view>
			<view class="read-free">
				<view class="read-free_li" style="border-right:1upx solid #8F8F94 ;">
					<p class="c-red" style="height: 45upx;">{{ userInfo.gold }}</p>
					<p style="height: 45upx;">我的书币</p>
				</view>
				<view class="read-free_li" style="border-right:1upx solid #8F8F94 ;">
					<p style="height: 45upx;" class="c-red">{{ userInfo.free_reading_num }}/{{ userInfo.free_read_num }}</p>
					<p style="height: 45upx;">今日免费阅读</p>
				</view>
				<view class="read-free_li">
					<p style="height: 45upx;" class="c-red">{{ userInfo.read_time }}</p>
					<p style="height: 45upx;">今日阅读时间(分钟)</p>
				</view>
			</view>
			<view class="list" style="clear: all;">
				<navigator url="myWallet" class="item">
					<text class="icon icon-wallet"></text>
					<text>我的钱包</text>
					<text class="icon icon-next"></text>
				</navigator>
				<navigator url="recharge" class="item">
					<text class="icon icon-recharge"></text>
					<text>充值</text>
					<text class="icon icon-next"></text>
				</navigator>
				<navigator url="page/share" class="item">
					<text class="icon icon-recommend"></text>
					<text>推荐朋友</text>
					<text class="icon icon-next"></text>
				</navigator>
				<view class="space"></view>
				<navigator url="message" class="item">
					<text class="icon icon-message"></text>
					<text>消息通知</text>
					<text class="icon icon-next"></text>
				</navigator>
				<navigator url="feedback" class="item">
					<text class="icon icon-feedback"></text>
					<text>建议反馈</text>
					<text class="icon icon-next"></text>
				</navigator>
				<!-- #ifdef MP-WEIXIN -->
				<view class="item" @tap="clearStorage1">
					<text class="icon icon-clearStore"></text>
					<text>清除缓存</text>
					<text class="icon icon-next"></text>
				</view>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<view class="item" @tap="clearStorage">
					<text class="icon icon-clearStore"></text>
					<text>清除缓存</text>
					<text class="icon icon-next"></text>
				</view>
				<!-- #endif -->
				<view class="space"></view>
				<navigator url="reset" class="item">
					<text class="icon icon-reset"></text>
					<text>设置</text>
					<text class="icon icon-next"></text>
				</navigator>
				<view class="space"></view>
			</view>
		</view>

		<view class="no-login" v-else>
			<view class="head">
				<image src="../../static/lvbg2.png" class="head-bg"></image>
				<view class="logo" style="margin-top:42upx;"><image :src="imgUrl(userInfo.headimgurl)"></image></view>
				<view class="content"><view class="login" @tap="goLogin1">点击登录</view></view>
				<navigator @tap="goLogin1" class="right"><text class="icon icon-next"></text></navigator>
			</view>
			<view class="list">
				<navigator @tap="goLogin" class="item">
					<text class="icon icon-wallet"></text>
					<text>我的钱包</text>
					<text class="icon icon-next"></text>
				</navigator>
				<navigator @tap="goLogin" class="item">
					<text class="icon icon-recharge"></text>
					<text>充值</text>
					<text class="icon icon-next"></text>
				</navigator>
				<navigator @tap="goLogin" class="item">
					<text class="icon icon-recommend"></text>
					<text>推荐朋友</text>
					<text class="icon icon-next"></text>
				</navigator>
				<view class="space"></view>
				<navigator @tap="goLogin" class="item">
					<text class="icon icon-message"></text>
					<text>消息通知</text>
					<text class="icon icon-next"></text>
				</navigator>
				<navigator @tap="goLogin" class="item">
					<text class="icon icon-feedback"></text>
					<text>建议反馈</text>
					<text class="icon icon-next"></text>
				</navigator>
				<view class="item" @tap="clearStorage">
					<text class="icon icon-clearStore"></text>
					<text>清除缓存</text>
					<text class="icon icon-next"></text>
				</view>
				<view class="space"></view>
				<navigator url="reset" class="item">
					<text class="icon icon-reset"></text>
					<text>设置</text>
					<text class="icon icon-next"></text>
				</navigator>
				<view class="space"></view>
			</view>
		</view>
	</view>
</template>

<script>
import urls from '../../utils/urls.js';
export default {
	data() {
		return {
			isEdit: false
		};
	},
	onShow() {
		let id = JSON.parse(uni.getStorageSync('userInfo')).id;
		// let id = '';
		// if(this.isLogin){
		// 	id = JSON.parse(uni.getStorageSync('userInfo')).id
		// }else{
		// 	 id = 0
		// }
		uni.request({
			url: urls.HTTP + '/user/usertopinfo',
			method: 'POST',
			data: {
				id: id
			},
			success: res => {
				// console.log(res)
				this.$store.dispatch('userInfo', res.data.user);
				uni.setStorageSync('user', res.data.user);
			}
		});
	},
	methods: {
		changeEdit: function(e) {
			// this.userInfo.intro = e.detail.value
			this.isEdit = false;
			let id = JSON.parse(uni.getStorageSync('userInfo')).id;
			// let id = '';
			// if(this.isLogin){
			// 	id = JSON.parse(uni.getStorageSync('userInfo')).id
			// }else{
			// 	 id = 0
			// }
			uni.request({
				url: urls.HTTP + '/user/edituser',
				method: 'POST',
				data: {
					id: id,
					introduce: e.detail.value
				},
				success: res => {
					// console.log('个人简介', res)
					this.userInfo.intro = res.data.user.introduce;
				}
			});
		},
		clearStorage: function(e) {
			uni.showModal({
				title: '提示',
				content: '是否清除全部缓存？需要重新登录',
				success: res => {
					if (res.confirm) {
						uni.clearStorageSync();
						uni.reLaunch({
							url: '../common/login'
						});
						// uni.showToast({
						//   title: '全部清除啦'
						// })
					}
				}
			});
		},
		clearStorage1: function(e) {
			uni.showModal({
				title: '提示',
				content: '是否清除全部缓存？',
				success: res => {
					if (res.confirm) {
						uni.clearStorageSync();
						uni.navigateTo({
							url: '../common/welcome'
						});
					}
				}
			});
		},
		goLogin: function() {
			// #ifdef MP-WEIXIN
			if (!uni.getStorageSync('openid')) {
				this.showDialog = true;
			} else if (!JSON.parse(uni.getStorageSync('userInfo')).id) {
				uni.redirectTo({
					url: '../common/register'
				});
			}
			// #endif
			// #ifndef MP-WEIXIN
			uni.showModal({
				title: '提示',
				content: '您还没有登录，是否登录？',
				success: res => {
					if (res.confirm) {
						uni.navigateTo({
							url: '../common/login'
						});
					}
				}
			});

			// #endif
		},
		goLogin1() {
			uni.navigateTo({
				url: '../common/login'
			});
		},
		imgUrl: function(url) {
			return urls.UrlHttp + url;
		}
	},
	computed: {
		isLogin() {
			if (!this.$store.state.isLogin) {
				return false;
			} else {
				return true;
			}
		},
		userInfo() {
			return this.$store.state.userInfo;
		}
	}
};
</script>

<style lang="scss" scoped>
.me {
	width: 100%;
	overflow: hidden;
	.head {
		position: relative;
		z-index: 2;
		width: 94%;
		box-shadow: 2upx 0 4upx #999;
		border-radius: 20upx;
		color: #fff;
		font-size: 28upx;
		margin: 20upx auto;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		.head-bg {
			width: 100%;
			height: 360upx;
			position: absolute;
			z-index: -1;
		}
		.logo {
			text-align: center;
			image {
				width: 140upx;
				height: 140upx;
				border-radius: 50%;
				margin: 10upx;
				background-color: #fff;
				margin-top: 68upx;
			}
		}
		.right {
			width: 88upx;
			height: 360upx;
			line-height: 360upx;
			text-align: center;
			font-size: 56upx;
		}
		.content {
			flex: 1;
			.name {
				color: #000;
				font-size: 36upx;
				margin-top: 68upx;
				display: block;
			}
			.edit-input {
				position: relative;
				margin-top: 10upx;
				height: 72upx;
				.intro {
					font-size: 28upx;
					line-height: 36upx;
					width: 92%;
					height: 86upx;
				}
				.is-edit {
					// font-size: 28upx;
					border: 1upx solid #515151;
				}
				.icon-feedback {
					position: absolute;
					top: 4upx;
					right: 0;
				}
			}
			.dynamics {
				width: 100%;
				margin-top: 30upx;
				display: flex;
				flex-flow: row nowrap;
				justify-content: flex-start;
				.item {
					width: 25%;
					height: 80upx;
				}
			}
		}
	}
	.read-free {
		width: 94%;
		height: 120upx;
		margin: 0 auto;
		border-radius: 20upx;
		background-color: #f0f0f0;
		font-size: 25upx;
		text-align: center;
	}
	.read-free_li {
		width: 31.5%;
		float: left;
		margin-top: 15upx;
		text-align: center;
		isplay: inline-block;
		.c-red {
			font-size: 32upx;
			color: red;
			font-weight: 700;
		}
	}
	.list {
		width: 100%;
		margin-top: 20upx;
		.icon {
			color: #bd3037;
			font-size: 40upx;
			font-weight: 600;
			float: left;
			margin-right: 20upx;
		}
		.icon-next {
			float: right;
			font-size: 36upx;
			font-weight: 400;
		}
		.item {
			width: 94%;
			margin: 0 auto;
			font-size: 32upx;
			height: 80upx;
			line-height: 80upx;
			border-bottom: 1upx solid #f0f0f0;
		}
		.btn-weixin {
			padding: 0;
			text-align: left;
			border: none;
			background-color: #fff;
			&::after {
				border: none;
			}
		}
	}
	.space {
		width: 100%;
		height: 10upx;
		background-color: #efefef;
	}
	.no-login {
		width: 100%;
		.login {
			height: 360upx;
			line-height: 360upx;
			border: 1px solid rgba(0, 0, 0, 0);
			color: #fff;
			font-size: 22px;
			background: none;
			margin-left: 20px;
		}
	}
}
</style>
