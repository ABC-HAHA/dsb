(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-login"],{"15ff":function(e,t,n){"use strict";n.r(t);var i=n("bd2a"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},a2a6:function(e,t,n){"use strict";n.r(t);var i=n("d3e5"),o=n("15ff");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("e7e9");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"60e83c27",null);t["default"]=s.exports},bd2a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("d348"));function o(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{isAgree:!0,isSure:!1,second:60,showText:!0,phone:"",showLoading:!1,cid:""}},onLoad:function(){uni.hideLoading(),this.cid=plus.push.getClientInfo().clientid},methods:{checkAgree:function(e){e.detail.value.length>0?this.isAgree=!0:this.isAgree=!1},getPhone:function(e){this.phone=e.detail.value},getIdenCode:function(e){e.detail.value.length>=4?(this.isSure=!0,this.showText=!0,this.second=60):uni.showToast({title:"请填写正确的验证码",icon:"none"})},getCode:function(){var e=this,t=/^1[345678]\d{9}$/,n=this.phone;if(t.test(n)){this.showText=!1;var o=setInterval(function(){--e.second},1e3);uni.request({url:i.default.HTTP+"/user/getmcodenum",method:"POST",data:{username:n}}),setTimeout(function(){clearInterval(o),e.second=60,e.showText=!0},6e4)}else uni.showToast({title:"请输入正确的手机号",icon:"none"})},more:function(){uni.switchTab({url:"../find/find"})},submit:function(e){var t=this;this.isAgree?e.detail.value.phone&&e.detail.value.code?(this.showLoading=!0,uni.request({url:i.default.HTTP+"/user/checkpost",method:"POST",data:{mobile:e.detail.value.phone,code:e.detail.value.code,cid:this.cid},success:function(e){0===e.data.code?(t.showLoading=!1,uni.setStorageSync("user",e.data.user),uni.setStorage({key:"userInfo",data:JSON.stringify(e.data.user),success:function(e){console.log(e)}}),t.$store.dispatch("isLogin",!0),0!==e.data.user.sex?uni.switchTab({url:"../find/find"}):uni.redirectTo({url:"chooseSex"})):uni.showToast({title:e.data.error,icon:"none"})}})):uni.showToast({title:"手机号或验证码不能为空",icon:"none"}):uni.showToast({title:"请先阅读协议并同意",icon:"none"})},wxLogin:function(){var e=this;uni.showLoading({title:"正在登录...",mask:!0}),uni.login({provider:"weixin",success:function(t){uni.getUserInfo({provider:"weixin",success:function(t){uni.setStorageSync("openid",t.userInfo.unionId),uni.request({url:i.default.HTTP+"/callback/appwxlogin",method:"POST",data:{country:t.userInfo.country,nickname:t.userInfo.nickName,gender:t.userInfo.gender,province:t.userInfo.province,city:t.userInfo.city,headimgurl:t.userInfo.avatarUrl,unionid:t.userInfo.unionId},success:function(t){uni.hideLoading(),0===t.data.code?(e.$store.dispatch("userInfo",t.data.user),uni.setStorageSync("user",t.data.user)):1===t.data.code&&(e.$store.dispatch("loginType",1),uni.redirectTo({url:"register"}))}})}})}})},qqLogin:function(){var e=this;uni.login({provider:"qq",success:function(t){uni.getUserInfo({provider:"qq",success:function(t){uni.setStorageSync("qqopenid",t.userInfo.openId),uni.request({url:i.default.HTTP+"/callback/appqqlogin",method:"POST",data:{nickname:t.userInfo.nickName,gender:t.userInfo.gender,province:t.userInfo.province,city:t.userInfo.city,year:t.userInfo.year,headimgurl:t.userInfo.headimgurl,openid:t.userInfo.openId},success:function(t){0===t.data.code?(e.$store.dispatch("userInfo",t.data.user),uni.setStorageSync("user",t.data.user)):1===t.data.code&&(e.$store.dispatch("loginType",2),uni.redirectTo({url:"register"}))}})}})}})}}};t.default=a},d348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={HTTP:"https://xs.it-xd.cn/api",UrlHttp:"https://xs.it-xd.cn",ImgUrl:"https://xs.it-xd.cn"};t.default=i},d3e5:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login"},[n("v-uni-image",{staticClass:"bg",attrs:{src:"../../static/redbg.png"}}),n("v-uni-image",{staticClass:"logo",attrs:{src:"../../static/logo.png"}}),n("v-uni-form",{staticClass:"form",on:{submit:function(t){t=e.$handleEvent(t),e.submit(t)}}},[n("v-uni-view",{staticClass:"input"},[n("v-uni-input",{attrs:{name:"phone",disabled:!e.showText,type:"number",maxlength:"11",placeholder:"请输入手机号"},on:{input:function(t){t=e.$handleEvent(t),e.getPhone(t)}}})],1),n("v-uni-view",{staticClass:"input"},[n("v-uni-input",{staticClass:"input-code",attrs:{name:"code",maxlength:"6",type:"number",placeholder:"请输入验证码"},on:{blur:function(t){t=e.$handleEvent(t),e.getIdenCode(t)}}}),e.showText?n("v-uni-text",{staticClass:"iden-code",on:{click:function(t){t=e.$handleEvent(t),e.getCode(t)}}},[e._v("获取验证码")]):n("v-uni-text",{staticClass:"gray-code"},[e._v(e._s(e.second)+"s后重新获取")])],1),n("v-uni-view",{staticClass:"sure"},[n("v-uni-button",{class:{btn_active:e.isSure},attrs:{"form-type":"submit",loading:e.showLoading}},[e._v("登 录")])],1),n("v-uni-image",{staticClass:"line",attrs:{src:"../../static/line.png"}}),n("v-uni-view",{staticClass:"other"},[n("v-uni-text",{staticClass:"icon icon-qq",on:{click:function(t){t=e.$handleEvent(t),e.qqLogin(t)}}}),n("v-uni-text",{staticClass:"icon icon-weixin",on:{click:function(t){t=e.$handleEvent(t),e.wxLogin(t)}}})],1),n("v-uni-checkbox-group",{staticClass:"agree-check",attrs:{name:"isAgree"},on:{change:function(t){t=e.$handleEvent(t),e.checkAgree(t)}}},[n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"true",checked:e.isAgree,color:"#BD3037"}}),e._v("已阅读并同意"),n("v-uni-navigator",{staticClass:"a",attrs:{url:"userAgreement"}},[e._v("《用户协议》")]),e._v("和"),n("v-uni-navigator",{staticClass:"a",attrs:{url:"userSecretProtect"}},[e._v("《用户隐私保护政策》")])],1)],1)],1)],1)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},d67e:function(e,t,n){var i=n("eb08");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("506c70d2",i,!0,{sourceMap:!1,shadowMode:!1})},e7e9:function(e,t,n){"use strict";var i=n("d67e"),o=n.n(i);o.a},eb08:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.login[data-v-60e83c27]{width:100%}.login .bg[data-v-60e83c27]{width:100%;height:100vh;position:absolute;top:0;left:0;z-index:-1}.login .logo[data-v-60e83c27]{width:%?260?%;height:%?260?%;display:block;margin:20vh auto %?80?%}.login .input[data-v-60e83c27]{width:88%;margin:%?16?% auto;font-size:%?24?%;position:relative;z-index:7}.login .input uni-input[data-v-60e83c27]{width:100%;background-color:rgba(237,237,240,.5);height:%?80?%;line-height:%?80?%;padding:0 %?16?%;-webkit-border-radius:%?18?%;border-radius:%?18?%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;z-index:10}.login .input uni-input[data-v-60e83c27]:focus{caret-color:#bd3037}.login .input .input-code[data-v-60e83c27]{width:74%;-webkit-border-radius:%?18?% 0 0 %?18?%;border-radius:%?18?% 0 0 %?18?%;padding-right:0}.login .input .iden-code[data-v-60e83c27]{position:absolute;width:26%;height:%?80?%;line-height:%?80?%;-webkit-border-radius:0 %?18?% %?18?% 0;border-radius:0 %?18?% %?18?% 0;text-align:center;top:0;right:0;color:#bd3037;z-index:99;background-color:rgba(237,237,240,.5)}.login .input .gray-code[data-v-60e83c27]{position:absolute;width:26%;height:%?80?%;line-height:%?80?%;-webkit-border-radius:0 %?18?% %?18?% 0;border-radius:0 %?18?% %?18?% 0;text-align:center;top:0;right:0;color:#999;z-index:99;background-color:rgba(237,237,240,.5)}.login .sure[data-v-60e83c27]{width:88%;margin:%?40?% auto;border:none;-webkit-border-radius:%?100?%;border-radius:%?100?%}.login .sure uni-button[data-v-60e83c27]{height:%?88?%;-webkit-border-radius:%?100?%;border-radius:%?100?%;background-color:#d2666b;line-height:%?88?%;text-align:center;color:#fff}.login .sure .btn_active[data-v-60e83c27]{background-color:#bd3037}.login .line[data-v-60e83c27]{display:block;width:80%;height:%?22?%;margin:%?20?% auto}.login .other[data-v-60e83c27]{width:100%;height:%?88?%;font-size:%?64?%;text-align:center}.login .other .icon[data-v-60e83c27]{margin:0 %?30?%;color:#bd3037}.login .agree-check[data-v-60e83c27]{width:100%;text-align:center;font-size:%?24?%;margin-top:%?20?%;color:#999}.login .agree-check .a[data-v-60e83c27]{display:inline-block}.login .more[data-v-60e83c27]{width:100%;text-align:center;color:#bd3037;font-size:%?24?%;margin-top:%?40?%}',""])}}]);