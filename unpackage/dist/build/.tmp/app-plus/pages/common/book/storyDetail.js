(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/book/storyDetail"],{"159e":function(t,e,o){"use strict";var s,a=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.comments,function(e,o){var s=t.hasUp(e.id);return{$orig:t.__get_orig(e),m0:s}}));t.$mp.data=Object.assign({},{$root:{l0:o}})},n=[];o.d(e,"b",function(){return a}),o.d(e,"c",function(){return n}),o.d(e,"a",function(){return s})},"2ef1":function(t,e,o){"use strict";var s=o("5d09"),a=o.n(s);a.a},"5d09":function(t,e,o){},a249:function(t,e,o){"use strict";o.r(e);var s=o("c749"),a=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},ab39:function(t,e,o){"use strict";(function(t){o("62b9"),o("921b");s(o("66fd"));var e=s(o("cf51"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},c749:function(t,e,o){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(o("f9ec")),n=i(o("9201"));function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){return Promise.all([o.e("common/vendor"),o.e("pages/components/wxInfoDialog")]).then(o.bind(null,"821d"))},c=function(){return o.e("pages/components/sharePop").then(o.bind(null,"bb9d"))},u={components:{wxInfoDialog:r,sharePop:c},data:function(){return{showShare:!1,story:{},isLess:!0,comment:[],comments:[],other:[],others:[],animTitle:{},current:0,similar:[],similars:[],isTop:!1,showDialog:!1,share_url:"",share_title:"",share_content:"",advs:{},isLogin:this.$store.state.isLogin,newest:[]}},onLoad:function(e){var o=this,n=e.id;t("log",n," at pages\\common\\book\\storyDetail.vue:211");var i=s.getStorageSync("userInfo");t("log",i," at pages\\common\\book\\storyDetail.vue:213");var r="";i&&(r=JSON.parse(i).id),t("log",n+"++++++"+r," at pages\\common\\book\\storyDetail.vue:218"),s.request({url:a.default.HTTP+"/novel/getnovel",method:"POST",data:{novelid:n,uid:r},success:function(e){t("log",e," at pages\\common\\book\\storyDetail.vue:227"),o.story=e.data.novel[0],o.share_url=o.story.url,o.share_title=o.story.title,o.share_content=o.story.ncontent,o.comment=e.data.comment,o.comments=e.data.comment.slice(0,3),o.other=e.data.othernovel,o.others=e.data.othernovel.slice(0,4),o.newest=e.data.newest,o.similar=e.data.similarnovel,o.similars=e.data.similarnovel.slice(0,4),o.$store.dispatch("comments",e.data.comment),o.$store.dispatch("story",o.story)}}),this.adv()},onBackPress:function(){if(this.shareObj.shareMenu.isVisible())return this.shareObj.shareMenu.hide(),this.shareObj.alphaBg.hide(),!0},onShow:function(){var e=this,o=s.createAnimation({duration:1e3});this.animation=o;var n=this.$store.state.bookId,i=s.getStorageSync("userInfo"),r="";i&&(r=JSON.parse(i).id),t("log",n," at pages\\common\\book\\storyDetail.vue:266"),s.request({url:a.default.HTTP+"/novel/getnovel",method:"POST",data:{novelid:n,uid:r},success:function(o){t("log",o," at pages\\common\\book\\storyDetail.vue:275"),e.story=o.data.novel[0],e.comment=o.data.comment,e.comments=o.data.comment.slice(0,3),e.other=o.data.othernovel,e.others=o.data.othernovel.slice(0,4),e.newest=o.data.newest,e.similar=o.data.similarnovel,e.similars=o.data.similarnovel.slice(0,4),e.$store.dispatch("comments",o.data.comment),e.$store.dispatch("story",e.story)}})},onShareAppMessage:function(){var t=this.story.source_id;return{title:this.story.content,path:"/pages/common/book/storyDetail?id="+t,imageUrl:this.story.pic}},onPageScroll:function(t){t.scrollTop>20?(this.animation.opacity(1).step(),this.animTitle=this.animation.export()):t.scrollTop<20&&(this.animation.opacity(0).step(),this.animTitle=this.animation.export())},methods:{adv:function(){var e=this;s.request({url:a.default.HTTP+"/index/appad",method:"POST",data:{id:7},success:function(o){t("log",o," at pages\\common\\book\\storyDetail.vue:315"),0==o.data.code&&1==o.data.advertisement[0].status?(o.data.advertisement[0].picpath=a.default.ImgUrl+o.data.advertisement[0].picpath,e.advs=o.data.advertisement[0]):e.advs=!1}})},shareInfo:function(){var e=this,o={href:this.share_url,title:this.share_title,desc:this.share_content},i=[{icon:"/static/sharemenu/wx.png",text:"微信好友"},{icon:"/static/sharemenu/pyq.png",text:"朋友圈"},{icon:"/static/sharemenu/qq.png",text:"QQ"},{icon:"/static/sharemenu/copy.png",text:"复制"},{icon:"/static/sharemenu/more.png",text:"更多"}];this.shareObj=(0,n.default)(o,i,function(e){t("log","点击按钮的序号: "+e," at pages\\common\\book\\storyDetail.vue:357");var n={href:o.href||"",title:o.title||"",summary:o.desc||"",success:function(e){var o=s.getStorageSync("userInfo"),n="";n=o?JSON.parse(o).id:0,s.request({url:a.default.HTTP+"/share/novelshare",method:"POST",data:{uid:n},success:function(t){}}),t("log","success:"+JSON.stringify(e)," at pages\\common\\book\\storyDetail.vue:380")},fail:function(e){t("log","fail:"+JSON.stringify(e)," at pages\\common\\book\\storyDetail.vue:383")}};switch(e){case 0:n.provider="weixin",n.scene="WXSceneSession",n.type=0,n.imageUrl=o.imgUrl||"",s.share(n);break;case 1:n.provider="weixin",n.scene="WXSenceTimeline",n.type=0,n.imageUrl=o.imgUrl||"",s.share(n);break;case 2:n.provider="qq",n.type=1,n.imageUrl=o.imgUrl||"",s.share(n);break;case 3:s.setClipboardData({data:o.href,complete:function(){s.showToast({title:"已复制到剪贴板"})}});break;case 4:plus.share.sendWithSystem({type:"web",title:o.title||"",thumbs:[o.imgUrl||""],href:o.href||"",content:o.desc||""});break}}),this.$nextTick(function(){e.shareObj.alphaBg.show(),e.shareObj.shareMenu.show()})},closepop:function(t){this.showShare=!1},seeTa:function(t){this.$store.dispatch("otherUser",t.user),s.navigateTo({url:"otherUserInfo"})},showMore:function(){this.isLess=!this.isLess},editReview:function(){s.navigateTo({url:"editReview"})},closeDialog:function(t){this.showDialog=t},goStory:function(t){var e=this,o=this.$store.state.story.source_id,n=t,i="";i=this.isLogin?JSON.parse(s.getStorageSync("userInfo")).id:0,s.request({url:a.default.HTTP+"/novel/getnovelcontent",method:"POST",data:{id:o,key:n,uid:i},success:function(t){e.$store.dispatch("storyData",t.data),s.redirectTo({url:"story"})}})},readStory:function(){var t=this,e=this.story.id,o=s.getStorageSync("userInfo"),n="";o&&(n=JSON.parse(o).id),s.request({url:a.default.HTTP+"/novel/readnovel",method:"POST",data:{novel_id:e,uid:n},success:function(e){t.$store.dispatch("storyData",e.data),s.redirectTo({url:"story"})}})},goChapters:function(){this.$store.dispatch("pageTitle",this.story.title),s.navigateTo({url:"chapters"})},addToShelf:function(){var e=this,o=this.story.id;if(0==this.$store.state.isLogin)s.showModal({title:"提示",content:"您还没有登录，是否登录？",success:function(t){t.confirm&&s.navigateTo({url:"../login"})}});else{var n=s.getStorageSync("userInfo"),i="";n&&(i=JSON.parse(n).id),t("log",i," at pages\\common\\book\\storyDetail.vue:544"),s.request({url:a.default.HTTP+"/Bookshelf/addbookshelf",method:"POST",data:{uid:i,novelid:o},success:function(t){0===t.data.code?(e.story.isbookshelf=0,s.showToast({title:"已成功加入书架",icon:"none"})):s.showToast({title:t.data.error})}})}},goDetail:function(e){t("log",e," at pages\\common\\book\\storyDetail.vue:570"),this.$store.dispatch("comment",e),s.navigateTo({url:"commontDetail"})},thumbsUp:function(t){var e=t.id,o=s.getStorageSync("userInfo"),n="";o&&(n=JSON.parse(o).id);var i=t.user.id;this.current=e,s.request({url:a.default.HTTP+"/comment/upcomment",method:"POST",data:{cid:e,uid:n,fuid:i},success:function(e){0===e.data.code?t.up++:s.showToast({title:"请不要重复点赞",icon:"none"})}})},hasUp:function(t){return t===this.current},goAdv:function(t){this.advShow=!1,clearInterval(this.interval),clearTimeout(this.timeOut),plus.runtime.openURL(t)}},computed:{rate:function(){return Number(this.story.rating)},isSeeOne:function(){return this.others.length>4},id:function(){return s.getStorageSync("user").id},isAdd:function(){return 0===this.story.isbookshelf},urlHttp:function(){return a.default.UrlHttp}}};e.default=u}).call(this,o("0de9")["default"],o("6e42")["default"])},cf51:function(t,e,o){"use strict";o.r(e);var s=o("159e"),a=o("a249");for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);o("2ef1");var i,r=o("f0c5"),c=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"795b0ec2",null,!1,s["a"],i);e["default"]=c.exports}},[["ab39","common/runtime","common/vendor"]]]);