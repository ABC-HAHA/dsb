(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/page/resetName"],{"061a":function(e,t,n){},"06dd0":function(e,t,n){"use strict";n.r(t);var u=n("b942"),a=n("4107");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("100a");var o,s=n("f0c5"),i=Object(s["a"])(a["default"],u["b"],u["c"],!1,null,"03512a50",null,!1,u["a"],o);t["default"]=i.exports},"100a":function(e,t,n){"use strict";var u=n("061a"),a=n.n(u);a.a},4107:function(e,t,n){"use strict";n.r(t);var u=n("a98b"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a},a98b:function(e,t,n){"use strict";(function(e,u){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("f9ec"));function r(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{isCommit:!1}},methods:{commit:function(t){var n=this;this.isCommit=!0;var r=this.userInfo.id,o=t.detail.value.name;e.request({url:a.default.HTTP+"/user/edituser",method:"POST",data:{id:r,username:o},success:function(t){u("log",t," at pages\\me\\page\\resetName.vue:37"),0===t.data.code?(e.showToast({title:"修改成功"}),n.userInfo.username=t.data.user.username,n.$store.dispatch("userInfo",n.userInfo),e.redirectTo({url:"userInfo"})):e.showToast({title:t.data.error})}})}},computed:{userInfo:function(){return this.$store.state.userInfo}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},b942:function(e,t,n){"use strict";var u,a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return u})},e120:function(e,t,n){"use strict";(function(e){n("62b9"),n("921b");u(n("66fd"));var t=u(n("06dd0"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["e120","common/runtime","common/vendor"]]]);