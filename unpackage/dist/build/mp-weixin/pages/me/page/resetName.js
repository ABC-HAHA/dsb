(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/page/resetName"],{"2a63":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})},"5afb":function(e,t,n){"use strict";var u=n("61f7"),r=n.n(u);r.a},"61f7":function(e,t,n){},"6a3e":function(e,t,n){"use strict";n.r(t);var u=n("8fdc"),r=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);t["default"]=r.a},"8fdc":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n("4179"));function r(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{isCommit:!1}},methods:{commit:function(t){var n=this;this.isCommit=!0;var r=this.userInfo.id,a=t.detail.value.name;e.request({url:u.default.HTTP+"/user/edituser",method:"POST",data:{id:r,username:a},success:function(t){console.log(t),0===t.data.code?(e.showToast({title:"修改成功"}),n.userInfo.username=t.data.user.username,n.$store.dispatch("userInfo",n.userInfo),e.redirectTo({url:"userInfo"})):e.showToast({title:t.data.error})}})}},computed:{userInfo:function(){return this.$store.state.userInfo}}};t.default=a}).call(this,n("543d")["default"])},ed8c:function(e,t,n){"use strict";n.r(t);var u=n("2a63"),r=n("6a3e");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("5afb");var o=n("2877"),s=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,"4e0bd123",null);t["default"]=s.exports}},[["f8ed","common/runtime","common/vendor"]]]);