(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/login"],{"2c7c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("4179"));function s(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{isAgree:!0,isSure:!1,second:60,showText:!0,phone:"",showLoading:!1,cid:""}},onLoad:function(){e.hideLoading(),this.cid=plus.push.getClientInfo().clientid},methods:{checkAgree:function(e){e.detail.value.length>0?this.isAgree=!0:this.isAgree=!1},getPhone:function(e){this.phone=e.detail.value},getIdenCode:function(t){t.detail.value.length>=4?(this.isSure=!0,this.showText=!0,this.second=60):e.showToast({title:"请填写正确的验证码",icon:"none"})},getCode:function(){var t=this,n=/^1[345678]\d{9}$/,s=this.phone;if(n.test(s)){this.showText=!1;var i=setInterval(function(){--t.second},1e3);e.request({url:o.default.HTTP+"/user/getmcodenum",method:"POST",data:{username:s},success:function(t){t.data.code,e.showToast({title:t.data.error,icon:"none"})}}),setTimeout(function(){clearInterval(i),t.second=60,t.showText=!0},6e4)}else e.showToast({title:"请输入正确的手机号",icon:"none"})},more:function(){e.switchTab({url:"../find/find"})},submit:function(t){var n=this;this.isAgree?t.detail.value.phone&&t.detail.value.code?(this.showLoading=!0,e.request({url:o.default.HTTP+"/user/checkpost",method:"POST",data:{mobile:t.detail.value.phone,code:t.detail.value.code,cid:this.cid},success:function(t){0===t.data.code?(n.showLoading=!1,e.setStorageSync("user",t.data.user),e.setStorage({key:"userInfo",data:JSON.stringify(t.data.user),success:function(e){console.log(e)}}),n.$store.dispatch("isLogin",!0),0!==t.data.user.sex?e.switchTab({url:"../find/find"}):e.redirectTo({url:"chooseSex"})):e.showToast({title:t.data.error,icon:"none"})}})):e.showToast({title:"手机号或验证码不能为空",icon:"none"}):e.showToast({title:"请先阅读协议并同意",icon:"none"})},wxLogin:function(){var t=this;e.showLoading({title:"正在登录...",mask:!0}),e.login({provider:"weixin",success:function(n){e.getUserInfo({provider:"weixin",success:function(n){e.setStorageSync("openid",n.userInfo.unionId),e.request({url:o.default.HTTP+"/callback/appwxlogin",method:"POST",data:{country:n.userInfo.country,nickname:n.userInfo.nickName,gender:n.userInfo.gender,province:n.userInfo.province,city:n.userInfo.city,headimgurl:n.userInfo.avatarUrl,unionid:n.userInfo.unionId},success:function(n){e.hideLoading(),0===n.data.code?(t.$store.dispatch("userInfo",n.data.user),e.setStorageSync("user",n.data.user),e.setStorage({key:"userInfo",data:JSON.stringify(n.data.user),success:function(e){console.log(e)}}),t.$store.dispatch("isLogin",!0),0!==n.data.user.sex?e.switchTab({url:"../find/find"}):e.redirectTo({url:"chooseSex"})):1===n.data.code&&(t.$store.dispatch("loginType",1),e.redirectTo({url:"register"}))}})}})}})},qqLogin:function(){var t=this;e.login({provider:"qq",success:function(n){e.getUserInfo({provider:"qq",success:function(n){e.setStorageSync("qqopenid",n.userInfo.openId),e.request({url:o.default.HTTP+"/callback/appqqlogin",method:"POST",data:{nickname:n.userInfo.nickName,gender:n.userInfo.gender,province:n.userInfo.province,city:n.userInfo.city,year:n.userInfo.year,headimgurl:n.userInfo.headimgurl,openid:n.userInfo.openId},success:function(n){0===n.data.code?(t.$store.dispatch("userInfo",n.data.user),e.setStorageSync("user",n.data.user),e.setStorage({key:"userInfo",data:JSON.stringify(n.data.user),success:function(e){console.log(e)}}),t.$store.dispatch("isLogin",!0),0!==n.data.user.sex?e.switchTab({url:"../find/find"}):e.redirectTo({url:"chooseSex"})):1===n.data.code&&(t.$store.dispatch("loginType",2),e.redirectTo({url:"register"}))}})}})}})}}};t.default=i}).call(this,n("543d")["default"])},"2f25":function(e,t,n){},"31f1":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s})},"3e6c":function(e,t,n){"use strict";n.r(t);var o=n("2c7c"),s=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=s.a},"58f9":function(e,t,n){"use strict";var o=n("2f25"),s=n.n(o);s.a},a026:function(e,t,n){"use strict";n.r(t);var o=n("31f1"),s=n("3e6c");for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);n("58f9");var r=n("2877"),a=Object(r["a"])(s["default"],o["a"],o["b"],!1,null,"4a2aceb2",null);t["default"]=a.exports}},[["ab49","common/runtime","common/vendor"]]]);