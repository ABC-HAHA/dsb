(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bookshelf-searchBook"],{"15d2":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"search-book"},[o("v-uni-view",{staticClass:"h-22 bg-red"}),o("v-uni-view",{staticClass:"header"},[o("v-uni-navigator",{staticClass:"back",attrs:{"open-type":"navigateBack"}},[o("v-uni-text",{staticClass:"icon icon-back"})],1),o("v-uni-input",{attrs:{type:"text",placeholder:t.ph,"placeholder-style":"color: #aaa; font-size: 14px;"},on:{input:function(e){e=t.$handleEvent(e),t.getValue(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),o("v-uni-text",{staticClass:"c-red",on:{click:function(e){e=t.$handleEvent(e),t.search(e)}}},[t._v("搜索")])],1),t.selectList.length>0?o("v-uni-scroll-view",{staticClass:"select",attrs:{"scroll-y":"true"}},t._l(t.selectList,function(e,i){return o("v-uni-text",{key:i,staticClass:"item text-over-1",on:{click:function(o){o=t.$handleEvent(o),t.goDetail(e)}}},[t._v(t._s(e.title))])}),1):t._e(),o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"content-item"},[o("v-uni-view",{staticClass:"title"},[o("v-uni-text",[t._v("搜索历史")]),o("v-uni-view",{staticClass:"fr clear",on:{click:function(e){e=t.$handleEvent(e),t.clearHistory(e)}}},[o("v-uni-text",[t._v("清除历史")]),o("v-uni-text",{staticClass:"icon icon-refresh"})],1)],1),t._l(t.history,function(e,i){return o("v-uni-view",{key:i,staticClass:"item",on:{click:function(o){o=t.$handleEvent(o),t.goDetail(e)}}},[o("v-uni-text",{staticClass:"fl icon icon-history"}),o("v-uni-text",{staticClass:"fl"},[t._v(t._s(e.title))])],1)})],2),o("v-uni-view",{staticClass:"content-item1"},[o("v-uni-view",{staticClass:"Title"},[o("v-uni-text",[t._v("热门搜索")])],1),o("v-uni-view",{staticClass:"hot"},t._l(t.hotsearch,function(e,i){return o("v-uni-view",{key:i,staticClass:"hotOne",on:{click:function(o){o=t.$handleEvent(o),t.goDetails(e.id)}}},[o("v-uni-text",{staticClass:"TextOne"},[t._v(t._s(i+1))]),o("v-uni-text",{staticClass:"TextTwo"},[t._v(t._s(e.title))])],1)}),1)],1)],1)],1)},n=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return n})},"5baf":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.search-book[data-v-3a4079f2]{width:100%;height:100vh;background-color:#f9f9f9;position:relative;z-index:1}.search-book .header[data-v-3a4079f2]{width:100%;height:%?88?%;line-height:%?88?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;background-color:#fff;border-bottom:%?1?% solid #eee;-webkit-box-sizing:border-box;box-sizing:border-box}.search-book .header .back[data-v-3a4079f2]{margin:0 %?20?%}.search-book .header uni-input[data-v-3a4079f2]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;background-color:#efefef;-webkit-border-radius:%?16?%;border-radius:%?16?%;height:%?66?%;line-clamp:%?66?%;padding:0 %?20?%;margin-left:%?20?%;margin-right:%?20?%;color:#666}.search-book .select[data-v-3a4079f2]{position:absolute;top:%?132?%;left:0;z-index:99;width:100%;min-height:100vh;background-color:#fff}.search-book .select .item[data-v-3a4079f2]{display:block;width:94%;margin:0 auto;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?20?%;font-size:%?32?%;color:#666;border-bottom:%?1?% solid #eee}.search-book .content[data-v-3a4079f2]{width:100%}.search-book .content .title[data-v-3a4079f2]{width:94%;margin:0 auto;font-size:%?30?%;color:#999;line-height:%?80?%;border-bottom:%?1?% solid #eee}.search-book .content .title .clear[data-v-3a4079f2]{display:inline-block;overflow:hidden;font-size:%?26?%}.search-book .content .title .clear .icon-refresh[data-v-3a4079f2]{margin-left:%?10?%}.search-book .content .Title[data-v-3a4079f2]{width:94%;margin:0 auto;font-size:%?30?%;color:#999;line-height:%?80?%}.search-book .content .hot[data-v-3a4079f2]{width:90%;margin:0 auto}.search-book .content .hot .hotOne[data-v-3a4079f2]{width:50%;float:left;font-size:%?30?%;color:#999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.search-book .content .hot .hotOne uni-text[data-v-3a4079f2]{display:inline-block;margin-top:10px}.search-book .content .hot .hotOne .TextOne[data-v-3a4079f2]{text-align:center;color:#fff;background:#ccc;width:18px;height:18px;text-align:center;line-height:18px}.search-book .content .hot .hotOne .TextTwo[data-v-3a4079f2]{width:85%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.search-book .content .hot .hotOne:first-child .TextOne[data-v-3a4079f2]{background:#ff4342}.search-book .content .hot .hotOne:nth-child(2) .TextOne[data-v-3a4079f2]{background:#fd9948}.search-book .content .hot .hotOne:nth-child(3) .TextOne[data-v-3a4079f2]{background:#ffcd01}.search-book .content .item[data-v-3a4079f2]{width:94%;margin:0 auto;overflow:hidden;padding:%?10?% 0;border-bottom:%?1?% solid #eee;font-size:%?28?%;color:#666;line-height:%?60?%}',""])},"77b0":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("d348"));function n(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{content:"",ph:"搜索书籍名称、作者名",selectList:[],history:[],hotsearch:[]}},onLoad:function(){var t=this;uni.getStorageSync("history")&&(this.history=uni.getStorageSync("history")),uni.request({url:i.default.HTTP+"/index/hotsearch",method:"POST",success:function(e){for(var o=[],i=e.data.hotsearch,n=0;n<i.length;n++){var a={id:i[n].novelid,title:i[n].title};o.push(a)}t.hotsearch=o}})},methods:{search:function(){uni.navigateTo({url:"search?content="+this.content})},goDetail:function(t){console.log(this.history);var e=this.history;e.push(t),this.history=e,console.log(t),uni.setStorageSync("history",e),this.$store.dispatch("history",e),this.$store.dispatch("bookId",t.id),uni.navigateTo({url:"../common/book/storyDetail?id="+this.$store.state.bookId})},goDetails:function(t){this.$store.dispatch("bookId",t),uni.navigateTo({url:"../common/book/storyDetail?id="+t})},getValue:function(t){var e=this;uni.request({url:i.default.HTTP+"/index/searchnovel",method:"POST",data:{keyword:this.content},success:function(t){console.log(t),e.selectList=t.data}})},clearHistory:function(){var t=this;uni.showModal({title:"提示",content:"是否清空所有历史记录？",success:function(e){e.confirm&&(t.history=[],uni.removeStorageSync("history"),uni.showToast({title:"删除成功",icon:"none"}))}})}}};e.default=a},aaf2:function(t,e,o){var i=o("5baf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("d9e422ba",i,!0,{sourceMap:!1,shadowMode:!1})},d348:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={HTTP:"https://xs.it-xd.cn/api",UrlHttp:"https://xs.it-xd.cn",ImgUrl:"https://xs.it-xd.cn"};e.default=i},dad2:function(t,e,o){"use strict";o.r(e);var i=o("77b0"),n=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);e["default"]=n.a},e234:function(t,e,o){"use strict";o.r(e);var i=o("15d2"),n=o("dad2");for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);o("f4ed");var s=o("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"3a4079f2",null);e["default"]=r.exports},f4ed:function(t,e,o){"use strict";var i=o("aaf2"),n=o.n(i);n.a}}]);