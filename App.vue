<script>
	export default {
		onLaunch: function() {
			let user = uni.getStorageSync('userInfo')
			if(user){
				this.$store.dispatch('isLogin', true)
				console.log(this.$store.state.isLogin)
			} 
		},
		onShow: function() {
      
		},
		onHide: function() {
		}
	}
</script>

<style>
	/*每个页面公共css */
@font-face {
  font-family: 'iconfont';  /* project id 1159150 */
  src: url('https://at.alicdn.com/t/font_1159150_9ajvd39yt6n.eot');
  src: url('https://at.alicdn.com/t/font_1159150_9ajvd39yt6n.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_1159150_9ajvd39yt6n.woff2') format('woff2'),
  url('https://at.alicdn.com/t/font_1159150_9ajvd39yt6n.woff') format('woff'),
  url('https://at.alicdn.com/t/font_1159150_9ajvd39yt6n.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_1159150_9ajvd39yt6n.svg#iconfont') format('svg');
}
/*NEW*/
@font-face {
  font-family: 'iconfont';  /* project id 1293028 */
  src: url('https://at.alicdn.com/t/font_1293028_ngag06ugzz.eot');
  src: url('https://at.alicdn.com/t/font_1293028_ngag06ugzz.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_1293028_ngag06ugzz.woff2') format('woff2'),
  url('https://at.alicdn.com/t/font_1293028_ngag06ugzz.woff') format('woff'),
  url('https://at.alicdn.com/t/font_1293028_ngag06ugzz.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_1293028_ngag06ugzz.svg#iconfont') format('svg');
}
 
/* 刘海屏状态栏高度适配 */
@font-face {
  font-family: 'iconfont';  /* project id 1293028 */
  src: url('https://at.alicdn.com/t/font_1293028_ngag06ugzz.eot');
  src: url('https://at.alicdn.com/t/font_1293028_ngag06ugzz.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_1293028_ngag06ugzz.woff2') format('woff2'),
  url('https://at.alicdn.com/t/font_1293028_ngag06ugzz.woff') format('woff'),
  url('https://at.alicdn.com/t/font_1293028_ngag06ugzz.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_1293028_ngag06ugzz.svg#iconfont') format('svg');
}

.h-22 {
  width: 100%;
  height: var(--status-bar-height);
}
.top {
  top: var(--status-bar-height);
}
.to-top {
  top: 64upx;
}
.c-red {
  color: #BD3037;
}
.c-orange {
  color: #ff9744;
}
.c-blue {
  color: #65bffb;
}
.c-green {
  color: #75d16e;
}
.c-yellow {
  color: yellow;
}
.bg-red {
  background-color: #BD3037;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.h3 {
  font-size: 32upx;
  font-weight: 600;
  color: #000;
}
.h4 {
  font-size: 32upx;
  font-weight: 600;
  color: #515151;
}
.span-gray {
  font-size: 28upx;
  color: #999;
}
.font-big {
  font-size: 32upx;
}
.font-middle {
  font-size: 28upx;
}
.font-small {
  font-size: 24upx;
}
.text-over-1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-over-2 {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-over-3 {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.icon {
  font-family: 'iconfont';
}
.icon-phone:before {
  content: '\e65f';
}
.icon-qq:before {
  content: '\e6b4';
}
.icon-weixin:before {
  content: '\e73b';
}
.icon-search:before {
  content: '\e61a';
}
.icon-more:before {
  content: '\e60d';
}
.icon-paihang:before {
  content: '\e7bc';
  color: #fed468;
  font-size: 58upx;
}
.icon-fenlei:before {
  content: '\e609';
  color: #79bdfa;
  font-size: 58upx;
}
.icon-wanben:before {
  content: '\e601';
  color: #9bd694;
  font-size: 58upx;
}
.icon-tuijian:before {
  content: '\e77a';
  color: #ff8989;
  font-size: 58upx;
}
.icon-person:before{
  content: '\e65e';
}
.icon-next:before {
  content: '\e64a';
}
.icon-wallet:before {
  content: '\e6e7';
}
.icon-recharge:before {
  content: '\e604';
}
.icon-recommend:before {
  content: '\e660';
}
.icon-message:before {
  content: '\e628';
}
.icon-clearStore:before {
  content: '\e616';
}
.icon-reset:before {
  content: '\e61b';
}
.icon-feedback:before {
  content: '\e6cf';
}
.icon-support:before {
  content: '\e619';
}
.icon-back:before {
  content: '\e62b';
}
.icon-cry-face:before {
  content: '\e6c0';
}
.icon-photo:before {
  content: '\e6ab';
}
.icon-camera:before {
  content: '\e61c';
}
.icon-male:before {
  content: '\e618';
  color: #04a1e2;
}
.icon-female:before {
  content: '\e617';
  color: #cf3ec6;
}
.icon-red-packet:before {
  content: '\e623';
}
.icon-weixinbangding:before {
  content: '\e69e0';
}
.icon-qqbangding:before {
  content: '\e6320';
}
.icon-touxiang:before {
  content: '\e6000';
}
.icon-xiugainicheng:before {
  content: '\e6400';
}
.icon-shujia:before {
  content: '\e6180';
}



.icon-gift:before {
  content: '\e649';
}
.icon-small-person:before {
  content: '\e673';
}
.icon-small-file:before {
  content: '\e613';
}
.icon-small-book:before {
  content: '\e605';
}
.icon-small-phone:before {
  content: '\e603';
}
.icon-enjoy:before {
  content: '\e602';
}
.icon-small-money:before {
  content: '\e62c';
  color: yellow;
}
.icon-small-grow:before {
  content: '\e635';
  color: #65bffb;
}
.icon-boy:before {
  content: '\e648';
}
.icon-girl:before {
  content: '\e64b';
}
.icon-dot:before {
  content: '\ec1e';
}
.icon-withdraw:before {
  content: '\e688';
}
.icon-book-city:before {
  content: '\e61e';
}
.icon-book:before {
  content: '\e809';
}
.icon-share:before {
  content: '\e61d';
}
.icon-prev-step:before {
  content: '\e60e';
}
.icon-next-step:before {
  content: '\e60f';
}
.icon-download:before {
  content: '\e675';
}
.icon-more-vertical:before {
  content: '\e670';
}
.icon-star-circle:before {
  content: '\e63f';
}
.icon-menu:before {
  content: '\e62a';
}
.icon-comment:before {
  content: '\e606';
}
.icon-down:before {
  content: '\e695';
}
.icon-edit:before {
  content: '\e608';
}
.icon-thumbs-up:before {
  content: '\e627';
}
.icon-frends-circle:before {
  content: '\e73c';
}
.icon-send:before {
  content: '\e652';
}
.icon-minus:before {
  content: '\e611';
}
.icon-add:before {
  content: '\e63d';
}
.icon-dot:before {
  content: '\e621';
}
.icon-refresh:before {
  content: '\e61f';
}
.icon-history:before {
  content: '\e718';
}
.icon-close:before {
  content: '\e620';
}
.icon-wx-pay:before {
  content: '\e607';
  color: #6bcc03;
}
.icon-zfb-pay:before {
  content: '\e622';
  color: #06b4fd;
}
</style>
