(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-register"],{"23dd":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("d348"));function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{isAgree:!0,isSure:!1,second:60,showText:!0,phone:"",psdErr:!1,isRequest:!1,cid:""}},onShow:function(){this.cid=plus.push.getClientInfo().clientid,uni.showToast({title:"你还没有账号哦，赶紧注册一个吧",icon:"none"})},methods:{checkAgree:function(t){t.detail.value.length>0?this.isAgree=!0:this.isAgree=!1},getPhone:function(t){this.phone=t.detail.value},getIdenCode:function(t){t.detail.value.length>=4?(this.showText=!0,this.isSure=!0,this.second=60):uni.showToast({title:"请填写正确的验证码",icon:"none"})},getCode:function(){var t=this,e=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,i=this.phone;if(e.test(i)){this.showText=!1;var a=setInterval(function(){--t.second},1e3);uni.request({url:n.default.HTTP+"/user/getmcodenum",method:"POST",data:{username:i}}),setTimeout(function(){clearInterval(a),t.showText=!0,t.second=60},6e4)}else uni.showToast({title:"请输入正确的手机号",icon:"none"})},submit:function(t){var e=this,i=uni.getStorageSync("qqopenid"),a=uni.getStorageSync("openid"),r=this.$store.state.loginType,s="";s=1===r?a:i,this.isAgree?t.detail.value.phone&&t.detail.value.code?(this.isRequest=!0,uni.request({url:n.default.HTTP+"/user/Binduser",method:"POST",data:{mobile:t.detail.value.phone,code:t.detail.value.code,openid:s,type:r,cid:this.cid},success:function(t){e.isRequest=!1,0===t.data.code?1===t.data.tip?uni.showModal({title:"提示",content:"自动注册成功，初始密码为123456",showCancel:!1,success:function(){uni.setStorageSync("user",t.data.user),0===t.data.user.sex?uni.redirectTo({url:"chooseSex"}):uni.switchTab({url:"../find/find"})}}):uni.showModal({title:"提示",content:"绑定成功！",showCancel:!1,success:function(){uni.setStorageSync("user",t.data.user),uni.switchTab({url:"../find/find"})}}):uni.showToast({title:t.data.error,icon:"none"})}})):uni.showToast({title:"信息不能为空",icon:"none"}):uni.showToast({title:"请先阅读协议并同意",icon:"none"})}}};e.default=r},"41cd":function(t,e,i){var n=i("b7f0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("762fb019",n,!0,{sourceMap:!1,shadowMode:!1})},"4ce4":function(t,e,i){"use strict";i.r(e);var n=i("8947"),a=i("e457");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("7c92");var s=i("2877"),o=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"ac373694",null);e["default"]=o.exports},"7c92":function(t,e,i){"use strict";var n=i("41cd"),a=i.n(n);a.a},8947:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"register"},[i("v-uni-image",{staticClass:"bg",attrs:{src:"../../static/redbg.png"}}),i("v-uni-image",{staticClass:"logo",attrs:{src:"../../static/logo.png"}}),i("v-uni-form",{staticClass:"form",on:{submit:function(e){e=t.$handleEvent(e),t.submit(e)}}},[i("v-uni-view",{staticClass:"input"},[i("v-uni-input",{attrs:{name:"phone",disabled:!t.showText,type:"number",maxlength:"11",placeholder:"请输入手机号"},on:{input:function(e){e=t.$handleEvent(e),t.getPhone(e)}}})],1),i("v-uni-view",{staticClass:"input"},[i("v-uni-input",{staticClass:"input-code",attrs:{name:"code",maxlength:"6",type:"number",placeholder:"请输入验证码"},on:{blur:function(e){e=t.$handleEvent(e),t.getIdenCode(e)}}}),t.showText?i("v-uni-text",{staticClass:"iden-code",on:{click:function(e){e=t.$handleEvent(e),t.getCode(e)}}},[t._v("获取验证码")]):i("v-uni-text",{staticClass:"gray-code"},[t._v(t._s(t.second)+"s后重新获取")])],1),i("v-uni-view",{staticClass:"sure"},[i("v-uni-button",{class:{btn_active:t.isSure},attrs:{"form-type":"submit",loading:t.isRequest}},[t._v("绑定账号")]),i("v-uni-view",{staticClass:"err-tips"},[t._v("没有账号将自动注册")])],1),i("v-uni-checkbox-group",{staticClass:"agree-check",attrs:{name:"isAgree"},on:{change:function(e){e=t.$handleEvent(e),t.checkAgree(e)}}},[i("v-uni-label",[i("v-uni-checkbox",{attrs:{value:"true",checked:t.isAgree,color:"#BD3037"}}),t._v("已阅读并同意"),i("v-uni-navigator",{staticClass:"a",attrs:{url:"userAgreement"}},[t._v("《用户协议》")]),t._v("和"),i("v-uni-navigator",{staticClass:"a",attrs:{url:"userSecretProtect"}},[t._v("《用户隐私保护政策》")])],1)],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},b7f0:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.register[data-v-ac373694]{width:100%}.register .bg[data-v-ac373694]{width:100%;height:100vh;position:absolute;top:0;left:0;z-index:-1}.register .logo[data-v-ac373694]{width:%?260?%;height:%?260?%;display:block;margin:20vh auto %?80?%}.register .input[data-v-ac373694]{width:88%;margin:%?16?% auto;font-size:%?24?%;position:relative;z-index:7}.register .input uni-input[data-v-ac373694]{width:100%;background-color:rgba(237,237,240,.5);height:%?80?%;line-height:%?80?%;padding:0 %?16?%;-webkit-border-radius:%?18?%;border-radius:%?18?%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;z-index:10}.register .input uni-input[data-v-ac373694]::focus{caret-color:#bd3037;border:%?1?% solid #bd3037;-webkit-box-shadow:0 0 %?2?% #999;box-shadow:0 0 %?2?% #999}.register .input .input-code[data-v-ac373694]{width:74%;-webkit-border-radius:%?18?% 0 0 %?18?%;border-radius:%?18?% 0 0 %?18?%;padding-right:0}.register .input .iden-code[data-v-ac373694]{position:absolute;width:26%;height:%?80?%;line-height:%?80?%;-webkit-border-radius:0 %?18?% %?18?% 0;border-radius:0 %?18?% %?18?% 0;text-align:center;top:0;right:0;color:#bd3037;z-index:99;background-color:rgba(237,237,240,.5)}.register .input .gray-code[data-v-ac373694]{position:absolute;width:26%;height:%?80?%;line-height:%?80?%;-webkit-border-radius:0 %?18?% %?18?% 0;border-radius:0 %?18?% %?18?% 0;text-align:center;top:0;right:0;color:#999;z-index:99;background-color:rgba(237,237,240,.5)}.register .err-tips[data-v-ac373694]{width:88%;margin:%?16?% auto;font-size:%?24?%;color:#bd3037}.register .sure[data-v-ac373694]{width:88%;margin:%?40?% auto;border:none;-webkit-border-radius:%?100?%;border-radius:%?100?%}.register .sure uni-button[data-v-ac373694]{height:%?88?%;-webkit-border-radius:%?100?%;border-radius:%?100?%;background-color:#d2666b;line-height:%?88?%;text-align:center;color:#fff}.register .sure .btn_active[data-v-ac373694]{background-color:#bd3037}.register .line[data-v-ac373694]{display:block;width:80%;height:%?22?%;margin:%?20?% auto}.register .other[data-v-ac373694]{width:100%;height:%?88?%;font-size:%?64?%;text-align:center}.register .other .icon[data-v-ac373694]{margin:0 %?30?%;color:#bd3037}.register .agree-check[data-v-ac373694]{width:100%;text-align:center;font-size:%?24?%;margin-top:%?20?%;color:#999}.register .agree-check .a[data-v-ac373694]{display:inline-block}.register .more[data-v-ac373694]{width:100%;text-align:center;color:#bd3037;font-size:%?24?%;margin-top:%?40?%}',""])},d348:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={HTTP:"https://xs.it-xd.cn/api",UrlHttp:"https://xs.it-xd.cn",ImgUrl:"https://xs.it-xd.cn"};e.default=n},e457:function(t,e,i){"use strict";i.r(e);var n=i("23dd"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a}}]);