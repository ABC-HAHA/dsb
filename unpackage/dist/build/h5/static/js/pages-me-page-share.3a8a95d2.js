(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-page-share"],{"134b":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.showMe,expression:"showMe"}],staticClass:"share-pop"},[n("v-uni-view",{staticClass:"mask",on:{click:function(t){t=e.$handleEvent(t),e.close(t)}}}),n("v-uni-view",{staticClass:"pop-content"},[n("v-uni-view",{staticClass:"share-icon"},[n("v-uni-view",{staticClass:"item",on:{click:function(t){t=e.$handleEvent(t),e.shareToWeixin("WXSceneSession",e.story)}}},[n("v-uni-text",{staticClass:"icon icon-weixin"})],1),n("v-uni-view",{staticClass:"item",on:{click:function(t){t=e.$handleEvent(t),e.shareToWeixin("WXSenceTimeline",e.story)}}},[n("v-uni-text",{staticClass:"icon icon-frends-circle"})],1)],1),n("v-uni-view",{staticClass:"cancle",on:{click:function(t){t=e.$handleEvent(t),e.close(t)}}},[e._v("取消")])],1)],1)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"25d8":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-6fc48e10]{background:-webkit-linear-gradient(top,#e75045,#e75045 50%);width:100%;height:100vh}.share[data-v-6fc48e10]{width:100%;height:100vh;position:relative;z-index:2;background:#e75045}.share .share-bg[data-v-6fc48e10]{width:80%;min-height:400px;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;z-index:1}.share .logo[data-v-6fc48e10]{position:absolute;top:7vh;left:10%;width:%?130?%;height:%?130?%;-webkit-border-radius:50%;border-radius:50%;z-index:2}.share .name[data-v-6fc48e10]{position:absolute;top:8vh;left:30%;z-index:2;color:#fff;font-size:20px}.share .name1[data-v-6fc48e10]{position:absolute;top:13vh;left:30%;z-index:2;color:#fff;font-size:14px;background:#fff;-webkit-border-radius:25px;border-radius:25px;color:#e12a1a;padding-left:5px}.share .QR-code[data-v-6fc48e10]{position:absolute;top:38vh;left:32%;z-index:2;width:%?280?%;height:%?280?%}.share .welfare[data-v-6fc48e10]{position:absolute;bottom:23vh;left:0;z-index:2;width:100%;height:%?88?%;line-height:%?88?%;text-align:center;overflow:hidden}.share .welfare .gold[data-v-6fc48e10]{display:inline-block;margin-left:15%;margin-right:%?40?%;float:left;font-size:%?34?%;line-height:%?88?%}.share .welfare .gold .coin[data-v-6fc48e10]{font-size:%?36?%;color:red;font-weight:600}.share .welfare .withdraw[data-v-6fc48e10]{float:left;display:inline-block;width:%?160?%;height:%?72?%;padding:0;margin-top:%?8?%;text-align:center;line-height:%?66?%;color:#fff;background-color:#e75045;-webkit-box-shadow:%?6?% %?6?% %?8?% #eb645a;box-shadow:%?6?% %?6?% %?8?% #eb645a}.share .share-btn[data-v-6fc48e10]{position:absolute;bottom:10vh;left:50%;z-index:2;margin-left:%?-100?%;width:%?200?%;height:%?88?%;line-height:%?88?%;padding:0;font-size:%?32?%;text-align:center;background-color:#e75045;color:#fff;-webkit-box-shadow:0 0 %?30?% #fff;box-shadow:0 0 %?30?% #fff;-webkit-animation:animBtn-data-v-6fc48e10 1.5s infinite;animation:animBtn-data-v-6fc48e10 1.5s infinite}@-webkit-keyframes animBtn-data-v-6fc48e10{0%{width:%?200?%;height:%?88?%;font-size:%?32?%}50%{-webkit-transform:scale(1.1);transform:scale(1.1);font-size:%?32?%}to{width:%?200?%;height:%?88?%;font-size:%?32?%}}@keyframes animBtn-data-v-6fc48e10{0%{width:%?200?%;height:%?88?%;font-size:%?32?%}50%{-webkit-transform:scale(1.1);transform:scale(1.1);font-size:%?32?%}to{width:%?200?%;height:%?88?%;font-size:%?32?%}}body.?%PAGE?%[data-v-6fc48e10]{background:-webkit-linear-gradient(top,#e75045,#e75045 50%)}',""])},"3c26":function(e,t,n){"use strict";var i=n("b467"),o=n.n(i);o.a},"42e3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("d348")),o=a(n("97b5"));function a(e){return e&&e.__esModule?e:{default:e}}var s={components:{sharePop:o.default},data:function(){return{showShare:!1,qrcode:"",coin:0,isLogin:this.$store.state.isLogin}},onLoad:function(){var e=this,t="";t=this.isLogin?JSON.parse(uni.getStorageSync("userInfo")).id:0,uni.request({url:i.default.HTTP+"/Generalize/getGeneralize",method:"POST",data:{uid:t},success:function(t){e.qrcode=t.data.qrcode,e.coin=t.data.bonus}})},onShareAppMessage:function(e){return{title:"点书吧",path:"/pages/common/login"}},methods:{share:function(){this.showShare=!0;var e=getCurrentPages(),t=e[e.length-1],n=null,i=t.$getAppWebview();n=new plus.nativeObj.Bitmap("amway_img"),i.draw(n,function(){n.save("_doc/a.jpg",{},function(e){uni.saveImageToPhotosAlbum({filePath:e.target,success:function(){n.clear(),uni.showToast({title:"保存图片成功",mask:!1,duration:1500})}})},function(e){})},function(e){})},closepop:function(e){this.showShare=!1},capture:function(){var e=getCurrentPages(),t=e[e.length-1],n=null,i=t.$getAppWebview();n=new plus.nativeObj.Bitmap("amway_img"),i.draw(n,function(){n.save("_doc/a.jpg",{},function(e){console.log("保存成功："+JSON.stringify(e)),uni.saveImageToPhotosAlbum({filePath:e.target,success:function(){console.log(e.target),n.clear(),uni.showToast({title:"保存图片成功",mask:!1,duration:1500})}})},function(e){console.log("保存失败",+JSON.stringify(e))})},function(e){console.log("截屏失败",JSON.stringify(e))})}},computed:{userInfo:function(){return this.$store.state.userInfo},urlHttp:function(){return i.default.UrlHttp}}};t.default=s},"58ac":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:["story","showMe"],data:function(){return{}},methods:{shareToWeixin:function(e,t){t?uni.share({provider:"weixin",type:0,title:"点书吧",scene:e,imageUrl:t.pic,href:t.url,summary:t.content,success:function(e){uni.showToast({title:"分享成功！"})}}):uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){uni.share({provider:"weixin",type:2,title:"点书吧",scene:e,imageUrl:t.tempFilePaths[0],success:function(e){uni.showToast({title:"分享成功！"})}})}})},close:function(){this.$emit("closeSharePop",!1)}}};t.default=i},"62a4":function(e,t,n){"use strict";n.r(t);var i=n("42e3"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},"73e9":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"share"},[n("v-uni-view",{staticClass:"hh-top"}),n("v-uni-image",{staticClass:"share-bg",attrs:{src:"../../../static/share_bg2.png",mode:""}}),n("v-uni-image",{staticClass:"logo",attrs:{src:e.urlHttp+e.userInfo.headimgurl,mode:""}}),n("v-uni-text",{staticClass:"name"},[e._v(e._s(e.userInfo.username))]),n("v-uni-text",{staticClass:"name1"},[e._v("阅读小说就可以挣钱，大家快来！")]),n("v-uni-image",{staticClass:"QR-code",attrs:{src:e.urlHttp+e.qrcode,mode:""}}),n("v-uni-view",{staticClass:"welfare"},[n("v-uni-text",{staticClass:"gold"},[e._v("分享成功可得奖励金")]),n("v-uni-button",{staticClass:" withdraw",on:{click:function(t){t=e.$handleEvent(t),e.share(t)}}},[e._v("立即分享")])],1),n("share-pop",{attrs:{showMe:e.showShare},on:{closeSharePop:function(t){t=e.$handleEvent(t),e.closepop(t)}}})],1)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"7b20":function(e,t,n){"use strict";n.r(t);var i=n("73e9"),o=n("62a4");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("ad6c");var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"6fc48e10",null);t["default"]=r.exports},"97b5":function(e,t,n){"use strict";n.r(t);var i=n("134b"),o=n("ec17");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("3c26");var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"6f3233b1",null);t["default"]=r.exports},a4eb:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.share-pop[data-v-6f3233b1]{width:100%;position:fixed;top:0;left:0;height:100vh;z-index:888}.share-pop .mask[data-v-6f3233b1]{width:100%;height:100vh;background-color:rgba(0,0,0,.3);position:fixed;left:0;top:0;z-index:889}.share-pop .pop-content[data-v-6f3233b1]{width:92%;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:999;left:4%;bottom:%?20?%;background-color:#fff;-webkit-border-radius:%?8?%;border-radius:%?8?%}.share-pop .pop-content .share-icon[data-v-6f3233b1]{width:100%;height:15vh;padding:%?20?% 0 %?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.share-pop .pop-content .share-icon .item[data-v-6f3233b1]{width:20%;text-align:center}.share-pop .pop-content .share-icon .item .icon[data-v-6f3233b1]{font-size:%?88?%;display:inline-block}.share-pop .pop-content .share-icon .item .icon-qq[data-v-6f3233b1]{color:#5eaade}.share-pop .pop-content .share-icon .item .icon-weixin[data-v-6f3233b1]{color:#50b674}.share-pop .pop-content .share-icon .item .icon-frends-circle[data-v-6f3233b1]{color:#50b674}.share-pop .pop-content .cancle[data-v-6f3233b1]{width:100%;height:%?78?%;line-height:%?78?%;text-align:center;border-top:%?1?% solid #eee;color:#999}',""])},ad6c:function(e,t,n){"use strict";var i=n("e74f"),o=n.n(i);o.a},b467:function(e,t,n){var i=n("a4eb");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("4e5426f2",i,!0,{sourceMap:!1,shadowMode:!1})},d348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={HTTP:"https://xs.it-xd.cn/api",UrlHttp:"https://xs.it-xd.cn",ImgUrl:"https://xs.it-xd.cn"};t.default=i},e74f:function(e,t,n){var i=n("25d8");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("54145382",i,!0,{sourceMap:!1,shadowMode:!1})},ec17:function(e,t,n){"use strict";n.r(t);var i=n("58ac"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a}}]);