(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bookshelf-bookshelf"],{"0c1c":function(t,o,e){"use strict";e.r(o);var i=e("dd93"),n=e("7d09");for(var s in n)"default"!==s&&function(t){e.d(o,t,function(){return n[t]})}(s);e("38f8");var a=e("2877"),r=Object(a["a"])(n["default"],i["a"],i["b"],!1,null,"653d86cc",null);o["default"]=r.exports},2309:function(t,o,e){o=t.exports=e("2350")(!1),o.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bookshelf[data-v-653d86cc]{min-height:100vh}.bookshelf .my-header[data-v-653d86cc]{width:100%;height:%?66?%;padding:%?12?% 0}.bookshelf .my-header .input[data-v-653d86cc]{width:60%;height:%?66?%;-webkit-border-radius:%?28?%;border-radius:%?28?%;color:#fff;position:relative;margin:0 auto}.bookshelf .my-header .input uni-input[data-v-653d86cc]{width:100%;-webkit-border-radius:%?40?%;border-radius:%?40?%;padding-left:%?68?%;height:%?66?%;font-size:%?32?%;line-height:%?66?%;background-color:hsla(0,0%,100%,.2);-webkit-box-sizing:border-box;box-sizing:border-box}.bookshelf .my-header .input .icon-search[data-v-653d86cc]{width:%?58?%;height:%?66?%;line-height:%?66?%;position:absolute;top:0;left:%?10?%;font-size:%?40?%}.bookshelf .book-shelf[data-v-653d86cc]{width:96%;margin:%?40?% auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.bookshelf .book-shelf .book-item[data-v-653d86cc]{width:33.33%;border-bottom:%?8?% solid #e7e7e7;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:%?30?%;margin-bottom:%?30?%}.bookshelf .book-shelf .book-item .book-bg[data-v-653d86cc]{width:%?180?%;height:%?240?%;margin-left:%?30?%;-webkit-box-shadow:%?4?% %?4?% %?8?% #666;box-shadow:%?4?% %?4?% %?8?% #666}.bookshelf .book-shelf .book-item .mark[data-v-653d86cc]{width:%?80?%;height:%?30?%;position:absolute;top:0;left:%?30?%}',""])},"38f8":function(t,o,e){"use strict";var i=e("f6b33"),n=e.n(i);n.a},6922:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=n(e("d348"));function n(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{bookList:[],isLogin:this.$store.state.isLogin}},onShow:function(){var t=this,o=uni.getStorageSync("userInfo"),e="";o&&(e=JSON.parse(o).id,console.log(e),uni.request({url:i.default.HTTP+"/index/userbookshelf",method:"POST",data:{id:e},success:function(o){console.log(o),t.bookList=o.data.userinfo.data}}))},methods:{goSearch:function(){uni.navigateTo({url:"searchBook"})},enterBook:function(t){var o=this,e=t.chapter_id,n=t.chapter_key,s="";s=this.isLogin?JSON.parse(uni.getStorageSync("userInfo")).id:0,uni.request({url:i.default.HTTP+"/novel/getnovelcontent",method:"POST",data:{id:e,key:n,uid:s},success:function(t){o.$store.dispatch("storyData",t.data),uni.navigateTo({url:"../common/book/story"})}})},add:function(){uni.switchTab({url:"../find/find"})},deleteBook:function(t){var o=this,e=t.novel_id,n="";n=this.isLogin?JSON.parse(uni.getStorageSync("userInfo")).id:0,uni.showModal({title:"提示",content:"是否删除本书？",success:function(t){t.confirm&&uni.request({url:i.default.HTTP+"/Bookshelf/delbookshelf",method:"POST",data:{novelid:e,uid:n},success:function(t){0===t.data.code?(o.bookList=t.data.bookshelf.data,uni.showToast({title:"删除成功"})):uni.showToast({title:t.data.code,icon:"none"})}})}})}}};o.default=s},"7d09":function(t,o,e){"use strict";e.r(o);var i=e("6922"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(o,t,function(){return i[t]})}(s);o["default"]=n.a},d348:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={HTTP:"https://xs.it-xd.cn/api",UrlHttp:"https://xs.it-xd.cn",ImgUrl:"https://xs.it-xd.cn"};o.default=i},dd93:function(t,o,e){"use strict";var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",{staticClass:"bookshelf"},[e("v-uni-view",{staticClass:"h-22 bg-red"}),e("v-uni-view",{staticClass:"my-header bg-red"},[e("v-uni-view",{staticClass:"input"},[e("v-uni-text",{staticClass:"icon icon-search"}),e("v-uni-input",{attrs:{type:"text",value:"找书"},on:{focus:function(o){o=t.$handleEvent(o),t.goSearch(o)}}})],1)],1),e("v-uni-view",{staticClass:"book-shelf"},[t._l(t.bookList,function(o,i){return e("v-uni-view",{key:i,staticClass:"book-item"},[e("v-uni-view",{staticClass:"item",on:{longpress:function(e){e=t.$handleEvent(e),t.deleteBook(o)},click:function(e){e=t.$handleEvent(e),t.enterBook(o)}}},[e("v-uni-image",{staticClass:"book-bg",attrs:{src:o.book.pic}})],1)],1)}),e("v-uni-view",{staticClass:"book-item"},[e("v-uni-image",{staticClass:"book-bg",attrs:{src:"../../static/book-add.png"},on:{click:function(o){o=t.$handleEvent(o),t.add(o)}}})],1)],2)],1)},n=[];e.d(o,"a",function(){return i}),e.d(o,"b",function(){return n})},f6b33:function(t,o,e){var i=e("2309");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("7cbd2b46",i,!0,{sourceMap:!1,shadowMode:!1})}}]);