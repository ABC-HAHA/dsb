(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/book/allComments"],{"35de":function(t,n,e){},5578:function(t,n,e){"use strict";e.r(n);var o=e("a12c"),r=e("7891");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("c3c5");var a=e("2877"),i=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"7082369a",null);n["default"]=i.exports},7891:function(t,n,e){"use strict";e.r(n);var o=e("7d74"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=r.a},"7d74":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e("4179"));function r(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{current:0,isLogin:this.$store.state.isLogin,NewUrl:o.default.ImgUrl}},computed:{comments:function(){return this.$store.state.comments},id:function(){return JSON.parse(t.getStorageSync("userInfo")).id}},methods:{seeTa:function(n){console.log(n),this.$store.dispatch("otherUser",n.user),t.navigateTo({url:"otherUserInfo"})},thumbsUp:function(n){var e=n.id,r="";r=this.isLogin?JSON.parse(t.getStorageSync("userInfo")).id:0;var u=n.user.id;this.current=e,t.request({url:o.default.HTTP+"/comment/upcomment",method:"POST",data:{cid:e,uid:r,fuid:u},success:function(e){0===e.data.code?n.up++:t.showToast({title:"请不要重复点赞",icon:"none"})}})},goDetail:function(n){this.$store.dispatch("comment",n),t.navigateTo({url:"commontDetail"})},logoUrl:function(t){return o.default.UrlHttp+t},hasUp:function(t){return t===this.current}}};n.default=u}).call(this,e("543d")["default"])},a12c:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.comments,function(n,e){var o=t.hasUp(n.id);return{$orig:t.__get_orig(n),m0:o}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},c3c5:function(t,n,e){"use strict";var o=e("35de"),r=e.n(o);r.a}},[["0e3d","common/runtime","common/vendor"]]]);