(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/page/resetPhone"],{"12b9":function(e,t,n){"use strict";n.r(t);var o=n("566a"),s=n("86c0");for(var u in s)"default"!==u&&function(e){n.d(t,e,function(){return s[e]})}(u);n("8a95");var i=n("2877"),a=Object(i["a"])(s["default"],o["a"],o["b"],!1,null,"1679d7d7",null);t["default"]=a.exports},"566a":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s})},"86c0":function(e,t,n){"use strict";n.r(t);var o=n("d0b1"),s=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=s.a},"8a95":function(e,t,n){"use strict";var o=n("8cb4"),s=n.n(o);s.a},"8cb4":function(e,t,n){},d0b1:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("4179"));function s(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{isCommit:!1,isSure:!1,second:60,showText:!0,phone:"",code:"",isLogin:this.$store.state.isLogin}},computed:{userInfo:function(){return this.$store.state.userInfo}},methods:{getIdenCode:function(t){t.detail.value.length>=4?(this.isSure=!0,this.showText=!0):e.showToast({title:"请填写正确的验证码",icon:"none"})},getCode:function(){var t=this,n=/^1[345678]\d{9}$/,s=this.phone;n.test(s)?e.request({url:o.default.HTTP+"/user/getmobilecode",method:"POST",data:{mobile:s},success:function(n){if(1==n.data.code)e.showToast({title:n.data.error,icon:"none"});else{t.showText=!1;var o=setInterval(function(){--t.second},1e3);setTimeout(function(){clearInterval(o),t.showText=!0},6e4)}}}):e.showToast({title:"请输入正确的手机号",icon:"none"})},submit:function(t){var n="";n=this.isLogin?JSON.parse(e.getStorageSync("userInfo")).id:0,e.request({url:o.default.HTTP+"/user/editmobile",method:"POST",data:{id:n,mobile:this.phone,code:t.detail.value.code},success:function(t){console.log("修改手机号",t),0===t.data.code&&e.showModal({title:"提示",content:"修改成功！",showCancel:!1,success:function(t){e.redirectTo({url:"userInfo"})}})}})}}};t.default=u}).call(this,n("543d")["default"])}},[["98aa","common/runtime","common/vendor"]]]);