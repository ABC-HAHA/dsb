(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/feedback"],{"051d":function(t,e,r){"use strict";r.r(e);var n=r("10cd"),i=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,function(){return n[t]})}(a);e["default"]=i.a},"10cd":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("1ace"),i=a(r("4179"));function a(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{placeholder:"请您详细描述问题发生的场景和现象,并添加截图,这样有助于我们快速解决您的问题",imgArr:[],per:1,intro:"",phone:"",errInput:!1,errTextarea:!1,isSure:!1,isLogin:this.$store.state.isLogin}},methods:{introCheck:function(){this.intro?this.errTextarea=!1:this.errTextarea=!0},phoneCheck:function(){this.phone?this.errInput=!1:this.errInput=!0},addImg:function(){var e=this;this.isLogin&&JSON.parse(t.getStorageSync("userInfo")).id,t.chooseImage({count:3,sourceType:["album"],success:function(r){e.imgArr=r.tempFilePaths;for(var a=[],u=function(t){(0,n.pathToBase64)(r.tempFilePaths[t]).then(function(e){a[t]=e})},o=0;o<r.tempFilePaths.length;o++)u(o);setTimeout(function(){t.request({url:i.default.HTTP+"/user/upload_multi",method:"POST",data:{images:a},success:function(t){e.per=100,e.imgArr=t.data.path}})},500);var s=setInterval(function(){e.per<61?e.per=e.per+30:e.per>=61&&e.per<100&&(e.per=94,clearInterval(s))},500)}})},sure:function(e){var r=this;if(this.intro)if(this.phone){this.errInput=!1,this.isSure=!0;var n="";n=this.isLogin?JSON.parse(t.getStorageSync("userInfo")).id:0,t.request({url:i.default.HTTP+"/user/userfeedback",method:"POST",data:{picpath:this.imgArr,uid:n,content:this.intro,contact:this.phone},success:function(e){r.isSure=!1,0===e.data.code?(t.showToast({title:"提交成功"}),r.intro="",r.imgArr=[],r.phone=""):t.showToast({title:e.data.error,icon:"none"})}})}else this.errInput=!0;else this.errTextarea=!0}},computed:{imgurl:function(){if(100!==this.per)return this.imgArr;for(var t=[],e=0;e<this.imgArr.length;e++)t[e]=i.default.UrlHttp+this.imgArr[e];return t}}};e.default=u}).call(this,r("543d")["default"])},"7fee":function(t,e,r){"use strict";r.r(e);var n=r("93f5"),i=r("051d");for(var a in i)"default"!==a&&function(t){r.d(e,t,function(){return i[t]})}(a);r("aa09");var u=r("2877"),o=Object(u["a"])(i["default"],n["a"],n["b"],!1,null,"44fdbd3d",null);e["default"]=o.exports},8107:function(t,e,r){},"93f5":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return i})},aa09:function(t,e,r){"use strict";var n=r("8107"),i=r.n(n);i.a}},[["f3eb","common/runtime","common/vendor"]]]);