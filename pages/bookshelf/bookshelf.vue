<template>
	<view class="bookshelf">
		<view class="h-22 bg-red"></view>
		<view class="my-header bg-red">
			<view class="input">
				<text class="icon icon-search"></text>
				<input type="text" value="找书" @focus="goSearch" />
			</view>
		</view>
		<view class="book-shelf">
			<view class="book-item" v-for="(item,index) in bookList" :key="index">
				<view class="item" @tap="enterBook(item)" @longpress="deleteBook(item)">
					<image class="book-bg" :src="item.book.pic"></image>
				</view>
			</view>
			<view class="book-item">
				<image @tap="add" class="book-bg" src="../../static/book-add.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import urls from '../../utils/urls.js'
	export default {
		data() {
			return {
				bookList: [],
				isLogin: this.$store.state.isLogin
			};
		},
		onShow() {
			let user = uni.getStorageSync('userInfo')
			let id = ''
			if (user) {
				id = JSON.parse(user).id
				console.log(id)
				uni.request({
					url: urls.HTTP + '/index/userbookshelf',
					method: 'POST',
					data: {
						id: id
					},
					success: (res) => {
						console.log(res)
						this.bookList = res.data.userinfo.data
					}
				})
			}
		},
		methods: {
			goSearch() {
				uni.navigateTo({
					url: 'searchBook'
				})
			},
			enterBook: function(item) {
				let id = item.chapter_id
				let key = item.chapter_key
				
				let id1 = '';
				if(this.isLogin){
					id1 = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id1 = 0
				}
				
				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				uni.request({
					url: urls.HTTP + '/novel/getnovelcontent',
					method: 'POST',
					data: {
						id: id,
						key: key,
						uid: id1
					},
					success: (res) => {
						// console.log('进入阅读', res)
						this.$store.dispatch('storyData', res.data)
						uni.navigateTo({
							url: '../common/book/story'
						})
					}
				})
			},
			add: function() {
				uni.switchTab({
					url: '../find/find'
				})
			},
			deleteBook: function(item) {
				let novelid = item.novel_id
				let id = '';
				if(this.isLogin){
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id = 0
				}
				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				uni.showModal({
					title: '提示',
					content: '是否删除本书？',
					success: (res) => {
						if (res.confirm) {
							uni.request({
								url: urls.HTTP + '/Bookshelf/delbookshelf',
								method: 'POST',
								data: {
									novelid: novelid,
									uid: id
								},
								success: (res) => {
									// console.log('delete', res)
									if (res.data.code === 0) {
										this.bookList = res.data.bookshelf.data
										uni.showToast({
											title: '删除成功'
										})
									} else {
										uni.showToast({
											title: res.data.code,
											icon: 'none'
										})
									}
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bookshelf {
		min-height: 100vh;

		.my-header {
			width: 100%;
			height: 66upx;
			padding: 12upx 0;

			.input {
				width: 60%;
				height: 66upx;
				border-radius: 28upx;
				color: #fff;
				position: relative;
				margin: 0 auto;

				input {
					width: 100%;
					border-radius: 40upx;
					padding-left: 68upx;
					height: 66upx;
					font-size: 32upx;
					line-height: 66upx;
					background-color: rgba($color: #ffffff, $alpha: 0.2);
					box-sizing: border-box;
				}

				.icon-search {
					width: 58upx;
					height: 66upx;
					line-height: 66upx;
					position: absolute;
					top: 0;
					left: 10upx;
					font-size: 40upx;
				}
			}
		}

		.book-shelf {
			width: 96%;
			margin: 40upx auto;
			display: flex;
			flex-flow: row wrap;
			justify-content: flex-start;

			.book-item {
				width: 33.33%;
				border-bottom: 8upx solid #e7e7e7;
				position: relative;
				box-sizing: border-box;
				padding-bottom: 30upx;
				margin-bottom: 30upx;

				.book-bg {
					width: 180upx;
					height: 240upx;
					margin-left: 30upx;
					box-shadow: 4upx 4upx 8upx #666;
				}

				.mark {
					width: 80upx;
					height: 30upx;
					position: absolute;
					top: 0;
					left: 30upx;
				}
			}
		}
	}
</style>
