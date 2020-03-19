<template>
	<view class="welfare">
		<view class="task-card">
			<view class="card-item" :class="{ on: isOne }" @tap="changeClass(0)"><text>新手任务</text></view>
			<view class="card-item" :class="{ on: !isOne }" @tap="changeClass(1)"><text>日常任务</text></view>
			<view class="active-line"><view class="slider" :animation="sliderAnim"></view></view>
		</view>
		<view class="task-content">
			<view class="item" v-for="(item, index) in taskList" :key="index">
				<text :class="item.icon" class="icon icon-big"></text>
				<view class="middle">
					<view class="h4 text-over-1">{{ item.title }}</view>
					<view class="span-gray">
						奖励：
						<text class="icon icon-small-money" v-if="item.gold > 0">{{ item.gold }}阅读币</text>
					</view>
				</view>
				<view class="no-finish" v-if="item.isreceive === 0" @tap="doIt(item)">{{ item.btntext }}</view>
				<view class="finished" v-if="item.isreceive === 1" @tap="receive(item)">领取</view>
				<view class="drew" v-if="item.isreceive === 2">已完成</view>
			</view>
		</view>
	</view>
</template>

<script>
import urls from '../../utils/urls.js';
export default {
	data() {
		return {
			current: 0,
			sliderAnim: {},
			taskList: [],
			id: '',
			isLogin: this.$store.state.isLogin
		};
	},
	onShow() {
		// let id = uni.getStorageSync('user').id;
		console.log(this.$store.state.isLogin);
		if (this.$store.state.isLogin == false) {
			// uni.showModal({
			// 	title: '提示',
			// 	content: '您还没有登录，是否登录？',
			// 	success: res => {
			// 		if (res.confirm) {
			// 			uni.navigateTo({
			// 				url: '../common/login'
			// 			});
			// 		}
			// 	}
			// });
		} else {
			let id = JSON.parse(uni.getStorageSync('userInfo')).id; // 字符串转对象  取id
			uni.request({
				url: urls.HTTP + '/usertask/newbietask',
				method: 'POST',
				data: {
					uid: id
				},
				success: res => {
					// console.log('新手任务', JSON.stringify(res.data.task))
					this.taskList = res.data.task;
				}
			});
		}
		// 创建一个动画实例
		var animation = uni.createAnimation({
			duration: 300,
			timingFunction: 'ease'
		});
		this.animation = animation;

		this.changeClass(0);
	},
	computed: {
		isOne() {
			if (this.current === 0) {
				return true;
			} else if (this.current === 1) {
				return false;
			}
		}
	},
	methods: {
		changeClass: function(n) {
			this.current = n;
			let id = '';
			if (this.isLogin) {
				id = JSON.parse(uni.getStorageSync('userInfo')).id;
			} else {
				id = 0;
			}
			let url = '/usertask/newbietask';
			if (n === 0) {
				this.animation.left(0).step();
				this.sliderAnim = this.animation.export();
				url = '/usertask/newbietask';
			} else {
				this.animation.left(100 + '%').step();
				this.sliderAnim = this.animation.export();
				url = '/usertask/dailytask';
			}
			uni.request({
				url: urls.HTTP + url,
				method: 'POST',
				data: {
					uid: id
				},
				success: res => {
					this.taskList = res.data.task;
				}
			});
		},
		receive: function(item) {
			let id = '';
			if (this.isLogin) {
				id = JSON.parse(uni.getStorageSync('userInfo')).id;
			} else {
				id = 0;
			}
			let tid = item.id;
			let type = item.type;
			uni.request({
				url: urls.HTTP + '/usertask/receivetask',
				method: 'POST',
				data: {
					uid: id,
					tid: tid,
					type: type
				},
				success: res => {
					// console.log('领取', res)
					if (res.data.code === 0) {
						this.taskList = res.data.task;
						uni.showToast({
							title: '领取成功！'
						});
					} else {
						uni.showToast({
							title: res.data.user,
							icon: 'none'
						});
					}
				}
			});
		},
		doIt: function(item) {
			let url = item.link;
			uni.navigateTo({
				url: url
			});
			uni.switchTab({
				url: url
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.welfare {
	.task-card {
		width: 100%;
		padding: 20upx 0;
		border-bottom: 1upx solid #cfcfcf;
		color: #666;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		.card-item {
			flex: 1;
			text-align: center;
			font-size: 32upx;
		}
		.on {
			color: #bd3037;
		}
		.active-line {
			width: 52%;
			height: 6upx;
			position: absolute;
			bottom: 0;
			left: 21%;
			z-index: 100;
			.slider {
				width: 10%;
				height: 6upx;
				position: absolute;
				left: 0;
				bottom: 0;
				background-color: #bd3037;
				z-index: 101;
			}
		}
	}
	.task-content {
		width: 100%;
		margin-top: 100upx;
		.item {
			width: 94%;
			margin: 0 auto;
			padding: 20upx 0;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1upx solid #f0f0f0;
			.icon-big {
				font-size: 56upx;
			}
			.middle {
				width: 68%;
				line-height: 44upx;
				padding: 0 20upx;
				.text-over-1 {
					width: 90%;
				}
				.span-gray {
					width: 90%;
				}
			}
			.no-finish {
				width: 120upx;
				height: 46upx;
				line-height: 46upx;
				text-align: center;
				border: 1upx solid #bd3037;
				border-radius: 40upx;
				color: #bd3037;
				font-size: 28upx;
			}
			.finished {
				width: 120upx;
				height: 48upx;
				line-height: 48upx;
				text-align: center;
				background-color: #bd3037;
				color: #fff;
				border-radius: 40upx;
				font-size: 28upx;
			}
			.drew {
				width: 120upx;
				height: 46upx;
				line-height: 46upx;
				text-align: center;
				border: 1upx solid #999;
				border-radius: 40upx;
				color: #999;
				font-size: 28upx;
			}
		}
	}
}
</style>
