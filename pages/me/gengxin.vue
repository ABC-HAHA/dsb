<script src="../../utils/mui.min.js"></script>
<template>
	<view class="reset">
		<view class="content">

			<view class="item">
				<text class="fl">当前版本</text>
				<text class="fr">1.0.0</text>
			</view>
			<view class="item">
				<text class="fl">最新版本</text>
				<text class="fr">{{renew.idnum}}</text>
			</view>
		</view>
		<view class="content">
			<view class="xinxi" v-if="renew.renew === 1">
				更新内容：<br />
				{{renew.content}}
			</view>
			<view class="anniu" @click="clickTest" v-if="renew.renew === 1">
				{{xiazai}}{{jindu}}
			</view>
			<view class="tip" v-if="renew.renew === 0">
				当前版本已是最新版本
			</view>

		</view>
	</view>
</template>

<script>
	import urls from '../../utils/urls.js'
	export default {
		data() {
			return {
				renew: {},
				xiazai: '点击更新',
				jindu:'',
				version: '1.0.0',
				isacceptnews: "",
				isLogin: this.$store.state.isLogin,
			}
		},
		onLoad() {

			var banben = "1.0.0";

			uni.request({
				url: urls.HTTP + '/index/getbanbennew',
				method: 'POST',
				data: {
					banben: banben,
				},
				success: (res) => {
					this.renew = res.data.renew
					if (res.data.code == 0) {
						this.xiazai = 点击更新;

					}

				}
			})
		},
		methods: {
			clickTest: function(e) {
				var that = this
				uni.request({
					url: urls.HTTP + '/index/getnewurl',
					method: 'POST',
					data: {},
					success: (res) => {
						this.xiazai = '下载中...';
						const downloadTask = uni.downloadFile({
							url: res.data, 
							success: function(res) {
								if (res.statusCode === 200) {
									that.xiazai = '下载完成';
									that.jindu = "";
									plus.runtime.install(res.tempFilePath, {
										// force: false
									}, function() {
										//安装成功
										plus.runtime.restart();
									}, function(e) {
										//安装失败
									});

								}
							}
						});
						downloadTask.onProgressUpdate((res) => {
							that.jindu = res.progress+'%';
							console.log('下载进度' + res.progress);
							// console.log('已经下载的数据长度' + res.totalBytesWritten);
							// console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);

						});
						//--------默默来一条分割线---------

						// uni.showModal({ //提醒用户更新  
						//                  title: "更新提示",  
						//                  content: '',  
						//                  success: (res) => {  
						//                      if (res.confirm) {  
						//                          plus.runtime.openURL(res.data);  
						//                      }  
						//                  }  
						//              })
					}
				})
			},

		},
		computed: {


		}
	}
</script>

<style lang="scss" scoped>
	.reset {
		.content {
			.item {
				width: 100%;
				line-height: 64upx;
				padding: 16upx 30upx;
				box-sizing: border-box;
				overflow: hidden;
				font-size: 32upx;
				color: #515151;
				border-bottom: 1upx solid #ccc;

				image {
					width: 64upx;
					height: 64upx;
					border-radius: 50%;
					margin-right: 20upx;
				}

				.switch {
					transform: scale(.8, .7);
				}
			}

			.xinxi {
				width: 100%;
				line-height: 100upx;

			}

			.anniu {
				width: 100%;
				line-height: 100upx;
				height: 100upx;
				text-align: center;
			}

			.tip {
				width: 100%;
				line-height: 100upx;
				height: 100upx;
				text-align: center;
			}
		}
	}
</style>
