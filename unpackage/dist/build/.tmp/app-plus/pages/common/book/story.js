(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/book/story"],{"0654":function(t,e,o){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(o("f9ec")),n=i(o("9201"));function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){return o.e("pages/components/sharePop").then(o.bind(null,"bb9d"))},c=function(){return o.e("pages/components/rechargePop").then(o.bind(null,"d8e9"))},u={components:{sharePop:r,rechargePop:c},data:function(){return{animationHeader:{},animTxt:{},animMenu:{},moreIsShow:!1,showHF:!1,story:{},rechargeShow:!1,isMenuShow:!1,shareShow:!1,curChapter:1,chaptersList:[],menuX:0,menuEndX:0,menu_x:0,showBuyBtn:!1,lists:[],share_url:"",share_title:"",share_content:"",isLogin:this.$store.state.isLogin,second:0}},onShareAppMessage:function(t){var e=this.storyData.source_id,o=this.storyData.ncontent,s=this.storyData.pic;this.storyData.url;return{title:o,path:"/pages/common/book/storyDetail?id="+e,imageUrl:s}},onLoad:function(){var e=this,o=this.$store.state.bookId,s="";if(this.isLogin)s=JSON.parse(t.getStorageSync("userInfo")).id;else s=0;t.request({url:a.default.HTTP+"/novel/getnovel",method:"POST",data:{novelid:o,uid:s},success:function(t){e.story=t.data.novel[0],e.share_url=e.story.url,e.share_title=e.story.title,e.share_content=e.story.ncontent,e.comment=t.data.comment,e.comments=t.data.comment.slice(0,3),e.other=t.data.othernovel,e.others=t.data.othernovel.slice(0,4),e.similar=t.data.similarnovel,e.similars=t.data.similarnovel.slice(0,4),e.$store.dispatch("comments",t.data.comment),e.$store.dispatch("story",e.story)}}),0===this.$store.state.storyData.isbuy&&(this.showBuyBtn=!0),t.request({url:a.default.HTTP+"/Generalize/moneylist",method:"POST",success:function(t){e.lists=t.data.money}}),this.timer=setInterval(function(){if(e.second=Number(e.second)+1,9==e.v_time){var t=Date.parse(e.scroll_time)-Date.parse(e.start_time);t<e.old_time&&clearInterval(e.timer)}if(9==e.v_time){t=Date.parse(e.scroll_time)-Date.parse(e.start_time);t<e.old_time&&clearInterval(e.timer)}},1e3)},onShow:function(){var e=this,o=this.$store.state.bookId,s="";s=this.isLogin?JSON.parse(t.getStorageSync("userInfo")).id:0,t.request({url:a.default.HTTP+"/novel/getnovel",method:"POST",data:{novelid:o,uid:s},success:function(t){e.story=t.data.novel[0],e.comment=t.data.comment,e.comments=t.data.comment.slice(0,3),e.other=t.data.othernovel,e.others=t.data.othernovel.slice(0,4),e.similar=t.data.similarnovel,e.similars=t.data.similarnovel.slice(0,4),e.$store.dispatch("comments",t.data.comment),e.$store.dispatch("story",e.story)}});var n=t.createAnimation({duration:500,timingFunction:"ease"});this.animation=n},onPageScroll:function(t){},onUnload:function(){if(this.timer&&(clearInterval(this.timer),this.timer=null),this.isLogin){var e=JSON.parse(t.getStorageSync("userInfo")).id;t.request({url:a.default.HTTP+"/novel/getreadtime",method:"POST",data:{uid:e,time:this.second},success:function(t){}})}},onBackPress:function(){if(this.shareObj.shareMenu.isVisible())return this.shareObj.shareMenu.hide(),this.shareObj.alphaBg.hide(),!0},onReachBottom:function(){s("log","这是触底加载"," at pages\\common\\book\\story.vue:314"),this.goNext(),s("log","触底加载完毕"," at pages\\common\\book\\story.vue:316")},methods:{shareInfo:function(){var e=this,o={href:this.share_url,title:this.share_title,desc:this.share_content},i=[{icon:"/static/sharemenu/wx.png",text:"微信好友"},{icon:"/static/sharemenu/pyq.png",text:"朋友圈"},{icon:"/static/sharemenu/qq.png",text:"QQ"},{icon:"/static/sharemenu/copy.png",text:"复制"},{icon:"/static/sharemenu/more.png",text:"更多"}];this.shareObj=(0,n.default)(o,i,function(e){s("log","点击按钮的序号: "+e," at pages\\common\\book\\story.vue:351");var n={href:o.href||"",title:o.title||"",summary:o.desc||"",success:function(e){var o=t.getStorageSync("userInfo"),n="";n=o?JSON.parse(o).id:0,t.request({url:a.default.HTTP+"/share/novelshare",method:"POST",data:{uid:n},success:function(t){}}),s("log","success:"+JSON.stringify(e)," at pages\\common\\book\\story.vue:374")},fail:function(t){s("log","fail:"+JSON.stringify(t)," at pages\\common\\book\\story.vue:377")}};switch(e){case 0:n.provider="weixin",n.scene="WXSceneSession",n.type=0,n.imageUrl=o.imgUrl||"",t.share(n);break;case 1:n.provider="weixin",n.scene="WXSenceTimeline",n.type=0,n.imageUrl=o.imgUrl||"",t.share(n);break;case 2:n.provider="qq",n.type=1,n.imageUrl=o.imgUrl||"",t.share(n);break;case 3:t.setClipboardData({data:o.href,complete:function(){t.showToast({title:"已复制到剪贴板"})}});break;case 4:plus.share.sendWithSystem({type:"web",title:o.title||"",thumbs:[o.imgUrl||""],href:o.href||"",content:o.desc||""});break}}),this.$nextTick(function(){e.shareObj.alphaBg.show(),e.shareObj.shareMenu.show()})},goNext:function(){var e=this,o=this.storyData.next.id,s="";s=this.isLogin?JSON.parse(t.getStorageSync("userInfo")).id:0;var n=this.storyData.source_id;o?(t.showLoading({title:"loading...",mask:!0}),t.request({url:a.default.HTTP+"/novel/getnovelcontent",method:"POST",data:{id:n,key:o,uid:s},success:function(o){e.$store.dispatch("storyData",o.data),t.pageScrollTo({scrollTop:0,duration:1e3}),t.hideLoading(),0===o.data.isbuy&&(e.showBuyBtn=!0)}})):t.showToast({title:"已经是最后一章了",icon:"none"})},buyIt:function(){var e=this;if(0==this.$store.state.isLogin)t.showModal({title:"提示",content:"您还没有登录，是否登录？",success:function(e){e.confirm&&t.navigateTo({url:"../login"})}});else{var o=this.storyData.id,s="";s=this.isLogin?JSON.parse(t.getStorageSync("userInfo")).id:0;var n=this.storyData.source_id,i=this.storyData.price;t.request({url:a.default.HTTP+"/novel/buynovelchapter",method:"POST",data:{id:n,key:o,price:i,uid:s},success:function(o){1===o.data.code?e.rechargeShow=!0:0===o.data.code&&(e.$store.dispatch("storyData",o.data.data),t.pageScrollTo({scrollTop:0,duration:300}),e.showBuyBtn=!1)}})}},goPrev:function(){var e=this,o=this.storyData.prev.id,s=this.storyData.source_id,n="";n=this.isLogin?JSON.parse(t.getStorageSync("userInfo")).id:0,o?t.request({url:a.default.HTTP+"/novel/getnovelcontent",method:"POST",data:{id:s,key:o,uid:n},success:function(o){e.$store.dispatch("storyData",o.data),t.pageScrollTo({scrollTop:0,duration:300})}}):t.showToast({title:"已经是第一章了",icon:"none"})},menuStart:function(t){this.menuX=t.touches[0].pageX},menuMove:function(t){this.menuEndX=t.changedTouches[0].pageX},menuEnd:function(t){this.menu_x=this.menuEndX-this.menuX,this.menu_x<-10&&(this.animation.left("-100%").step(),this.animMenu=this.animation.export())},showMore:function(){this.moreIsShow=!this.moreIsShow},centerShow:function(){this.showHF=!this.showHF,this.moreIsShow=!1,this.animation.translateY(0,66).step(),this.animationHeader=this.animation.export()},showMenu:function(){var e=this;this.animation.left(0).step(),this.animMenu=this.animation.export(),this.showHF=!1,t.showLoading({mask:!0,title:"正在加载"});var o=this.storyData.novel_id;s("log",o," at pages\\common\\book\\story.vue:597");var n="";n=this.isLogin?JSON.parse(t.getStorageSync("userInfo")).id:0;var i=this.curChapter;t.request({url:a.default.HTTP+"/novel/getchapterlist",method:"POST",data:{id:this.storyData.novel_id,uid:n,pagesize:200,pagenum:i},success:function(o){s("log",o," at pages\\common\\book\\story.vue:617"),e.story=o.data,e.chaptersList=o.data.chapter,t.hideLoading()}})},moreChapter:function(){var e=this;t.showLoading({mask:!0,title:"正在加载"});var o=this.storyData.novel_id;s("log",o," at pages\\common\\book\\story.vue:630");var n="";n=this.isLogin?JSON.parse(t.getStorageSync("userInfo")).id:0,this.curChapter++;var i=this.curChapter;t.request({url:a.default.HTTP+"/novel/getchapterlist",method:"POST",data:{id:o,uid:n,pagesize:200,pagenum:i},success:function(o){e.chaptersList=o.data.chapter,t.hideLoading(),1===o.data.islast&&t.showToast({title:"已经到底啦",icon:"none"})}})},download:function(){var e=this.$store.state.bookId;t.downloadFile({url:a.default.HTTP+"/novel/noveldownload1?novelid="+e,success:function(e){s("log",e," at pages\\common\\book\\story.vue:668"),200===e.statusCode&&t.saveFile({tempFilePath:e.tempFilePath,success:function(e){t.showToast({title:"保存成功："+e.savedFilePath,icon:"none"})}})}})},goComment:function(){var e=this,o=this.storyData.novel_id,s="";s=this.isLogin?JSON.parse(t.getStorageSync("userInfo")).id:0,t.request({url:a.default.HTTP+"/novel/getnovel",method:"POST",data:{novelid:o,uid:s},success:function(o){e.$store.dispatch("comments",o.data.comment),t.navigateTo({url:"allComments"})}})},goChapter:function(e){var o=this;this.isMenuShow=!1;var s=this.storyData.source_id,n=e.id,i="";i=this.isLogin?JSON.parse(t.getStorageSync("userInfo")).id:0,t.request({url:a.default.HTTP+"/novel/getnovelcontent",method:"POST",data:{id:s,key:n,uid:i},success:function(e){o.$store.dispatch("storyData",e.data),t.redirectTo({url:"story"})}})},goDetail:function(){var e=this.storyData.novel_id;t.redirectTo({url:"storyDetail?id="+e})},closeSP:function(t){this.shareShow=t},closeRP:function(t){this.rechargeShow=t}},computed:{storyData:function(){return this.$store.state.storyData},contentData:function(){return this.storyData.content},updateTime:function(){var t=parseInt((new Date).getTime()/1e3),e=parseInt(t-this.story.update_time);return e<0?"1秒":e>=0&&e<60?e+"秒":e>=60&&e<3600?Math.ceil(e/60)+"分钟":e>=3600&&e<86400?Math.ceil(e/3600)+"小时":e>=86400&&e<2592e3?Math.ceil(e/86400)+"天":e>=2592e3&&e<31104e3?Math.ceil(e/2592e3)+"月":Math.ceil(e/31104e3)+"年"}}};e.default=u}).call(this,o("6e42")["default"],o("0de9")["default"])},2600:function(t,e,o){"use strict";o.r(e);var s=o("7749"),a=o("97b7");for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);o("39ba");var i,r=o("f0c5"),c=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"2eced4cf",null,!1,s["a"],i);e["default"]=c.exports},"39ba":function(t,e,o){"use strict";var s=o("57cf"),a=o.n(s);a.a},"57cf":function(t,e,o){},7749:function(t,e,o){"use strict";var s,a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"b",function(){return a}),o.d(e,"c",function(){return n}),o.d(e,"a",function(){return s})},"97b7":function(t,e,o){"use strict";o.r(e);var s=o("0654"),a=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},be3f:function(t,e,o){"use strict";(function(t){o("62b9"),o("921b");s(o("66fd"));var e=s(o("2600"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])}},[["be3f","common/runtime","common/vendor"]]]);