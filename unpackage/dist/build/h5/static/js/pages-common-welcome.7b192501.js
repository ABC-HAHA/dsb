(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-welcome"],{"23f2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("d348"));function o(t){return t&&t.__esModule?t:{default:t}}var a={props:["isShow"],data:function(){return{}},methods:{cancle:function(){this.$emit("goClose",!1)},getUserInfo:function(){var t=this;uni.login({provider:"weixin",success:function(e){console.log(e.code);var n=e.code;uni.getUserInfo({provider:"weixin",success:function(e){e.userInfo.code=n,uni.request({url:i.default.HTTP+"/user/checkapplet",method:"POST",data:JSON.stringify(e.userInfo),success:function(e){console.log(e),1===e.data.code?(uni.setStorageSync("openid",e.data.openid),uni.redirectTo({url:"register"})):0===e.data.code?(uni.setStorageSync("user",e.data.user),t.$store.dispatch("userInfo",e.data.user),uni.setStorageSync("openid",e.data.user.openid),uni.switchTab({url:"../find/find"})):uni.showToast({title:"登录失败，请检查您的网络",icon:"none"})}})}})}})}}};e.default=a},"35d7":function(t,e,n){"use strict";n.r(e);var i=n("d18c"),o=n("62e6");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("aa52");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"56d0b99d",null);e["default"]=s.exports},"55f3":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.wx-info-dialog[data-v-3b23bca2]{width:100%;height:100vh;position:fixed;top:0;left:0;z-index:98;background:rgba(0,0,0,.3)}.wx-info-dialog .dialog-content[data-v-3b23bca2]{width:80%;position:absolute;top:30vh;left:10%;z-index:99;-webkit-border-radius:%?20?%;border-radius:%?20?%;background-color:#fff}.wx-info-dialog .dialog-content .title[data-v-3b23bca2]{width:100%;line-height:%?90?%;text-align:center;font-size:%?36?%;font-weight:600;border-bottom:%?1?% solid #eee}.wx-info-dialog .dialog-content .intro[data-v-3b23bca2]{font-size:%?28?%;color:#515151;line-height:%?60?%;padding:%?20?% %?30?%}.wx-info-dialog .dialog-content .dialog-footer[data-v-3b23bca2]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.wx-info-dialog .dialog-content .dialog-footer .btn[data-v-3b23bca2]{width:50%;height:%?88?%;line-height:%?88?%;text-align:center;border:none}.wx-info-dialog .dialog-content .dialog-footer .cancle[data-v-3b23bca2]{color:#999;background-color:#f9f9f9;-webkit-border-radius:0 0 0 %?20?%;border-radius:0 0 0 %?20?%;border-top:%?1?% solid #eee}.wx-info-dialog .dialog-content .dialog-footer .cancle[data-v-3b23bca2]:after{border:none}.wx-info-dialog .dialog-content .dialog-footer .sure[data-v-3b23bca2]{color:#fff;background-color:#09bb07;-webkit-border-radius:0 0 %?20?% 0;border-radius:0 0 %?20?% 0}.wx-info-dialog .dialog-content .dialog-footer .sure[data-v-3b23bca2]:after{border:none}',""])},"5e92":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"wx-info-dialog"},[n("v-uni-view",{staticClass:"dialog-content"},[n("v-uni-view",{staticClass:"title"},[t._v("提示")]),n("v-uni-view",{staticClass:"intro"},[t._v("微信登录需要获取您的用户信息，请确认是否获取您的权限")]),n("v-uni-view",{staticClass:"dialog-footer"},[n("v-uni-button",{staticClass:"btn cancle",on:{click:function(e){e=t.$handleEvent(e),t.cancle(e)}}},[t._v("取消")]),n("v-uni-button",{staticClass:"btn sure",attrs:{"open-type":"getUserInfo"},on:{click:function(e){e=t.$handleEvent(e),t.getUserInfo(e)}}},[t._v("确认")])],1)],1)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"62e6":function(t,e,n){"use strict";n.r(e);var i=n("e2aa"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"680b":function(t,e,n){var i=n("b034");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("b64db478",i,!0,{sourceMap:!1,shadowMode:!1})},"6a84":function(t,e,n){"use strict";var i=n("cf15"),o=n.n(i);o.a},8541:function(t,e,n){"use strict";n.r(e);var i=n("5e92"),o=n("c3bf");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("6a84");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"3b23bca2",null);e["default"]=s.exports},aa52:function(t,e,n){"use strict";var i=n("680b"),o=n.n(i);o.a},b034:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.welcome[data-v-56d0b99d]{width:100%;position:relative;z-index:1;height:100vh;overflow:hidden}.welcome uni-image[data-v-56d0b99d]{width:100%;height:88vh;position:relative;z-index:2}.welcome .btn[data-v-56d0b99d]{padding:%?4?% %?14?%;height:%?48?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background-color:rgba(0,0,0,.3);font-size:%?24?%;color:#fff;text-align:center;line-height:%?48?%;position:absolute;z-index:10}.welcome .btn-left[data-v-56d0b99d]{left:%?50?%}.welcome .btn-right[data-v-56d0b99d]{right:%?50?%}.welcome .footer[data-v-56d0b99d]{position:fixed;left:0;bottom:0;z-index:20;width:100%;height:12vh;background-color:#fff;line-height:12vh;font-size:%?38?%}.welcome .footer uni-image[data-v-56d0b99d]{width:%?100?%;height:%?98?%;float:left;margin-top:%?32?%;margin-left:%?72?%;margin-right:%?20?%}',""])},c3bf:function(t,e,n){"use strict";n.r(e);var i=n("23f2"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},cf15:function(t,e,n){var i=n("55f3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("d0f3ec90",i,!0,{sourceMap:!1,shadowMode:!1})},d18c:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"welcome"},[n("v-uni-text",{staticClass:"btn btn-right to-top",on:{click:function(e){e=t.$handleEvent(e),t.goNext(e)}}},[t._v(t._s(t.time)+"s跳过")]),n("v-uni-image",{attrs:{src:t.urlHttp+t.adv_img},on:{click:function(e){e=t.$handleEvent(e),t.goAdv(e)}}}),t.advShow?n("v-uni-web-view",{attrs:{src:t.link}}):t._e(),n("v-uni-view",{staticClass:"footer"},[n("v-uni-image",{staticClass:"logo",attrs:{src:"../../static/logo.png"}}),n("v-uni-text",[t._v("点书阅读")])],1),n("wx-info-dialog",{attrs:{isShow:t.showDialog},on:{goClose:function(e){e=t.$handleEvent(e),t.closeDialog(e)}}})],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},d348:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={HTTP:"https://xs.it-xd.cn/api",UrlHttp:"https://xs.it-xd.cn",ImgUrl:"https://xs.it-xd.cn"};e.default=i},e2aa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("d348")),o=a(n("8541"));function a(t){return t&&t.__esModule?t:{default:t}}var r={components:{wxInfoDialog:o.default},data:function(){return{adv_img:"",link:"",urlHttp:"",advShow:!1,time:5,timeOut:{},interval:{},provider:"",showDialog:!1}},onShow:function(){var t=this;this.time=5,this.urlHttp=i.default.UrlHttp,uni.request({url:i.default.HTTP+"/index/advertisement",method:"POST",success:function(e){t.adv_img=e.data.advertisement.picpath,t.link=e.data.advertisement.link}}),this.interval=setInterval(function(){--t.time},1e3),this.timeOut=setTimeout(function(){switch(clearInterval(t.interval),uni.getSystemInfoSync().platform){case"android":uni.switchTab({url:"../find/find"});break;case"ios":uni.switchTab({url:"../find/find"});break;default:uni.switchTab({url:"../find/find"});break}},5e3)},onUnload:function(){clearInterval(this.interval),clearTimeout(this.timeOut)},methods:{closeDialog:function(t){this.showDialog=t},goNext:function(){switch(uni.getSystemInfoSync().platform){case"android":uni.switchTab({url:"../find/find"});break;case"ios":uni.switchTab({url:"../find/find"});break;default:uni.switchTab({url:"../find/find"});break}},goAdv:function(){this.advShow=!1,clearInterval(this.interval),clearTimeout(this.timeOut),plus.runtime.openURL(this.link)}}};e.default=r}}]);