(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-book-otherUserInfo"],{"0d80":function(t,e,i){"use strict";i.r(e);var o=i("b9f6"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},6554:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"user-info"},[i("v-uni-view",{staticClass:"header",style:{"background-image":"url("+t.imgUrl(t.otherUser.headimgurl)+")"}},[i("v-uni-view",{staticClass:"glass-bg"}),i("v-uni-view",{staticClass:"h-header"},[i("v-uni-view",{staticClass:"hh-top"},[i("v-uni-navigator",{attrs:{"open-type":"navigateBack"}},[i("v-uni-text",{staticClass:"fl icon icon-back"})],1),i("v-uni-view",{staticClass:"focus f-right"},[i("v-uni-text",{class:{active:t.isFocus},on:{click:function(e){e=t.$handleEvent(e),t.focusTa(e)}}},[t._v(t._s(t.focusTxt))])],1)],1),i("v-uni-view",{staticClass:"hh-top hh-bg-top",attrs:{animation:t.animTitle}},[i("v-uni-navigator",{attrs:{"open-type":"navigateBack"}},[i("v-uni-text",{staticClass:"fl icon icon-back"})],1),i("v-uni-view",{staticClass:"focus f-right"},[i("v-uni-text",{class:{active:t.isFocus},on:{click:function(e){e=t.$handleEvent(e),t.focusTa(e)}}},[t._v(t._s(t.focusTxt))])],1)],1),i("v-uni-view",{staticClass:"hh-bottom"},[i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"logo"},[i("v-uni-image",{attrs:{src:t.imgUrl(t.otherUser.headimgurl)}})],1),i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.otherUser.username))]),i("v-uni-view",{staticClass:"box-bottom"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-text",[t._v("关注")]),i("v-uni-text",[t._v(t._s(t.user.concernNumber))])],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",[t._v("粉丝")]),i("v-uni-text",[t._v(t._s(t.user.fansNumber))])],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"bookshelf"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v("在读")]),i("v-uni-text",{staticClass:"icon icon-next fr"}),i("v-uni-text",{staticClass:"fr"},[t._v("全部"+t._s(t.bookshelf.count)+"本")])],1),i("v-uni-scroll-view",{staticClass:"bookshelf-content",attrs:{"scroll-x":"true"}},[t._l(t.bookshelf.novel,function(e,o){return[i("v-uni-view",{key:o+"_0",staticClass:"item",on:{click:function(i){i=t.$handleEvent(i),t.goDetail(e.id)}}},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:t.imgUrl(e.pic),mode:""}})],1),i("v-uni-text",{staticClass:"item-title text-over-1"},[t._v(t._s(e.title))])],1)]})],2)],1),i("v-uni-view",{staticClass:"comment"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v("动态")])],1),i("v-uni-view",{staticClass:"comment-content"},t._l(t.comment,function(e,o){return i("v-uni-view",{key:o,staticClass:"item"},[i("v-uni-view",{staticClass:"ac-title"},[i("v-uni-view",{staticClass:"fl logo"},[i("v-uni-image",{attrs:{src:t.imgUrl(t.otherUser.headimgurl)}})],1),i("v-uni-text",{staticClass:"fl f-14"},[t._v(t._s(e.user.username))])],1),i("v-uni-view",{staticClass:"ac-comment"},[i("v-uni-view",{staticClass:"acc-title f-16"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"acc-content f-14 text-over-3"},[t._v(t._s(e.content))])],1),i("v-uni-view",{staticClass:"book",on:{click:function(i){i=t.$handleEvent(i),t.goDetail(e.novel.id)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:e.novel.pic}})],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"book-title"},[t._v(t._s(e.novel.title))]),i("v-uni-view",{staticClass:"book-info"},[i("v-uni-text",[t._v(t._s(e.novel.author))]),t._v("|"),i("v-uni-text",[t._v(t._s(e.novel.category))])],1)],1)],1)],1)}),1)],1)],1)},n=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n})},"6b2f":function(t,e,i){"use strict";var o=i("f02f"),n=i.n(o);n.a},9404:function(t,e,i){"use strict";i.r(e);var o=i("6554"),n=i("0d80");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("6b2f");var s=i("2877"),r=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"2c4116c6",null);e["default"]=r.exports},b9f6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("d348"));function n(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{user:{},comment:[],bookshelf:{},focusTxt:"关注",animTitle:{},isLogin:this.$store.state.isLogin}},onLoad:function(){var t=this,e=this.$store.state.otherUser.id,i=0;1==this.isLogin&&(i=this.$store.state.userInfo.id),uni.request({url:o.default.HTTP+"/index/getuserinfo",method:"POST",data:{fuid:e,uid:i},success:function(e){t.user=e.data.user,t.comment=e.data.comment,t.bookshelf=e.data.bookshelf,t.focusTxt=e.data.tip}})},onShow:function(){var t=uni.createAnimation({duration:1e3});this.animation=t},onPageScroll:function(t){t.scrollTop>20?(this.animation.opacity(1).step(),this.animTitle=this.animation.export()):t.scrollTop<20&&(this.animation.opacity(0).step(),this.animTitle=this.animation.export())},methods:{imgUrl:function(t){return o.default.UrlHttp+t},goDetail:function(t){uni.navigateTo({url:"storyDetail?id="+t})},focusTa:function(){var t=this;if(!this.isLogin)return uni.showModal({title:"提示",content:"您还没有登录，是否登录？",success:function(t){t.confirm&&uni.navigateTo({url:"../login"})}}),!1;var e=this.otherUser.id,i=this.userInfo.id;e!==i?uni.request({url:o.default.HTTP+"/user/follow",method:"POST",data:{fuid:e,uid:i},success:function(e){0===e.data.code?(t.focusTxt=e.data.tip,uni.showToast({title:e.data.error})):uni.showToast({title:e.data.error,icon:"none"})}}):uni.showToast({title:"自己不能关注自己哦",icon:"none"})}},computed:{userInfo:function(){return this.$store.state.userInfo},otherUser:function(){return this.$store.state.otherUser},isFocus:function(){return"已关注"===this.focusTxt}}};e.default=a},d348:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={HTTP:"https://xs.it-xd.cn/api",UrlHttp:"https://xs.it-xd.cn",ImgUrl:"https://xs.it-xd.cn"};e.default=o},eafc:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.user-info .header[data-v-2c4116c6]{width:100%;position:absolute;top:0;left:0;background-repeat:no-repeat;background-size:100%;background-attachment:fixed;overflow:hidden;z-index:3}.user-info .header .glass-bg[data-v-2c4116c6]{width:100%;height:100%;background:inherit;-webkit-filter:blur(%?20?%);filter:blur(%?20?%);position:absolute;top:0;left:0;z-index:4}.user-info .header .h-header[data-v-2c4116c6]{width:100%;position:relative;z-index:5}.user-info .header .h-header .hh-top[data-v-2c4116c6]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?44?% %?20?% 0 %?20?%;line-height:%?88?%;overflow:hidden;position:fixed;top:0;left:0;z-index:990}.user-info .header .h-header .hh-top .focus[data-v-2c4116c6]{width:%?200?%;font-size:%?28?%}.user-info .header .h-header .hh-top .focus uni-text[data-v-2c4116c6]{height:%?40?%;line-height:%?40?%;display:inline-block;padding:%?4?% %?8?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;border:%?1?% solid #bd3037;color:#bd3037;text-align:center}.user-info .header .h-header .hh-top .focus .active[data-v-2c4116c6]{background-color:#bd3037;color:#fff}.user-info .header .h-header .hh-top .f-left[data-v-2c4116c6]{margin-left:%?100?%}.user-info .header .h-header .hh-top .f-right[data-v-2c4116c6]{margin-right:%?40?%}.user-info .header .h-header .hh-bg-top[data-v-2c4116c6]{z-index:999;opacity:0;background-color:#fff}.user-info .header .h-header .hh-bottom[data-v-2c4116c6]{width:100%;padding-top:%?200?%;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(#fff));background:-webkit-linear-gradient(hsla(0,0%,100%,0),#fff);background:-o-linear-gradient(hsla(0,0%,100%,0),#fff);background:linear-gradient(hsla(0,0%,100%,0),#fff);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding-bottom:%?20?%}.user-info .header .h-header .hh-bottom .box[data-v-2c4116c6]{width:80%;height:%?280?%;margin:0 auto;-webkit-border-radius:%?20?%;border-radius:%?20?%;-webkit-box-shadow:0 0 %?20?% #999;box-shadow:0 0 %?20?% #999;position:relative;z-index:6;background-color:#fff}.user-info .header .h-header .hh-bottom .box .logo[data-v-2c4116c6]{width:30%;position:absolute;top:%?-70?%;left:35%;text-align:center}.user-info .header .h-header .hh-bottom .box .logo uni-image[data-v-2c4116c6]{width:%?140?%;height:%?140?%;-webkit-border-radius:50%;border-radius:50%}.user-info .header .h-header .hh-bottom .box .name[data-v-2c4116c6]{margin-top:%?80?%;text-align:center;font-size:%?36?%}.user-info .header .h-header .hh-bottom .box .box-bottom[data-v-2c4116c6]{margin-top:%?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.user-info .header .h-header .hh-bottom .box .box-bottom .item[data-v-2c4116c6]{margin:0 %?20?%;font-size:%?32?%;color:#999}.user-info .bookshelf[data-v-2c4116c6]{margin-top:%?540?%}.user-info .bookshelf .bookshelf-content[data-v-2c4116c6]{white-space:nowrap;width:100%;height:%?280?%;padding:%?20?%;margin:0 auto}.user-info .bookshelf .bookshelf-content .item[data-v-2c4116c6]{width:24%;margin-right:%?20?%;display:inline-block;vertical-align:top}.user-info .bookshelf .bookshelf-content .item .img[data-v-2c4116c6]{display:inline-block}.user-info .bookshelf .bookshelf-content .item .img uni-image[data-v-2c4116c6]{width:%?170?%;height:%?220?%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.user-info .bookshelf .bookshelf-content .item .item-title[data-v-2c4116c6]{display:block;width:90%;font-size:%?30?%;line-height:%?40?%}.user-info .comment[data-v-2c4116c6]{width:100%;background-color:#fff}.user-info .comment .comment-content[data-v-2c4116c6]{width:90%;margin:0 auto}.user-info .comment .comment-content .item[data-v-2c4116c6]{width:100%;padding:%?20?% 0;border-bottom:%?1?% solid #eee}.user-info .comment .comment-content .item .f-16[data-v-2c4116c6]{font-size:%?32?%;color:#333}.user-info .comment .comment-content .item .f-14[data-v-2c4116c6]{font-size:%?28?%;color:#666}.user-info .comment .comment-content .item .f-12[data-v-2c4116c6]{font-size:%?24?%;color:#999;margin-left:%?10?%}.user-info .comment .comment-content .item .ac-title[data-v-2c4116c6]{overflow:hidden;line-height:%?60?%}.user-info .comment .comment-content .item .ac-title .logo[data-v-2c4116c6]{width:%?80?%;height:%?60?%}.user-info .comment .comment-content .item .ac-title .logo uni-image[data-v-2c4116c6]{width:%?60?%;height:%?60?%;-webkit-border-radius:50%;border-radius:50%}.user-info .comment .comment-content .item .acc-title[data-v-2c4116c6]{margin:%?10?% 0}.user-info .comment .comment-content .item .book[data-v-2c4116c6]{width:96%;margin:%?20?% auto;-webkit-box-shadow:0 0 %?16?% #999;box-shadow:0 0 %?16?% #999;-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.user-info .comment .comment-content .item .book .left[data-v-2c4116c6]{width:24%}.user-info .comment .comment-content .item .book .left uni-image[data-v-2c4116c6]{width:%?120?%;height:%?160?%}.user-info .comment .comment-content .item .book .right[data-v-2c4116c6]{line-height:%?80?%}.user-info .comment .comment-content .item .book .right .book-title[data-v-2c4116c6]{font-size:%?32?%}.user-info .comment .comment-content .item .book .right .book-info[data-v-2c4116c6]{font-size:%?28?%;color:#999}.user-info .title[data-v-2c4116c6]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?20?%;line-height:%?80?%;font-size:%?32?%;font-weight:600}.user-info .title .fr[data-v-2c4116c6]{font-size:%?28?%;color:#888;margin-right:%?10?%;font-weight:400}',""])},f02f:function(t,e,i){var o=i("eafc");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("34ae9541",o,!0,{sourceMap:!1,shadowMode:!1})}}]);