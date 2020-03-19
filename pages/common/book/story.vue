<template>
	<view class="story">
		<view v-if="showHF" class="header">
			<navigator open-type="navigateBack">
				<text class="icon icon-back"></text>
			</navigator>

			<!-- #ifdef MP-WEIXIN -->
			<!-- <text class="fl icon icon-star-circle"></text> -->
			<text class="fl icon icon-download" @tap="download"></text>
			<text class="fl icon icon-more-vertical" @tap="showMore"></text>
			<!-- #endif -->

			<!-- #ifndef MP-WEIXIN -->
			<text class="fr icon icon-more-vertical" @tap="showMore"></text>
			<text class="fr icon icon-download" @tap="download"></text>
			<!-- <text class="fr icon icon-star-circle"></text> -->
			<!-- #endif -->

			<view class="more-icon more-lr" v-if="moreIsShow">
				<navigator class="more-item" open-type="switchTab" url="../../find/find">
					<text class="icon icon-book-city"></text>
					<text class="fl">去书城</text>
				</navigator>
				<view class="more-item" @tap="goDetail">
					<text class="icon icon-book"></text>
					<text class="fl">书籍详情</text>
				</view>
				<!-- #ifdef MP-WEIXIN -->
				<view class="more-item" @tap="shareInfo">
					<text class="icon icon-share" @tap="shareInfo"></text>
					<button class="fl mp-share" open-type="share" @tap="shareInfo">分享</button>
				</view> 
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<view class="more-item" @tap="shareInfo">
					<text class="icon icon-share"></text>
					<text class="fl">分享</text>
				</view>
				<!-- #endif -->
			</view>
		</view>
		<!-- <share-pop :showMe="shareShow" @closeSharePop="closeSP" :story="shareInfo"></share-pop> -->
		<view class="content">
			<view class="title-text">{{storyData.title}}</view>
			<view class="content-text">
				<rich-text id="data" :nodes="contentData"></rich-text>
				<view class="btn-box" v-if="!showBuyBtn">
					<text class="btn1 prev" @tap="goPrev">上一章</text>
					<text class="btn1 next" @tap="goNext">下一章</text>
				</view>
				<view class="is-buy" v-if="showBuyBtn">
					<view class="balance">该章节为收费章节，请点击购买继续阅读</view>
					<view class="price">价格：<text>{{storyData.price}}</text>书币/章<text class="c-red">（已购章节不扣费）</text></view>
					<view class="balance">余额：<text>{{storyData.gold}}</text>书币</view>
					<view class="btn-buy" @tap="buyIt">购买</view>
				</view>
			</view>

			<view class="menu-box" :animation="animMenu">
				<view class="right" @touchstart="menuStart" @touchmove="menuMove" @touchend="menuEnd"></view>
				<view class="menu">
					<view class="title text-over-1">{{story.title}}</view>
					<view class="info">
						<text class="c-red" style="margin-right: 20upx;">{{story.serialize_text}}</text>
						<text v-if="story.serialize === 0">{{updateTime}}前更新</text>
					</view>
					<scroll-view scroll-y="true" class="content-menu" @scrolltolower="moreChapter">
						<view class="menu-item" v-for="(item, index) in chaptersList" :key="index" @tap="goChapter(item)">
							<view class="chapter text-over-1" :class="[{current: item.id === storyData.id ? true : false}, {color_gray: item.isfree === 1}]">
								<text>{{1 + index}}、</text>
								<text>{{item.title}}</text>
							</view>
							<text class="payment" v-if="item.isfree === 1">(付费章节)</text>
						</view>
					</scroll-view>
					<view class="menu-download" @tap="download">
						<text class="down-text">下载免费章节({{story.free_reading}}章)</text>
					</view>
				</view>
			</view>
			<view class="btn-center" @tap="centerShow"></view>
		</view>
		<recharge-pop :showRecharge="rechargeShow" @closeRechargePop="closeRP" :story="storyData" :list="lists"></recharge-pop>

		<view v-if="showHF" class="footer">

			<view class="footer-item" @tap="showMenu">
				<text class="icon icon-menu"></text>
				<view>目录</view>
			</view>
			<view class="footer-item" @tap="goPrev">
				<text class="icon icon-prev-step"></text>
				<view>上一章</view>
			</view>
			<view class="footer-item" @tap="goNext">
				<text class="icon icon-next-step"></text>
				<view>下一章</view>
			</view>
			<view class="footer-item" @tap="goComment">
				<text class="icon icon-comment"></text>
				<view>评论</view>
			</view>
		</view>
	</view>
</template>

<script>
	import urls from '../../../utils/urls.js'
	import sharePop from '../../components/sharePop.vue'
	import rechargePop from '../../components/rechargePop.vue'
	import share from "../../../utils/share.js";
	export default {
		components: {
			sharePop,
			rechargePop
		},
		data() {
			return {
				animationHeader: {},
				animTxt: {},
				animMenu: {},
				moreIsShow: false,
				showHF: false,
				story: {},
				rechargeShow: false,
				isMenuShow: false,
				shareShow: false, // 分享界面
				curChapter: 1, // 章节列表分页---当前页
				chaptersList: [], // 章节列表
				menuX: 0,
				menuEndX: 0,
				menu_x: 0,
				// shareInfo: {},
				showBuyBtn: false,
				lists: [], // 充值金额列表
				share_url: '',
				share_title: '',
				share_content: '',
				isLogin: this.$store.state.isLogin,
				"second": 0, //计时器
			}
		},
		onShareAppMessage(res) {
			let novelid = this.storyData.source_id
			let title = this.storyData.ncontent
			let imageUrl = this.storyData.pic
			let url = this.storyData.url
			return {
				title: title,
				path: '/pages/common/book/storyDetail?id=' + novelid,
				imageUrl: imageUrl
			}
		},
		onLoad() {
			let id = this.$store.state.bookId
			var ids = '';
			if (this.isLogin) {
				var
					ids = JSON.parse(uni.getStorageSync('userInfo')).id
			} else {
				ids = 0
			}
			uni.request({
				url: urls.HTTP + '/novel/getnovel',
				method: 'POST',
				data: {
					novelid: id,
					uid: ids
				},
				success: (res) => {
					// console.log('书籍详情', res.data)
					this.story = res.data.novel[0]
					this.share_url = this.story.url,
					this.share_title = this.story.title,
					this.share_content = this.story.ncontent,
					this.comment = res.data.comment
					this.comments = res.data.comment.slice(0, 3)
					this.other = res.data.othernovel
					this.others = res.data.othernovel.slice(0, 4)
					this.similar = res.data.similarnovel
					this.similars = res.data.similarnovel.slice(0, 4)
					this.$store.dispatch('comments', res.data.comment)
					this.$store.dispatch('story', this.story)
				}
			})



			if (this.$store.state.storyData.isbuy === 0) {
				this.showBuyBtn = true
			}
			uni.request({
				url: urls.HTTP + '/Generalize/moneylist',
				method: 'POST',
				success: (res) => {
					// console.log(res)
					this.lists = res.data.money

				}
			});
			this.timer = setInterval(() => {
				this.second = Number(this.second) + 1;
				//console.log(this.second);
				if(this.v_time == 9){  //开始验证
				var ti = Date.parse(this.scroll_time) - Date.parse(this.start_time)
				   if(ti < this.old_time){
					 clearInterval(this.timer);   
				   }  
				}
				
				//console.log(this.second);
				if(this.v_time == 9){  //开始验证
				var ti = Date.parse(this.scroll_time) - Date.parse(this.start_time)
				   if(ti < this.old_time){
					 clearInterval(this.timer);   
				   }  
				}
			}, 1000)
		
		},
		onShow() {

			// var animation = uni.createAnimation({
			//   duration: 1000
			// })
			// this.animation = animation
			let id = this.$store.state.bookId

			let id1 = '';
			if (this.isLogin) {
				id1 = JSON.parse(uni.getStorageSync('userInfo')).id
			} else {
				id1 = 0
			}

			// let uid = JSON.parse(uni.getStorageSync("userInfo")).id
			// let user = uni.getStorageSync("userInfo");
			// let uid =""
			// if(user){
			// 	uid=JSON.parse(user).id
			// }
			// console.log(id)
			uni.request({
				url: urls.HTTP + '/novel/getnovel',
				method: 'POST',
				data: {
					novelid: id,
					uid: id1
				},
				success: (res) => {
					// console.log('书籍详情', res.data)
					this.story = res.data.novel[0]
					this.comment = res.data.comment
					this.comments = res.data.comment.slice(0, 3)
					this.other = res.data.othernovel
					this.others = res.data.othernovel.slice(0, 4)
					this.similar = res.data.similarnovel
					this.similars = res.data.similarnovel.slice(0, 4)
					this.$store.dispatch('comments', res.data.comment)
					this.$store.dispatch('story', this.story)
				}
			})



			var animation = uni.createAnimation({
				duration: 500,
				timingFunction: 'ease'
			})
			this.animation = animation
		},

		//监听滚动
		/**
		 *  记录进入页面时间 start_time  计时器开始
		 *  计时器中每5秒判断  scroll_time - start_time 是否大于 old_time 然后赋值给 old_time   如果大于继续计时 否则暂停
		 */
		onPageScroll(e) {
			// console.log(e);

		},
		//离开当前页面后执行
		onUnload:function(){  
			if(this.timer) {  
				clearInterval(this.timer);  
				this.timer = null;  
			}
			if (this.isLogin) {
				var id = JSON.parse(uni.getStorageSync('userInfo')).id
				uni.request({
					url: urls.HTTP + '/novel/getreadtime',
					method: 'POST',
					data: {
						uid: id,
						time: this.second,
					},
					success: (res) => {
						// console.log(res)
					}
				})
			} 
			
		},
		onBackPress() {
			//监听back键，关闭弹出菜单
			if (this.shareObj.shareMenu.isVisible()) {
				this.shareObj.shareMenu.hide();
				this.shareObj.alphaBg.hide();
				return true
			}
		},
		onReachBottom() {
			console.log('这是触底加载')
			this.goNext()
			console.log('触底加载完毕')
		},
		methods: {
			shareInfo() {
				let shareInfo = {
					href: this.share_url,
					title: this.share_title,
					desc: this.share_content					
				};
				let shareList = [{
						icon: "/static/sharemenu/wx.png",
						text: "微信好友",
					},
					{
						icon: "/static/sharemenu/pyq.png",
						text: "朋友圈"
					},
					// {
					// 	icon: "/static/sharemenu/weibo.png",
					// 	text: "微博"
					// },
					{
						icon: "/static/sharemenu/qq.png",
						text: "QQ"
					},
					{
						icon: "/static/sharemenu/copy.png",
						text: "复制"
					},
					{
						icon: "/static/sharemenu/more.png",
						text: "更多"
					},
				];
				this.shareObj = share(shareInfo, shareList, function(index) {
					console.log("点击按钮的序号: " + index);
					let shareObj = {
						href: shareInfo.href || "",
						title: shareInfo.title || "",
						summary: shareInfo.desc || "",
						success: (res) => {
							let user = uni.getStorageSync("userInfo");
							let uid = ""
							if (user) {
								uid = JSON.parse(user).id
							}else{
								uid=0
							}
							uni.request({
								url: urls.HTTP + '/share/novelshare',
								method: 'POST',
								data: {
									uid: uid
								},
								success: (res) => {
									//console.log(res)
								}
							})
							console.log("success:" + JSON.stringify(res));
						},
						fail: (err) => {
							console.log("fail:" + JSON.stringify(err));
						}
					};
					switch (index) {
						case 0:
							shareObj.provider = "weixin";
							shareObj.scene = "WXSceneSession";
							shareObj.type = 0;
							shareObj.imageUrl = shareInfo.imgUrl || "";
							uni.share(shareObj);
							break;
						case 1:
							shareObj.provider = "weixin";
							shareObj.scene = "WXSenceTimeline";
							shareObj.type = 0;
							shareObj.imageUrl = shareInfo.imgUrl || "";
							uni.share(shareObj);
							break;
						// case 2:
						// 	shareObj.provider = "sinaweibo";
						// 	shareObj.type = 0;
						// 	shareObj.imageUrl = shareInfo.imgUrl || "";
						// 	uni.share(shareObj);
						// 	break;
						case 2:
							shareObj.provider = "qq";
							shareObj.type = 1;
							shareObj.imageUrl = shareInfo.imgUrl || "";
							uni.share(shareObj);
							break;
						case 3:
							uni.setClipboardData({
								data: shareInfo.href,
								complete() {
									uni.showToast({
										title: "已复制到剪贴板"
									})
								}
							})
							break;
						case 4:
							plus.share.sendWithSystem({
								type: "web",
								title: shareInfo.title || "",
								thumbs: [shareInfo.imgUrl || ""],
								href: shareInfo.href || "",
								content: shareInfo.desc || "",
							})
							break;
					};
				});
				this.$nextTick(() => {
					this.shareObj.alphaBg.show();
					this.shareObj.shareMenu.show();
				})
			},
			goNext: function() {
				let key = this.storyData.next.id

				let id = '';
				if (this.isLogin) {
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				} else {
					id = 0
				}

				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				let bookId = this.storyData.source_id
				if (!key) {
					uni.showToast({
						title: '已经是最后一章了',
						icon: 'none'
					})
				} else {
					uni.showLoading({
						title: 'loading...',
						mask: true
					})
					uni.request({
						url: urls.HTTP + '/novel/getnovelcontent',
						method: 'POST',
						data: {
							id: bookId,
							key: key,
							uid: id
						},
						success: (res) => {
							// console.log('下一章', res)
							this.$store.dispatch('storyData', res.data)
							uni.pageScrollTo({
								scrollTop: 0,
								duration: 1000
							})
							uni.hideLoading()
							if (res.data.isbuy === 0) {
								this.showBuyBtn = true
							}
						}
					})
				}
			},
			buyIt: function() {
				if (this.$store.state.isLogin == false) {
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
				} else {
					let key = this.storyData.id

					let id = '';
					if (this.isLogin) {
						id = JSON.parse(uni.getStorageSync('userInfo')).id
					} else {
						id = 0
					}

					// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
					let bookId = this.storyData.source_id
					let price = this.storyData.price
					uni.request({
						url: urls.HTTP + '/novel/buynovelchapter',
						method: 'POST',
						data: {
							id: bookId,
							key: key,
							price: price,
							uid: id
						},
						success: (res) => {
							// console.log(res)
							if (res.data.code === 1) {
								this.rechargeShow = true
							} else if (res.data.code === 0) {
								this.$store.dispatch('storyData', res.data.data)
								uni.pageScrollTo({
									scrollTop: 0,
									duration: 300
								})
								this.showBuyBtn = false
							}
						}
					})
				}
			},
			goPrev: function() {
				let key = this.storyData.prev.id
				let bookId = this.storyData.source_id

				let id = '';
				if (this.isLogin) {
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				} else {
					id = 0
				}

				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				if (!key) {
					uni.showToast({
						title: '已经是第一章了',
						icon: 'none'
					})
				} else {
					uni.request({
						url: urls.HTTP + '/novel/getnovelcontent',
						method: 'POST',
						data: {
							id: bookId,
							key: key,
							uid: id
						},
						success: (res) => {
							// console.log('上一章', res)
							this.$store.dispatch('storyData', res.data)
							uni.pageScrollTo({
								scrollTop: 0,
								duration: 300
							})
						}
					})
				}
			},
			menuStart: function(e) {
				this.menuX = e.touches[0].pageX
			},
			menuMove: function(e) {
				this.menuEndX = e.changedTouches[0].pageX
			},
			menuEnd: function(e) {
				this.menu_x = this.menuEndX - this.menuX
				if (this.menu_x < -10) {
					this.animation.left(-100 + '%').step()
					this.animMenu = this.animation.export()
				}
			},
			showMore: function() {
				this.moreIsShow = !this.moreIsShow
			},
			centerShow: function() {
				this.showHF = !this.showHF
				this.moreIsShow = false
				this.animation.translateY(0, 66).step()
				this.animationHeader = this.animation.export()
			},
			showMenu: function() { // 阅读页菜单初始值
				this.animation.left(0).step()
				this.animMenu = this.animation.export()
				this.showHF = false
				uni.showLoading({
					mask: true,
					title: '正在加载'
				})
				let bookId = this.storyData.novel_id
				console.log(bookId);
				let id = '';
				if (this.isLogin) {
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				} else {
					id = 0
				}

				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				let pagenum = this.curChapter
				uni.request({
					url: urls.HTTP + '/novel/getchapterlist',
					method: 'POST',
					data: {
						id: this.storyData.novel_id,
						uid: id,
						pagesize: 200,
						pagenum: pagenum
					},
					success: (res) => {
						console.log(res)
						this.story = res.data
						this.chaptersList = res.data.chapter
						uni.hideLoading()
					}
				})
			},
			moreChapter: function() { // 滚动到菜单栏底部加载更多章节
				uni.showLoading({
					mask: true,
					title: '正在加载'
				})
				let bookId = this.storyData.novel_id
				console.log(bookId);
				let id = '';
				if (this.isLogin) {
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				} else {
					id = 0
				}

				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				this.curChapter++
				let pagenum = this.curChapter
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
						// console.log(res)
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
			download: function() {
				let id = this.$store.state.bookId
				uni.downloadFile({
					url: urls.HTTP + '/novel/noveldownload1?novelid=' + id,
					success: (res) => {
						console.log(res)
						if (res.statusCode === 200) {
							uni.saveFile({
								tempFilePath: res.tempFilePath,
								success: (saveRes) => {
									// console.log(saveRes)
									uni.showToast({
										title: '保存成功：' + saveRes.savedFilePath,
										icon: 'none'
									})
								}
							})
						}
					}
				})
			},
			goComment: function() {
				//let id = this.$store.state.bookId
				let bookId = this.storyData.novel_id
				let uid = '';
				if (this.isLogin) {
					uid = JSON.parse(uni.getStorageSync('userInfo')).id
				} else {
					uid = 0
				}

				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				uni.request({
					url: urls.HTTP + '/novel/getnovel',
					method: 'POST',
					data: {
						novelid: bookId,
						uid: uid
					},
					success: (res) => {
						// console.log('书籍详情', res.data)
						this.$store.dispatch('comments', res.data.comment)
						uni.navigateTo({
							url: 'allComments'
						})
					}
				})
			},
			goChapter: function(item) {
				this.isMenuShow = false
				// let bookId = this.$store.state.bookId
				let bookId = this.storyData.source_id
				let key = item.id

				let id = '';
				if (this.isLogin) {
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				} else {
					id = 0
				}
				// let uid = JSON.parse(uni.getStorageSync('userInfo')).id
				uni.request({
					url: urls.HTTP + '/novel/getnovelcontent',
					method: 'POST',
					data: {
						id: bookId,
						key: key,
						uid: id
					},
					success: (res) => {
						this.$store.dispatch('storyData', res.data)
						uni.redirectTo({
							url: 'story'
						})
					}
				})
			},
			goDetail: function() {
				//this.$store.dispatch('bookId', this.$store.state.bookId)				
				let bookId = this.storyData.novel_id
				uni.redirectTo({
					url: 'storyDetail?id=' + bookId
				})
			},
			// shareTo: function() {
			// 	let novelid = this.storyData.source_id
			// 	uni.request({
			// 		url: urls.HTTP + '/novel/novelshare',
			// 		method: 'POST',
			// 		data: {
			// 			novelid: novelid
			// 		},
			// 		success: (res) => {
			// 			// console.log(res)
			// 			this.shareInfo = res.data
			// 			this.moreIsShow = false
			// 			this.showHF = false
			// 			this.shareShow = true
			// 		}
			// 	})
			// },
			closeSP: function(val) {
				this.shareShow = val
			},
			closeRP: function(val) {
				this.rechargeShow = val
			}
		},
		computed: {
			storyData() { // 小说信息
				return this.$store.state.storyData
			},
			contentData() { // 本章内容
				return this.storyData.content
			},
			updateTime() {
				let now = parseInt(new Date().getTime() / 1000)
				let num = parseInt(now - this.story.update_time)
				if (num < 0) {
					return 1 + '秒'
				} else if (num >= 0 && num < 60) {
					return num + '秒'
				} else if (num >= 60 && num < 3600) {
					return Math.ceil(num / 60) + '分钟'
				} else if (num >= 3600 && num < 86400) {
					return Math.ceil(num / 3600) + '小时'
				} else if (num >= 86400 && num < 2592000) {
					return Math.ceil(num / 86400) + '天'
				} else if (num >= 2592000 && num < 31104000) {
					return Math.ceil(num / 2592000) + '月'
				} else {
					return Math.ceil(num / 31104000) + '年'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.story {
		width: 100%;
		height: 100vh;
		background-color: #fff9eb;
		position: relative;
		z-index: 1;

		.header {
			width: 100%;
			height: 88upx;
			line-height: 88upx;
			padding-top: 44upx;
			background-color: #fff;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;

			.icon-back {
				float: left;
				color: #999;
				font-weight: 600;
				margin-left: 40upx;
			}

			.fr {
				color: #BD3037;
				margin-right: 40upx;
				font-weight: 600;
			}

			.fl {
				color: #BD3037;
				margin-left: 40upx;
				font-weight: 600;
			}

			.more-icon {
				width: 250upx;
				position: absolute;
				top: 130upx;
				right: 0;
				font-size: 28upx;
				border: 1upx solid #ccc;
				z-index: 999;

				.more-item {
					font-size: 28upx;
					padding: 0 10px;
					box-sizing: border-box;
					background-color: #fff;
					border-bottom: 1px solid #ccc;
					overflow: hidden;

					.icon {
						color: #BD3037;
						font-size: 50upx;
						float: left;
					}

					.fl {
						color: #515151;
						margin-left: 10upx;
					}

					.c-red {
						font-size: 20upx;
					}

					.mp-share {
						width: 70%;
						height: 100%;
						background-color: #fff;
						font-size: 28upx;
						padding: 10upx 0;
						text-align: left;

						&::after {
							border: none;
						}
					}
				}
			}
		}

		.content {
			width: 100%;
			height: 100vh;
			color: #756959;
			font-size: 30upx;
			text-indent: 2em;
			background-color: #fff9eb;
			box-sizing: border-box;
			border-top: 1upx solid #fff9eb;
			position: relative;

			.menu-box {
				position: fixed;
				top: 0;
				left: -100%;
				z-index: 99;
				width: 100%;
				height: 100vh;

				.right {
					position: absolute;
					top: 0;
					right: 0;
					z-index: 99;
					width: 10%;
					height: 100vh;
					opacity: 0;
				}

				.menu {
					width: 90%;
					height: 100vh;
					padding-top: 40upx;
					color: #756959;
					box-sizing: border-box;
					position: relative;
					border-right: 2upx solid #999;
					box-shadow: 4upx 0 60upx #515151;
					background-color: #fff9eb;

					.content-menu {
						height: 82vh;
					}

					.title {
						width: 90%;
						font-size: 48upx;
					}

					.info {
						font-size: 24upx;
						color: #c4c0b5;
						margin-top: 20upx;
					}

					.menu-item {
						font-size: 28upx;
						width: 100%;
						height: 74upx;
						line-height: 74upx;
						display: flex;
						flex-flow: row nowrap;
						justify-content: flex-start;

						// border-top: 1upx solid #c4c0b5;
						.chapter {
							width: 76%;
							display: inline-block;
						}

						.payment {
							font-size: 20upx;
							color: #BD3037;
						}

						.color_gray {
							color: #999;
						}

						.current {
							color: #b3752c;
						}
					}

					.menu-download {
						position: absolute;
						bottom: 0;
						left: 0;
						z-index: 100;
						display: inline-block;
						width: 100%;
						height: 88upx;
						line-height: 88upx;
						text-align: center;
						border-top: 1upx solid #aaa;
						box-sizing: border-box;
						background-color: #fff9eb;
					}
				}
			}

			.btn-center {
				width: 50%;
				height: 50vh;
				opacity: 0;
				position: fixed;
				top: 25vh;
				left: 25%;
				z-index: 92;
			}

			.current-page {
				position: absolute;
				bottom: 10upx;
				right: 20upx;
				font-size: 24upx;
			}

			.title-text {
				width: 100%;
				height: 3vh;
				font-size: 28upx;
				color: #b3752c;
				line-height: 40upx;
				position: fixed;
				padding-top: 1vh;
				top: 0;
				left: 0;
				z-index: 10;
				background-color: #fff9eb;
			}

			.content-text {
				width: 100%;
				min-height: 100vh;
				line-height: 26px;
				font-size: 34upx;
				box-sizing: border-box;
				display: block;
				position: relative;
				top: 4vh;
				z-index: 2;
				padding: 0 20upx;
				background-color: #fff9eb;
				overflow-x: hidden;

				#data {
					width: 100%;
					background-color: #fff9eb;
				}

				.btn-box {
					width: 100%;
					margin-top: 40upx;
					height: 14vh;
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-around;

					.btn1 {
						display: inline-block;
						box-sizing: border-box;
						border: none;
						height: 80upx;
						line-height: 80upx;
						border-radius: 8upx;
						padding-right: 40upx;
						text-align: left;
					}

					.prev {
						color: #BD3037;
						border: 1upx solid #BD3037;
					}

					.next {
						background-color: #BD3037;
						color: #fff;
					}
				}

				.is-buy {
					width: 100%;
					height: 30vh;
					box-sizing: border-box;
					padding: 40upx;
					font-size: 28upx;
					color: #999;
					background-color: #fff9eb;
					position: absolute;
					left: 0;
					bottom: 200upx;

					.c-red {
						font-size: 24upx;
					}

					.btn-buy {
						width: 180upx;
						height: 66upx;
						margin: 0 auto;
						line-height: 66upx;
						margin-top: 15upx;
						border: 1upx solid #756959;
						border-radius: 8upx;
						color: #756959;
						font-size: 32upx;
						padding: 0;
						background-color: rgba($color: #fff9eb, $alpha: 0);
					}
				}
			}
		}

		.footer {
			width: 100%;
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 99;
			background-color: #fff;
			border-top: 4upx solid #f3eddf;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;

			.footer-item {
				width: 25%;
				text-align: center;
				padding: 20upx 0;
				font-size: 28upx;
				color: #756959;

				.icon {
					font-size: 48upx;
				}
			}
		}
	}

	/* #ifdef MP-WEIXIN */
	.more-lr {
		left: 200upx !important;
		z-index: 999;
	}

	/* #endif */
</style>
