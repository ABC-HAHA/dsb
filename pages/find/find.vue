<template>
	<view class="find">
		<view class="h-22 bg-red"></view>
		<view class="class top">
			<view class="item" :class="{on: isActive[0]}" @tap="changeClass(0)">
				<text>精选</text>
			</view>
			<view class="item" :class="{on: isActive[1]}" @tap="changeClass(1)">
				<text>男频</text>
			</view>
			<view class="item" :class="{on: isActive[2]}" @tap="changeClass(2)">
				<text>女频</text>
			</view>
			<!-- <view class="item" :class="{on: isActive[3]}" @tap="changeClass(3)">
      	<text>出版</text>
      </view> -->
			<!-- #ifndef MP-WEIXIN -->
			<!-- 微信小程序不会出现 -->
			<navigator url="chooseClass" class="more">
				<text class="icon icon-more"></text>
			</navigator>
			<!-- #endif -->

			<!-- #ifdef MP-WEIXIN -->
			<!-- 微信小程序会出现 -->
			<navigator url="chooseClass" class="item">
				<text class="icon icon-more"></text>
			</navigator>
			<!-- #endif -->
		</view>
		<view class="content" v-if="contentShow">
			<view class="item">
				<swiper class="banner" v-if="isActive[0]" indicator-dots="true" autoplay="true" interval="2000" duration="1000">
					<swiper-item v-for="(item,index) in banner0" :key="index" @tap="swiperTap(item)">
						<image :src="item.pic"></image>
					</swiper-item>
				</swiper>
				<swiper class="banner" v-if="isActive[1]" indicator-dots="true" autoplay="true" interval="2000" duration="1000">
					<swiper-item v-for="(item,index) in banner1" :key="index" @tap="swiperTap(item)">
						<image :src="item.pic"></image>
					</swiper-item>
				</swiper>
				<swiper class="banner" v-if="isActive[2]" indicator-dots="true" autoplay="true" interval="2000" duration="1000">
					<swiper-item v-for="(item,index) in banner2" :key="index" @tap="swiperTap(item)">
						<image :src="item.pic"></image>
					</swiper-item>
				</swiper>
				<view class="nav" v-if="isActive[0]">
					<view class="item" @tap="more('rank', '排行')">
						<view>
							<text class="icon icon-paihang"></text>
							<view class="text">排行</view>
						</view>
					</view>
					<navigator url="chooseClass" class="item">
						<view>
							<text class="icon icon-fenlei"></text>
							<view class="text">分类</view>
						</view>
					</navigator>
					<view class="item" @tap="more(itemChoice.overrank.type, itemChoice.overrank.typename)">
						<view>
							<text class="icon icon-wanben"></text>
							<view class="text">完本</view>
						</view>
					</view>
					<view class="item" @tap="more(itemChoice.dayrank.type, itemChoice.dayrank.typename)">
						<view>
							<text class="icon icon-tuijian"></text>
							<view class="text">每日推荐</view>
						</view>
					</view>
				</view>

				<view class="class-item" v-if="goodFirst">
					<view class="line"></view>
					<view class="item-title">
						<text class="fl">好书推荐</text>
						<text class="fr" @tap="more(itemLists.good.type, itemLists.good.typename)">查看更多></text>
					</view>
					<view class="item-content">
						<view class="content-top" @tap="goDetail(goodFirst.id)">
							<view class="left">
								<image class="book-logo" :src="goodFirst.pic"></image>
							</view>
							<view class="right">
								<view class="book-name">{{goodFirst.title}}</view>
								<view class="book-intro">{{goodFirst.content}}</view>
								<view class="book-info">
									<text class="icon icon-person">{{goodFirst.author}}</text>
									<text class="fr tag">{{goodFirst.hits}}人气</text>
									<text class="fr tag">{{goodFirst.ctitle}}</text>
								</view>
							</view>
						</view>
						<view class="content-bottom" v-if="goodBottom.length > 0">
							<view class="item" v-for="(item, index) in goodBottom" :key="index" @tap="goDetail(item.id)">
								<view>
									<image :src="item.pic"></image>
									<text class="book-name">{{item.title}}</text>
								</view>
							</view>
						</view>
						<view class="content-bottom" v-else>
							<text class="no-more">暂无更多</text>
						</view>
					</view>
				</view>
				<view class="adv" @tap="goAdv(advs_one.link)" v-if="advs_one">
					<web-view v-if="advShow" :src="advs_one.link"></web-view>
					<view class="logo">
						<image :src="advs_one.picpath" mode=""></image>
					</view>
					<view class="intro">
						<view class="h4">{{advs_one.title}}</view>
						<!-- <view class="text-over-1 font-small">这是广告这是广告这是广告这是广告这是广告这是广告</view> -->
					</view>
					<text class="tag">推广</text>
				</view>
				<view class="class-item" v-if="itemLists.dayrank.novel.length > 0">
					<view class="line"></view>
					<view class="item-title">
						<text class="fl">日排行榜</text>
						<text class="fr" @tap="more(itemLists.dayrank.type, itemLists.dayrank.typename)">查看更多></text>
					</view>
					<view class="item-content">
						<view v-for="(item,index) in itemLists.dayrank.novel" :key="index" @tap="goDetail(item.id)">
							<view class="content-top">
								<view class="left">
									<image class="book-logo" :src="item.pic"></image>
								</view>
								<view class="right">
									<view class="book-name">{{item.title}}</view>
									<view class="book-intro">{{item.content}}</view>
									<view class="book-info">
										<text class="icon icon-person">{{item.author}}</text>
										<text class="fr tag">{{item.hits}}人气</text>
										<text class="fr tag">{{item.ctitle}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="adv" @tap="goAdv(advs_two.link)" v-if="advs_two">
					<web-view v-if="advShow" :src="advs_two.link"></web-view>
					<view class="logo">
						<image :src="advs_two.picpath" mode=""></image>
					</view>
					<view class="intro">
						<view class="h4">{{advs_two.title}}</view>
						<!-- <view class="text-over-1 font-small">这是广告这是广告这是广告这是广告这是广告这是广告</view> -->
					</view>
					<text class="tag">推广</text>
				</view>

				<view class="class-item" v-if="itemLists.weekrank.novel.length > 0">
					<view class="line"></view>
					<view class="item-title">
						<text class="fl">周排行榜</text>
						<text class="fr" @tap="more(itemLists.weekrank.type, itemLists.weekrank.typename)">查看更多></text>
					</view>
					<view class="item-content">
						<view v-for="(item,index) in itemLists.weekrank.novel" :key="index" @tap="goDetail(item.id)">
							<view class="content-top">
								<view class="left">
									<image class="book-logo" :src="item.pic"></image>
								</view>
								<view class="right">
									<view class="book-name">{{item.title}}</view>
									<view class="book-intro">{{item.content}}</view>
									<view class="book-info">
										<text class="icon icon-person">{{item.author}}</text>
										<text class="fr tag">{{item.hits}}人气</text>
										<text class="fr tag">{{item.ctitle}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>

				<view class="class-item" v-if="itemLists.monthrank.novel.length > 0">
					<view class="line"></view>
					<view class="item-title">
						<text class="fl">月排行榜</text>
						<text class="fr" @tap="more(itemLists.monthrank.type, itemLists.monthrank.typename)">查看更多></text>
					</view>
					<view class="item-content">
						<view v-for="(item,index) in itemLists.monthrank.novel" :key="index" @tap="goDetail(item.id)">
							<view class="content-top">
								<view class="left">
									<image class="book-logo" :src="item.pic"></image>
								</view>
								<view class="right">
									<view class="book-name">{{item.title}}</view>
									<view class="book-intro">{{item.content}}</view>
									<view class="book-info">
										<text class="icon icon-person">{{item.author}}</text>
										<text class="fr tag">{{item.hits}}人气</text>
										<text class="fr tag">{{item.ctitle}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="isLogin">
					<view v-if="isActive[0]" @tap="changeStyle" class="read-style">
						<view class="line"></view>
						<view class="logo">
							<image :src="urlHttp + userInfo.headimgurl"></image>
						</view>
						<view class="style-content">
							<view class="h3">调整阅读口味</view>
							<view class="text">当前阅读口味为：
								<text v-if="userInfo.read_preference.length > 0">
									<text v-for="(item, index) in userInfo.read_preference" :key="index">
										{{item.title}}、
									</text>
								</text>
								<text v-else>暂无选择</text>
							</view>
						</view>
						<view class="right">
							<text class="icon icon-next"></text>
						</view>
					</view>
				</view>

				<view class="class-item" v-if="newFirst">
					<view class="line"></view>
					<view class="item-title">
						<text class="fl">新书推荐</text>
						<text class="fr" @tap="more(itemLists.new.type, itemLists.new.typename)">查看更多></text>
					</view>
					<view class="item-content">
						<view class="content-top" @tap="goDetail(newFirst.id)">
							<view class="left">
								<image class="book-logo" :src="newFirst.pic"></image>
							</view>
							<view class="right">
								<view class="book-name">{{newFirst.title}}</view>
								<view class="book-intro">{{newFirst.content}}</view>
								<view class="book-info">
									<text class="icon icon-person">{{newFirst.author}}</text>
									<text class="fr tag">{{newFirst.hits}}人气</text>
									<text class="fr tag">{{newFirst.ctitle}}</text>
								</view>
							</view>
						</view>
						<view class="content-bottom" v-if="newBottom.length > 0">
							<view class="item" v-for="(item, index) in newBottom" :key="index" @tap="goDetail(item.id)">
								<view>
									<image :src="item.pic"></image>
									<text class="book-name">{{item.title}}</text>
								</view>
							</view>
						</view>
						<view class="content-bottom" v-else>
							<text class="no-more">暂无更多</text>
						</view>
					</view>
				</view>
				<view class="adv" @tap="goAdv(advs_three.link)" v-if="advs_three">
					<web-view v-if="advShow" :src="advs_three.link"></web-view>
					<view class="logo">
						<image :src="advs_three.picpath" mode=""></image>
					</view>
					<view class="intro">
						<view class="h4">{{advs_three.title}}</view>
						<!-- <view class="text-over-1 font-small">这是广告这是广告这是广告这是广告这是广告这是广告</view> -->
					</view>
					<text class="tag">推广</text>
				</view>
				<view class="class-item" v-if="itemLists.newrank.novel.length > 0">
					<view class="line"></view>
					<view class="item-title">
						<text class="fl">新书排行榜</text>
						<text class="fr" @tap="more(itemLists.newrank.type, itemLists.newrank.typename)">查看更多></text>
					</view>
					<view class="item-content">
						<view v-for="(item,index) in itemLists.newrank.novel" :key="index" @tap="goDetail(item.id)">
							<view class="content-top">
								<view class="left">
									<image class="book-logo" :src="item.pic"></image>
								</view>
								<view class="right">
									<view class="book-name">{{item.title}}</view>
									<view class="book-intro">{{item.content}}</view>
									<view class="book-info">
										<text class="icon icon-person">{{item.author}}</text>
										<text class="fr tag">{{item.hits}}人气</text>
										<text class="fr tag">{{item.ctitle}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>

				<view class="class-item" v-if="itemLists.recentupdate.novel.length > 0">
					<view class="line"></view>
					<view class="item-title">
						<text class="fl">最近更新</text>
						<text class="fr" @tap="more(itemLists.recentupdate.type, itemLists.recentupdate.typename)">查看更多></text>
					</view>
					<view class="item-content">
						<view v-for="(item,index) in itemLists.recentupdate.novel" :key="index" @tap="goDetail(item.id)">
							<view class="content-top">
								<view class="left">
									<image class="book-logo" :src="item.pic"></image>
								</view>
								<view class="right">
									<view class="book-name">{{item.title}}</view>
									<view class="book-intro">{{item.content}}</view>
									<view class="book-info">
										<text class="icon icon-person">{{item.author}}</text>
										<text class="fr tag">{{item.hits}}人气</text>
										<text class="fr tag">{{item.ctitle}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>

				<view class="class-item" v-if="itemLists.overrank.novel.length > 0">
					<view class="line"></view>
					<view class="item-title">
						<text class="fl">完结排行榜</text>
						<text class="fr" @tap="more(itemLists.overrank.type, itemLists.overrank.typename)">查看更多></text>
					</view>
					<view class="item-content" v-if="itemLists.overrank.novel.length > 0">
						<view v-for="(item,index) in itemLists.overrank.novel" :key="index" @tap="goDetail(item.id)">
							<view class="content-top">
								<view class="left">
									<image class="book-logo" :src="item.pic"></image>
								</view>
								<view class="right">
									<view class="book-name">{{item.title}}</view>
									<view class="book-intro">{{item.content}}</view>
									<view class="book-info">
										<text class="icon icon-person">{{item.author}}</text>
										<text class="fr tag">{{item.hits}}人气</text>
										<text class="fr tag">{{item.ctitle}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="item-content" v-else>
						<text class="no-more">暂无完本</text>
					</view>
				</view>
			</view>
			<view class="item" v-if="isActive[0]">
				<view class="class-item">
					<view class="item-title">
						<text class="fl">更多精彩</text>
					</view>
					<view class="item-content">
						<view v-for="(item,index) in moreLists" :key="index" @tap="goDetail(item.id)">
							<view class="content-top">
								<view class="left">
									<image class="book-logo" :src="item.pic"></image>
								</view>
								<view class="right">
									<view class="book-name">{{item.title}}</view>
									<view class="book-intro">{{item.content}}</view>
									<view class="book-info">
										<text class="icon icon-person">{{item.author}}</text>
										<text class="fr tag">{{item.hits}}人气</text>
										<text class="fr tag">{{item.ctitle}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="err-content" v-if="!contentShow">
			<text class="icon icon-cry-face"></text>
			<text class="fl">...加载中</text>
		</view>
	</view>
</template>

<script>
	import urls from '../../utils/urls.js'
	export default {
		data() {
			return {
				current: 0, // 当前分类选项（0-3）
				banner0: [], // swiper组件为单页组件，为了防止二次切换时不能加载图片，所以用了三个swiper
				banner1: [],
				banner2: [],
				contentShow: false, // 是否有内容
				goodFirst: {}, // 好书推荐第一个
				goodBottom: [],
				newFirst: {}, // 新书推荐第一个
				newBottom: [],
				itemLists: {},
				itemChoice: { // 精选
					good: [], // 好书推荐
					new: [], // 新书推荐
					newrank: [], // 新书排行榜
					dayrank: [], // 日排行榜
					weekrank: [], // 周排行榜
					monthrank: [], // 月排行榜
					overrank: [], // 完结排行榜
					recentupdate: [] // 最新更新
				},
				itemBoy: {}, // 男频,
				itemGirl: {}, // 女频,
				// itemPublish: {}, // 出版
				loading: {},
				moreLists: {}, // 精选上拉触底加载更多
				pagenum: 1, // 更多精彩分页加载页码
				isLogin: this.$store.state.isLogin,
				advs_one: {},
				advs_two: {},
				advs_three: {},
			};
		},
		onShow() {

			let id = ''
			if (this.isLogin) {
				id = JSON.parse(uni.getStorageSync('userInfo')).id
			} else {
				id = 0
			}
			uni.request({
				url: urls.HTTP + '/index/getindex',
				method: 'POST',
				success: (res) => {
					// console.log('222', res)
					this.itemChoice = res.data.menu[0]
					this.banner0 = this.itemChoice.banner
					this.itemBoy = res.data.menu[1]
					this.itemGirl = res.data.menu[2]
					this.itemLists = this.itemChoice
					this.goodFirst = this.itemChoice.good.novel[0]
					this.goodBottom = this.itemChoice.good.novel.slice(1)
					this.newFirst = this.itemChoice.new.novel[0]
					this.newBottom = this.itemChoice.new.novel.slice(1)
					uni.hideLoading()
					this.contentShow = true
				}
			})
			uni.request({
				url: urls.HTTP + '/index/novellist',
				method: 'POST',
				data: {
					pagesize: 5,
					pagenum: 1
				},
				success: (res) => {
					// console.log('加载', res)
					this.moreLists = res.data
				}
			})
			uni.request({
				url: urls.HTTP + '/user/usertopinfo',
				method: 'POST',
				data: {
					id: id
				},
				success: (res) => {
					// console.log(res)
					this.$store.dispatch('userInfo', res.data.user)
					uni.setStorageSync('user', res.data.user)
				}
			})
			setTimeout(function() {
				uni.hideLoading()
			}, 5000)
			this.adv()
		},
		onPullDownRefresh: function() {
			this.getList();
		},
		computed: {
			isActive() {
				if (this.current === 0) {
					return [true, false, false]
				} else if (this.current === 1) {
					return [false, true, false]
				} else if (this.current === 2) {
					return [false, false, true]
				}
			},
			// readStyle() {
			// 	if (this.userInfo.sex === 'girl') {
			// 		return '../common/girlChoose'
			// 	} else {
			// 		return '../common/boyChoose'
			// 	}
			// },
			userInfo() {
				return this.$store.state.userInfo
			},
			urlHttp() {
				return urls.UrlHttp
			}
		},
		methods: {
			getList: function() {
				uni.showNavigationBarLoading();
				uni.request({
					url: urls.HTTP + '/index/novellist',
					method: 'POST',
					data: {
						pagesize: 5,
						pagenum: 1
					},
					success: (res) => {
						// console.log('加载', res)
						this.moreLists = res.data
						uni.hideNavigationBarLoading();
						uni.stopPullDownRefresh();
						uni.showToast({
							title: '刷新完成',
							icon: 'none'
						})
					}
				})

			},
			adv() {
				let _this = this
				uni.request({
					url: urls.HTTP + '/index/appad',
					method: 'POST',
					data: {
						id: '11,12,13'
					},
					success: (res) => {
						console.log(res);
						if (res.data.code == 0) {
							if (res.data.advertisement[0].status == 1) {
								res.data.advertisement[0].picpath = urls.ImgUrl + res.data.advertisement[0].picpath,
									_this.advs_one = res.data.advertisement[0]
							} else {
								_this.advs_one = false
							}
							if (res.data.advertisement[1].status == 1) {
								res.data.advertisement[1].picpath = urls.ImgUrl + res.data.advertisement[1].picpath,
									_this.advs_two = res.data.advertisement[1]
							} else {
								_this.advs_two = false
							}
							if (res.data.advertisement[2].status == 1) {
								res.data.advertisement[2].picpath = urls.ImgUrl + res.data.advertisement[2].picpath,
									_this.advs_three = res.data.advertisement[2]
							} else {
								_this.advs_three = false
							}

						} else {
							_this.advs_one = false
							_this.advs_two = false
							_this.advs_three = false
						}
					}
				})
			},
			goAdv: function(e) {
				console.log(e)
				plus.runtime.openURL(e);
			},
			changeClass: function(n) {
				// console.log(n)
				this.current = n
				if (n === 0) {
					this.banner0 = this.itemChoice.banner
					this.itemLists = this.itemChoice
					this.goodFirst = this.itemChoice.good.novel[0]
					this.goodBottom = this.itemChoice.good.novel.slice(1)
					this.newFirst = this.itemChoice.new.novel[0]
					this.newBottom = this.itemChoice.new.novel.slice(1)
				} else if (n === 1) {
					this.banner1 = this.itemBoy.banner
					this.itemLists = this.itemBoy
					this.goodFirst = this.itemBoy.good.novel[0]
					this.goodBottom = this.itemBoy.good.novel.slice(1)
					this.newFirst = this.itemBoy.new.novel[0]
					this.newBottom = this.itemBoy.new.novel.slice(1)
				} else if (n === 2) {
					this.banner2 = this.itemGirl.banner
					this.itemLists = this.itemGirl
					this.goodFirst = this.itemGirl.good.novel[0]
					this.goodBottom = this.itemGirl.good.novel.slice(1)
					this.newFirst = this.itemGirl.new.novel[0]
					this.newBottom = this.itemGirl.new.novel.slice(1)
				}
			},
			swiperTap: function(item) {
				// console.log(item)
				uni.request({
					url: urls.HTTP + '/novel/getnovel',
					method: 'POST',
					data: {
						novelid: item.novelid
					},
					success: (res) => {
						this.$store.dispatch('bookId', res.data.novel[0].source_id)
						uni.navigateTo({
							url: '../common/book/storyDetail?id=' + res.data.novel[0].source_id
						})
					}
				})
			},
			goDetail: function(id) {
				this.$store.dispatch('bookId', id)
				uni.navigateTo({
					url: '../common/book/storyDetail?id=' + id
				})
			},
			more: function(type, title) {
				this.$store.dispatch('novelType', type)
				this.$store.dispatch('pageTitle', title)
				uni.navigateTo({
					url: 'moreBook'
				})
			},
			changeStyle: function() {
				let user = uni.getStorageSync('user')
				if (user.sex === 1) {
					uni.navigateTo({
						url: '../common/boyChoose'
					})
				} else {
					uni.navigateTo({
						url: '../common/girlChoose'
					})
				}
			}
		},
		onReachBottom() {
			if (this.isActive[0]) {
				++this.pagenum
				uni.request({
					url: urls.HTTP + '/index/novellist',
					method: 'POST',
					data: {
						pagesize: 5,
						pagenum: this.pagenum
					},
					success: (res) => {
						// console.log('加载', res)
						if (this.moreLists.length === res.data.length) {
							uni.showToast({
								title: '没有更多啦',
								icon: 'none'
							})
						} else {
							this.moreLists = res.data
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.find {
		background-color: #fff;
		position: relative;
		z-index: 1;

		.line {
			width: 100%;
			height: 10upx;
			background-color: #f0f0f0;
		}

		.h-22 {
			position: fixed;
			z-index: 999;
			top: 0;
			left: 0;
		}

		.class {
			width: 100%;
			padding-left: 20upx;
			box-sizing: border-box;
			position: relative;
			background-color: #fff;
			border-bottom: 1upx solid #f0f0f0;
			position: fixed;
			z-index: 999;
			// top: 44upx;
			left: 0;

			.item {
				width: 80upx;
				height: 60upx;
				font-size: 32upx;
				display: inline-block;
				text-align: center;
				margin: 10upx;
			}

			.on {
				border-bottom: 4upx solid #BD3037;
				color: #BD3037;
			}

			/*#ifndef MP-WEIXIN*/
			.more {
				position: absolute;
				top: 10upx;
				right: 40upx;
				z-index: 10;
			}

			/*#endif*/
		}

		.err-content {
			width: 280upx;
			margin: 0 auto;
			height: 400upx;
			text-align: center;
			line-height: 400upx;
			font-size: 28upx;
			overflow: hidden;

			.icon-cry-face {
				font-size: 48upx;
				float: left;
				margin-right: 20upx;
			}
		}

		.content {
			width: 100%;
			padding-top: 154upx;

			.banner {
				width: 94%;
				height: 280upx;
				margin: 0 auto;
				border-radius: 16upx;
				overflow: hidden;
				box-sizing: border-box;
				box-shadow: 4upx 4upx 4upx #aaaaaa;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.nav {
				width: 100%;
				margin: 20upx 0;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-around;

				.item {
					width: 25%;
					height: 100upx;
					font-size: 28upx;
					text-align: center;
					color: #999;
				}
			}

			.class-item {
				width: 100%;
				padding: 10upx 20upx;
				box-sizing: border-box;

				.item-title {
					overflow: hidden;
					padding: 18upx 0;
					border-bottom: 2upx solid #f0f0f0;

					.fl {
						font-size: 32upx;
						// font-weight: 600;
					}

					.fr {
						font-size: 24upx;
						color: #999;
						margin-top: 10upx;
					}
				}

				.item-content {
					padding: 20upx 0;

					.content-top {
						display: flex;
						flex-flow: row nowrap;
						justify-content: space-between;

						.left {
							margin-right: 20upx;

							.book-logo {
								width: 180upx;
								height: 220upx;
							}
						}

						.right {
							height: 220upx;
							flex: 1;

							.book-name {
								font-size: 32upx;
								// font-weight: 600;
								max-width: 470upx;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}

							.book-intro {
								font-size: 28upx;
								color: #999;
								margin-top: 20upx;
								height: 80upx;
								line-height: 40upx;
								display: block;
								display: -webkit-box;
								max-width: 470upx;
								-webkit-line-clamp: 2;
								-webkit-box-orient: vertical;
								overflow: hidden;
								text-overflow: ellipsis;
							}

							.book-info {
								width: 470upx;
								height: 40upx;
								font-size: 28upx;
								margin-top: 20upx;
								line-height: 40upx;

								.icon-person {
									color: #999;
								}

								.tag {
									padding: 2upx 10upx;
									font-size: 24upx;
									background-color: #f0f0f0;
									color: #999;
									margin: 0 10upx;
									border-radius: 20upx;
								}
							}
						}
					}

					.content-bottom {
						overflow: hidden;
						max-height: 280upx;

						.item {
							width: 23%;
							height: 280upx;
							float: left;
							margin-right: 2%;

							image {
								width: 100%;
								height: 200upx;
							}

							.book-name {
								width: 100%;
								height: 80upx;
								line-height: 36upx;
								font-size: 30upx;
								display: block;
								display: -webkit-box;
								-webkit-line-clamp: 2;
								-webkit-box-orient: vertical;
								overflow: hidden;
								text-overflow: ellipsis;
							}
						}
					}

					.no-more {
						display: inline-block;
						width: 100%;
						height: 100upx;
						line-height: 100upx;
						text-align: center;
						font-size: 32upx;
						color: #999;
					}
				}
			}

			.read-style {
				width: 100%;
				padding: 40upx 20upx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-around;
				align-items: center;

				.logo {
					width: 20%;
					text-align: center;

					image {
						width: 100upx;
						height: 100upx;
						border-radius: 50%;
					}
				}

				.style-content {
					width: 70%;

					.text {
						display: inline-block;
						font-size: 28upx;
						color: #999;
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}

				.right {
					width: 10%;
					text-align: center;
				}
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

		}
	}
</style>
