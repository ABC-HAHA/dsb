<template>
	<view class="story-detail">
		<view class="header" :style="{'background-image': 'url(' + story.pic + ')'}">
			<view class="glass-bg"></view>
			<view class="h-header">
				<view class="hh-top">
					<navigator open-type="navigateBack">
						<text class="fl icon icon-back"></text>
					</navigator>

					<!-- #ifdef MP-WEIXIN -->
					<navigator url="allComments">
						<text class="fl icon icon-message"></text>
					</navigator>
					<button class="fl btn-share" open-type="share" @tap="shareInfo">
						<text class="icon icon-share" @tap="shareInfo"></text>
					</button>
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					<text class="fr icon icon-share" @tap="shareInfo"></text>
					<navigator url="allComments">
						<text class="fr icon icon-message"></text>
					</navigator>
					<!-- #endif -->
				</view>
				<view class="hh-top hh-bg-top" :animation="animTitle">
					<navigator open-type="navigateBack">
						<text class="fl icon icon-back"></text>
					</navigator>

					<!-- #ifdef MP-WEIXIN -->
					<navigator url="allComments">
						<text class="fl icon icon-message"></text>
					</navigator>


					<button class="fl btn-share" open-type="share" @tap="shareInfo">
						<text class="icon icon-share" @tap="shareInfo"></text>
					</button>
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					<text class="fr icon icon-share" @tap="shareInfo"></text>


					<navigator url="allComments">
						<text class="fr icon icon-message"></text>
					</navigator>
					<!-- #endif -->
				</view>
				<view class="hh-bottom">
					<view class="hh-bottom-left">
						<image :src="story.pic"></image>
					</view>
					<view class="hh-bottom-middle">
						<view class="title text-over-1">{{story.title}}</view>
						<view class="middle">
							<text class="c-red">{{story.author}}</text>
							<text class="tag">{{story.ctitle}}</text>
						</view>
						<view class="words">{{story.word_million}}万字</view>
					</view>
					<view class="hh-bottom-right">
						<text class="text-big">{{story.hits}}</text>
						<view class="text-small">追书人气</view>
					</view>
				</view>
			</view>
		</view>
		<view style="width: 100%; height: 360upx;"></view>
		<view class="content">
			<view class="intro">
				<view class="text-middle">简介</view>
				<view class="tag-list">
					<text class="tag-item" v-for="(item,index) in story.tag_array" :key="index">{{item}}</text>
				</view>
				<view class="profile" :class="{less: isLess}">
					<view class="profile-content">
						{{story.content}}
					</view>
					<view class="btn" @tap="showMore">
						<text class="icon icon-down" v-show="isLess"></text>
					</view>
				</view>
				<view @tap="goChapters" class="menu">
					<text class="text-middle">目录</text>
					<text class="fr icon icon-next"></text>
					<text class="fr">共{{story.chapter_count}}章</text>
					<text class="fr" :class="{cred: !story.serialize}">{{story.serialize_text}}</text>
				</view>
				<view class="other">
					<view class="text-middle">最新章节</view>
					<view class="o-content">
						<view class="item" v-for="(item, index) in newest" :key="index"  @tap="goStory(item.id)">
							<view class="bookname text-over-2">{{item.title}}</view>
						</view>
					</view>
					<view class="see-more" v-if="isSeeOne">查看更多</view>
				</view>
			</view>
		</view>
		<view class="appraise">
			<view class="ap-title">
				<text>热门书评</text>
				<text class="fr icon icon-edit" @tap="editReview">写书评</text>
			</view>
			<view class="ap-no-content" v-if="comments.length === 0">
				<text>暂无书评</text>
			</view>
			<view class="ap-content" v-if="comments.length !== 0">
				<view class="item" v-for="(item,index) in comments" :key="index">
					<!-- @tap="seeTa(item)" -->
					<view class="ac-title" @tap="seeTa(item)">
						<view class="fl logo">
							<image :src="urlHttp + item.user.headimgurl"></image>
						</view>
						<text class="fl f-14">{{item.user.username}}</text>
					</view>
					<view class="ac-comment">
						<view class="acc-title f-16">{{item.title}}</view>
						<view class="acc-content f-14 text-over-3">
							{{item.content}}
						</view>
					</view>
					<view class="ac-info">
						<text class="fl f-12">{{item.create_time}}</text>
						<text class="icon icon-thumbs-up fr f-12" :class="{cred: hasUp(item.id)}" @tap="thumbsUp(item)">{{item.up}}</text>
						<text class="icon icon-comment fr f-12" @tap="goDetail(item)">{{item.replys}}</text>
					</view>
				</view>
			</view>
			<navigator url="allComments" class="see-more" v-if="comment.length !== 0">全部书评{{comment.length}}条</navigator>
		</view>
		<view class="adv" @tap="goAdv(advs.link)" v-if="advs">
			<web-view v-if="advShow" :src="advs.link"></web-view>
			<view class="logo">
				<image :src="advs.picpath" mode=""></image>
			</view>
			<view class="intro">
				<view class="h4">{{advs.title}}</view>
				<!-- <view class="text-over-1 font-small">这是广告这是广告这是广告这是广告这是广告这是广告</view> -->
			</view>
			<text class="tag">推广</text>
		</view>
		<view class="other">
			<view class="h3">作者的其他作品</view>
			<view class="o-content">
				<view class="o-item" v-for="(item, index) in others" :key="index" @tap="qita(item.id)">
					<image :src="item.pic" mode=""></image>
					<view class="bookname text-over-2">{{item.title}}</view>
				</view>
			</view>
			<view class="see-more" v-if="isSeeOne">查看更多</view>
		</view>
		<view class="other">
			<view class="h3">读了本书的人还读过</view>
			<view class="o-content">
				<view class="o-item" v-for="(item, index) in similars" :key="index" @tap="qita(item.id)">
					<image :src="item.pic" mode=""></image>
					<view class="bookname text-over-2">{{item.title}}</view>
					<!-- <view class="percent">{{item.percent}}%读过</view> -->
				</view>
			</view>
			<view class="see-more" v-if="isSeeOne">查看更多</view>
		</view>
		<view class="h-44"></view>
		<view class="footer-btn">
			<view class="left" style="color: #999;" v-if="isAdd">已加入书架</view>
			<view class="left" v-else @tap="addToShelf">+加入书架</view>
			<view class="right" @tap="readStory">免费试读</view>
		</view>
		<wx-info-dialog :isShow="showDialog" @goClose="closeDialog"></wx-info-dialog>
		<!-- <share-pop :showMe="showShare" @closeSharePop="closepop"></share-pop> -->
	</view>
</template>

<script>
	import urls from '../../../utils/urls.js'
	import wxInfoDialog from '../../components/wxInfoDialog.vue'
	import sharePop from '../../components/sharePop.vue'
	import share from "../../../utils/share.js";
	export default {
		components: {
			wxInfoDialog,
			sharePop
		},
		data() {
			return {
				showShare: false,
				story: {},
				isLess: true,
				comment: [], // 所有评价
				comments: [], // 展示的评价列表
				other: [],
				others: [], // 作者其他作品
				animTitle: {},
				current: 0,
				similar: [],
				similars: [],
				isTop: false,
				showDialog: false,
				share_url: '',
				share_title: '',
				share_content:'',
				advs:{},
				isLogin: this.$store.state.isLogin,
				newest:[],
			}
		},
		onLoad(options) {
			let id = options.id
			console.log(id)
			let user = uni.getStorageSync("userInfo")
			console.log(user)
			let uid = ''
			if (user) {
				uid = JSON.parse(user).id
			}
			console.log(id + '++++++' + uid)
			uni.request({
				url: urls.HTTP + '/novel/getnovel',
				method: 'POST',
				data: {
					novelid: id,
					uid: uid
				},
				success: (res) => {
					console.log(res);
					//console.log('书籍详情', res.data)
					this.story = res.data.novel[0]
					this.share_url = this.story.url,
					this.share_title = this.story.title,
					this.share_content = this.story.ncontent,
					this.comment = res.data.comment
					this.comments = res.data.comment.slice(0, 3)
					this.other = res.data.othernovel
					this.others = res.data.othernovel.slice(0, 4)
					this.newest = res.data.newest
					this.similar = res.data.similarnovel
					this.similars = res.data.similarnovel.slice(0, 4)
					this.$store.dispatch('comments', res.data.comment)
					this.$store.dispatch('story', this.story)
				}
			})
			this.adv()
		},
		onBackPress() {
			//监听back键，关闭弹出菜单
			if (this.shareObj.shareMenu.isVisible()) {
				this.shareObj.shareMenu.hide();
				this.shareObj.alphaBg.hide();
				return true
			}
		},
		onShow() {
			var animation = uni.createAnimation({
				duration: 1000
			})
			this.animation = animation
			let id = this.$store.state.bookId
			// let uid = JSON.parse(uni.getStorageSync("userInfo")).id
			let user = uni.getStorageSync("userInfo");
			let uid = ""
			if (user) {
				uid = JSON.parse(user).id
			}			
			console.log(id);
			uni.request({
				url: urls.HTTP + '/novel/getnovel',
				method: 'POST',
				data: {
					novelid: id,
					uid: uid
				},
				success: (res) => {
					console.log(res);
					// console.log('书籍详情', res.data)
					this.story = res.data.novel[0]
					this.comment = res.data.comment
					this.comments = res.data.comment.slice(0, 3)
					this.other = res.data.othernovel
					this.others = res.data.othernovel.slice(0, 4)
					this.newest = res.data.newest					
					this.similar = res.data.similarnovel
					this.similars = res.data.similarnovel.slice(0, 4)
					this.$store.dispatch('comments', res.data.comment)
					this.$store.dispatch('story', this.story)
				}
			})
		},
		onShareAppMessage() {
			let novelid = this.story.source_id
			return {
				title: this.story.content,
				path: '/pages/common/book/storyDetail?id=' + novelid,
				imageUrl: this.story.pic
			}
		},
		onPageScroll(res) {
			if (res.scrollTop > 20) {
				this.animation.opacity(1).step()
				this.animTitle = this.animation.export()
			} else if (res.scrollTop < 20) {
				this.animation.opacity(0).step()
				this.animTitle = this.animation.export()
			} 
		},
		methods: {
			adv() {
				let _this = this
				uni.request({
					url: urls.HTTP + '/index/appad',
					method: 'POST',
					data:{id:7},
					success: (res) => {
						console.log(res);
						if(res.data.code == 0 && res.data.advertisement[0].status == 1){
							res.data.advertisement[0].picpath = urls.ImgUrl + res.data.advertisement[0].picpath,
							_this.advs = res.data.advertisement[0]
						}else{
							_this.advs = false
						}
					}
				})
			},
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
			closepop: function(val) {
				this.showShare = false
			},
			seeTa: function(item) {
				// console.log(item)
				this.$store.dispatch('otherUser', item.user)
				uni.navigateTo({
					url: 'otherUserInfo'
				})
			},
			showMore: function() {
				this.isLess = !this.isLess
			},
			editReview: function() {
				uni.navigateTo({
					url: 'editReview'
				})
			},
			closeDialog: function(val) {
				this.showDialog = val
			},
			goStory: function(item) {
			  var bookId = this.$store.state.story.source_id
			  var key = item
				let id = '';
				if(this.isLogin){
					id = JSON.parse(uni.getStorageSync('userInfo')).id
				}else{
					 id = 0
				}
			 
			  uni.request({
			    url: urls.HTTP + '/novel/getnovelcontent',
			    method: 'POST',
			    data: {
			      id: bookId,
			      key: key,
			      uid: id
			    },
			    success: (res) => {
						
			      // console.log(res)
			      this.$store.dispatch('storyData', res.data)
			      uni.redirectTo({
			        url: 'story'
			      })
			    }
			  })
			},
			readStory: function() {
				let bookId = this.story.id

				let user = uni.getStorageSync("userInfo");
				let uid = ""
				if (user) {
					uid = JSON.parse(user).id
				}
				// if(this.isLogin){
				// 	uid = JSON.parse(uni.getStorageSync('userInfo')).id
				// }else{
				// 	 uid = 0
				// }
				uni.request({
					url: urls.HTTP + '/novel/readnovel',
					method: 'POST',
					data: {
						novel_id: bookId,
						uid: uid
					},
					success: (res) => {
						// console.log(res)
						this.$store.dispatch('storyData', res.data)
						uni.redirectTo({
							url: 'story'
						})
					}
				})
			},
			goChapters: function() {
				this.$store.dispatch('pageTitle', this.story.title)
				uni.navigateTo({
					url: 'chapters'
				})
			},
			addToShelf: function() {
				let novelid = this.story.id
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
					// let id=JSON.parse(uni.getStorageSync("userInfo")).id
					let user = uni.getStorageSync("userInfo");
					let id = ""
					if (user) {
						id = JSON.parse(user).id
					}
					console.log(id)
					uni.request({
						url: urls.HTTP + '/Bookshelf/addbookshelf',
						method: 'POST',
						data: {
							uid: id,
							novelid: novelid
						},
						success: (res) => {
							// console.log('添加书架', res)
							if (res.data.code === 0) {
								this.story.isbookshelf = 0
								uni.showToast({
									title: '已成功加入书架',
									icon: 'none'
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
			goDetail: function(val) {
				console.log(val)
				this.$store.dispatch('comment', val)
				uni.navigateTo({
					url: 'commontDetail'
				})
			},
			thumbsUp: function(item) {
				// console.log(item)
				var id = item.id
				// var uid = JSON.parse(uni.getStorageSync("userInfo")).id
				let user = uni.getStorageSync("userInfo");
				let uid = ""
				if (user) {
					uid = JSON.parse(user).id
				}

				var fuid = item.user.id
				this.current = id
				uni.request({
					url: urls.HTTP + '/comment/upcomment',
					method: 'POST',
					data: {
						cid: id,
						uid: uid,
						fuid: fuid
					},
					success: (res) => {
						// console.log(res)
						if (res.data.code === 0) {
							item.up++
						} else {
							uni.showToast({
								title: '请不要重复点赞',
								icon: 'none'
							})
						}
					}
				})
			},
			hasUp: function(i) {
				if (i === this.current) {
					return true
				} else {
					return false
				}
			},
			goAdv: function(e) {
				this.advShow = false
				clearInterval(this.interval)
				clearTimeout(this.timeOut)
				plus.runtime.openURL(e);
			},
		},
		computed: {
			rate() {
				return Number(this.story.rating)
			},
			isSeeOne() {
				return this.others.length > 4 ? true : false
			},
			id() {
				return uni.getStorageSync('user').id
			},
			isAdd() {
				if (this.story.isbookshelf === 0) {
					return true
				} else {
					return false
				}
			},
			urlHttp() {
				return urls.UrlHttp
			}
		}
	}
</script>

<style lang="scss" scoped>

	.item {
	  width: 100%;
	  line-height: 60upx;
	  box-sizing: border-box;
	  padding: 10upx 40upx;
	  border-bottom: 1upx solid #eee;
	  .vip {
		display: inline-block;
		height: 26upx;
		line-height: 26upx;
		margin-top: 17upx;
		float: right;
		color: #BD3037;
		border: 1upx solid #BD3037;
		padding: 2upx 6upx;
		border-radius: 10upx;
		font-size: 12upx;
	  }
	}
	    
	.story-detail {
		width: 100%;
		background-color: #eee;
		position: relative;
		z-index: 1;

		.cred {
			color: red !important;
		}

		.header {
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-repeat: no-repeat;
			background-size: 100%;
			background-attachment: fixed;
			overflow: hidden;
			z-index: 3;

			.glass-bg {
				width: 100%;
				height: 100%;
				background: inherit;
				filter: blur(20upx);
				position: absolute;
				top: 0;
				left: 0;
				z-index: 4;
			}

			.h-header {
				width: 100%;
				position: relative;
				z-index: 5;

				.hh-top {
					width: 100%;
					box-sizing: border-box;
					padding: 44upx 20upx 0 20upx;
					line-height: 88upx;
					overflow: hidden;
					position: fixed;
					top: 0;
					left: 0;
					z-index: 999;

					.icon {
						color: #333;
						margin-right: 40upx;
					}

					.btn-share {
						width: 88upx;
						height: 88upx;
						line-height: 88upx;
						background: inherit;
						border: none;
						outline: none;

						&::after {
							border: none;
						}
					}
				}

				.hh-bg-top {
					z-index: 999;
					opacity: 0;
					background-color: #fff;
				}

				.hh-bottom {
					width: 100%;
					padding-top: 132upx;
					background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
					display: flex;
					flex-flow: row nowrap;
					justify-content: flex-start;
					padding-bottom: 20upx;

					.hh-bottom-left {
						width: 30%;
						text-align: center;

						image {
							width: 160upx;
							height: 200upx;
						}
					}

					.hh-bottom-middle {
						line-height: 60upx;
						color: #666;
						line-height: 80upx;

						.title {
							width: 320upx;
							font-size: 36upx;
							font-weight: 600;
							color: #000;
						}

						.middle {
							line-height: 20upx;
							font-size: 28upx;

							.tag {
								display: inline-block;
								border-left: 1upx solid #666;
								padding-left: 10upx;
								margin-left: 10upx;
							}
						}

						.words {
							font-size: 28upx;
						}
					}

					.hh-bottom-right {
						text-align: center;
						padding: 40upx 0;
						box-sizing: border-box;

						.text-big {
							font-size: 48upx;
							color: #999;
						}

						.text-small {
							font-size: 24upx;
							color: #999;
						}
					}
				}
			}
		}

		.content {
			width: 100%;
			background-color: #fff;
			position: relative;
			z-index: 1;

			.intro {
				width: 100%;

				.text-middle {
					font-size: 32upx;
					margin-left: 5%;
					margin-bottom: 10upx;
				}

				.tag-list {
					width: 90%;
					margin: 10upx auto;

					.tag-item {
						padding: 6upx 16upx;
						margin: 0 10upx;
						border-radius: 20upx;
						font-size: 24upx;
						background-color: rgba(222, 222, 222, .6);
					}
				}

				.profile {
					width: 90%;
					margin: 20upx auto 10upx;
					line-height: 30upx;
					font-size: 24upx;
					color: #515151;
					position: relative;
					z-index: 1;

					.btn {
						width: 100%;
						height: 90upx;
						background-color: rgba($color: #ffffff, $alpha: 0);
						position: absolute;
						left: 0;
						top: 0;
						z-index: 10;

						.icon-down {
							padding: 2upx 10upx;
							background-color: rgba($color: #ffffff, $alpha: .6);
							position: absolute;
							right: 0;
							bottom: 0;
							z-index: 20;
						}
					}

					.profile-content {
						position: relative;
						z-index: 2;
						word-wrap: break-word;
						word-break: break-all;
						overflow: hidden;
					}
				}

				.less {
					max-height: 90upx;
					overflow: hidden;
				}
			}

			.menu {
				width: 90%;
				margin: 20upx auto;
				overflow: hidden;
				line-height: 40upx;
				border-top: 1upx solid #eee;
				padding: 20upx 0;

				.text-middle {
					font-size: 32upx;
					color: #515151;
					margin-left: 0;
				}

				.fr {
					font-size: 24upx;
					color: #999;
					margin-left: 20upx;
				}
			}
		}

		.appraise {
			width: 100%;
			background-color: #fff;

			.ap-title {
				width: 90%;
				padding: 20upx 0;
				margin: 0 auto;
				line-height: 40upx;
				border-bottom: 1upx solid #f0f0f0;
				font-size: 32upx;
				color: #515151;

				.icon-edit {
					color: red;
					font-size: 28upx;
				}
			}

			.ap-no-content {
				width: 100%;
				height: 100upx;
				text-align: center;
				line-height: 100upx;
				font-size: 32upx;
				color: #515151;
			}

			.ap-content {
				width: 90%;
				margin: 0 auto;

				.item {
					width: 100%;
					padding: 20upx 0;
					border-bottom: 1upx solid #eee;

					.f-16 {
						font-size: 32upx;
						color: #333;
					}

					.f-14 {
						font-size: 28upx;
						color: #666;
					}

					.f-12 {
						font-size: 24upx;
						color: #999;
						margin-left: 10upx;
					}

					.ac-title {
						overflow: hidden;
						line-height: 60upx;

						.logo {
							width: 80upx;
							height: 60upx;

							image {
								width: 60upx;
								height: 60upx;
								border-radius: 50%;
							}

						}
					}

					.ac-info {
						overflow: hidden;
						margin-top: 20upx;

						.icon {
							margin-left: 30upx;
						}
					}

					.acc-title {
						margin: 10upx 0;
					}
				}
			}
		}

		.see-more {
			width: 100%;
			height: 80upx;
			line-height: 80upx;
			text-align: center;
			color: #BD3037;
			font-size: 32upx;
			border-top: 1upx solid #eee;
		}

		.adv {
			width: 100%;
			margin-top: 10upx;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-around;
			align-items: center;
			background-color: #fff;
			padding: 20upx 0;

			.logo {
				width: 14%;
				text-align: center;

				image {
					width: 80upx;
					height: 80upx;
					border-radius: 16upx;
				}
			}

			.intro {
				width: 70%;

				.text-over-1 {
					display: inline-block;
					color: #999;
					width: 100%;
				}
			}

			.tag {
				margin: 0 10upx;
				background-color: rgba($color: #999, $alpha: .5);
				color: #fff;
				font-size: 28upx;
			}
		}

		.other {
			width: 100%;
			margin-top: 10upx;
			background-color: #fff;

			.h3 {
				margin-left: 2%;
				padding: 20upx 0;
			}

			.o-content {
				width: 100%;
				max-height: 388upx;
				overflow: hidden;
				display: flex;
				flex-flow: row wrap;
				justify-content: flex-start;

				.o-item {
					width: 22%;
					margin: 20upx 0;
					margin-left: 18upx;
					padding-bottom: 20upx;

					image {
						width: 100%;
						height: 214upx;
						box-shadow: 1upx 1upx 4upx #666;
					}

					.bookname {
						font-size: 12upx;
						width: 100%;
					}

					.percent {
						font-size: 24upx;
						color: #999;
					}
				}
			}
		}

		.footer-btn {
			width: 100%;
			height: 88upx;
			line-height: 88upx;
			position: fixed;
			left: 0;
			bottom: 0;

			.left {
				width: 50%;
				height: 88upx;
				display: inline-block;
				text-align: center;
				line-height: 88upx;
				font-size: 36upx;
				color: #BD3037;
				background-color: #fff;
			}

			.right {
				width: 50%;
				height: 88upx;
				display: inline-block;
				text-align: center;
				line-height: 88upx;
				font-size: 36upx;
				color: #fff;
				background-color: #BD3037;
			}
		}

		.h-44 {
			width: 100%;
			height: 88upx;
			margin-top: 20upx;
		}
	}
	.vipColor {
	  color: #BD3037;
	}
</style>
