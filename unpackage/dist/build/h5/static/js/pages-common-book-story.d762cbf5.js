(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-book-story"],{"134b":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],staticClass:"share-pop"},[i("v-uni-view",{staticClass:"mask",on:{click:function(e){e=t.$handleEvent(e),t.close(e)}}}),i("v-uni-view",{staticClass:"pop-content"},[i("v-uni-view",{staticClass:"share-icon"},[i("v-uni-view",{staticClass:"item",on:{click:function(e){e=t.$handleEvent(e),t.shareToWeixin("WXSceneSession",t.story)}}},[i("v-uni-text",{staticClass:"icon icon-weixin"})],1),i("v-uni-view",{staticClass:"item",on:{click:function(e){e=t.$handleEvent(e),t.shareToWeixin("WXSenceTimeline",t.story)}}},[i("v-uni-text",{staticClass:"icon icon-frends-circle"})],1)],1),i("v-uni-view",{staticClass:"cancle",on:{click:function(e){e=t.$handleEvent(e),t.close(e)}}},[t._v("取消")])],1)],1)},n=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n})},"13a5":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showRecharge,expression:"showRecharge"}],staticClass:"share-pop",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.moveHandle(e)}}},[i("v-uni-view",{staticClass:"mask",on:{click:function(e){e=t.$handleEvent(e),t.close(e)}}}),i("v-uni-view",{staticClass:"pop-content"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v("余额不足")]),i("v-uni-text",{staticClass:"icon icon-close fr",on:{click:function(e){e=t.$handleEvent(e),t.close(e)}}})],1),i("v-uni-view",{staticClass:"recharge-info"},[i("v-uni-view",{staticClass:"price"},[t._v("价格："),i("v-uni-text",[t._v(t._s(t.story.price))]),t._v("书币/章"),i("v-uni-text",{staticClass:"c-red"},[t._v("（已购章节不扣费）")])],1),i("v-uni-view",{staticClass:"balance"},[t._v("余额："),i("v-uni-text",[t._v(t._s(t.story.gold))]),t._v("书币")],1)],1),i("v-uni-view",{staticClass:"recharge-number"},[i("v-uni-view",{staticClass:"title"},[t._v("充值金额")]),i("v-uni-radio-group",{staticClass:"content",on:{change:function(e){e=t.$handleEvent(e),t.changeMoney(e)}}},t._l(t.list,function(e,o){return i("v-uni-label",{key:e.amount,staticClass:"item",class:{on:t.isChecked(o)}},[i("v-uni-view",{staticClass:"radio"},[i("v-uni-radio",{attrs:{value:e.amount,checked:o===t.current}})],1),i("v-uni-view",[i("v-uni-view",{staticClass:"coin"},[i("v-uni-text",{staticClass:"gray"},[t._v(t._s(e.gold))]),t._v("书币")],1),i("v-uni-view",{staticClass:"money"},[i("v-uni-text",{staticClass:"red"},[t._v(t._s(e.amount))]),t._v("元")],1)],1)],1)}),1)],1),i("v-uni-view",{staticClass:"recharge-style"},[i("v-uni-view",{staticClass:"title"},[t._v("充值方式")]),i("v-uni-radio-group",{staticClass:"style",on:{change:function(e){e=t.$handleEvent(e),t.typeChange(e)}}},t._l(t.styleItems,function(e,o){return i("v-uni-label",{key:o,staticClass:"item"},[i("v-uni-radio",{staticClass:"radio",attrs:{value:e.value,checked:o===t.curType,color:"#BD3037"}}),i("v-uni-view",{staticClass:"style-item"},[i("v-uni-view",{staticClass:"logo"},[i("v-uni-text",{class:e.pic})],1),i("v-uni-view",{staticClass:"style-name"},[i("v-uni-view",{staticClass:"h4"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"span-gray"},[t._v("1元 = 2书币")])],1)],1)],1)}),1)],1),i("v-uni-view",{staticClass:"sure",on:{click:function(e){e=t.$handleEvent(e),t.sure(e)}}},[t._v("充值")])],1)],1)},n=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n})},"1e07":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.share-pop[data-v-56e10481]{width:100%;position:fixed;top:0;left:0;height:100vh;z-index:888;overflow:hidden}.share-pop .mask[data-v-56e10481]{width:100%;height:100vh;background-color:rgba(0,0,0,.3);position:fixed;left:0;top:0;z-index:889}.share-pop .pop-content[data-v-56e10481]{width:92%;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:999;left:4%;bottom:%?20?%;background-color:#fff;-webkit-border-radius:%?8?%;border-radius:%?8?%;-webkit-box-shadow:0 0 %?8?% #666;box-shadow:0 0 %?8?% #666}.share-pop .pop-content .title[data-v-56e10481]{width:100%;height:%?88?%;line-height:%?88?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:%?20?%;font-size:%?30?%;font-weight:600;border-bottom:%?2?% solid #ccc}.share-pop .pop-content .title .icon-close[data-v-56e10481]{margin-right:%?20?%;color:#999}.share-pop .pop-content .recharge-info[data-v-56e10481]{width:100%;font-size:%?28?%;line-height:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:%?20?%;color:#999;background-color:#f9f9f9}.share-pop .pop-content .recharge-number[data-v-56e10481]{width:100%}.share-pop .pop-content .recharge-number .title[data-v-56e10481]{width:100%;height:%?66?%;font-size:%?30?%;font-weight:600;line-height:%?66?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:%?20?%}.share-pop .pop-content .recharge-number .content[data-v-56e10481]{width:92%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.share-pop .pop-content .recharge-number .content .item[data-v-56e10481]{width:32%;position:relative;border:%?1?% solid #ddd;background-color:#f9f9f9;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?8?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin:%?10?% 0}.share-pop .pop-content .recharge-number .content .item .radio[data-v-56e10481]{position:absolute;top:0;left:0;opacity:0}.share-pop .pop-content .recharge-number .content .item .coin[data-v-56e10481]{width:100%;line-height:%?42?%;font-size:%?24?%;color:#515151}.share-pop .pop-content .recharge-number .content .item .coin .gray[data-v-56e10481]{color:#888}.share-pop .pop-content .recharge-number .content .item .money[data-v-56e10481]{width:100%;font-size:%?32?%;color:#515151;text-align:right}.share-pop .pop-content .recharge-number .content .item .money .red[data-v-56e10481]{color:red}.share-pop .pop-content .recharge-number .content .on[data-v-56e10481]{background-color:rgba(255,0,0,.1);border:%?1?% solid #ff69b4}.share-pop .pop-content .input[data-v-56e10481]{width:100%;line-height:%?60?%;text-align:center;margin:%?40?% auto}.share-pop .pop-content .input .icon[data-v-56e10481]{font-size:%?48?%}.share-pop .pop-content .input uni-input[data-v-56e10481]{display:inline-block;width:%?120?%;height:%?60?%;border:%?1?% solid #aaa;line-height:%?60?%;padding:0 %?20?%}.share-pop .pop-content .recharge-style[data-v-56e10481]{width:100%;min-height:30vh}.share-pop .pop-content .recharge-style .title[data-v-56e10481]{width:100%;height:%?66?%;font-size:%?30?%;font-weight:600;line-height:%?66?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:%?20?%}.share-pop .pop-content .recharge-style .style[data-v-56e10481]{width:100%;background-color:#fff;border-bottom:%?1?% solid #eee}.share-pop .pop-content .recharge-style .style .item[data-v-56e10481]{width:100%;margin:0 auto;padding:%?16?% 3%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:%?1?% solid #f0f0f0}.share-pop .pop-content .recharge-style .style .item .radio[data-v-56e10481]{-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.share-pop .pop-content .recharge-style .style .item .logo[data-v-56e10481]{margin:%?10?% %?20?% 0 %?20?%;text-align:center}.share-pop .pop-content .recharge-style .style .item .logo .icon[data-v-56e10481]{font-size:%?64?%}.share-pop .pop-content .recharge-style .style .item .style-item[data-v-56e10481]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;position:relative;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.share-pop .pop-content .recharge-style .style .item .style-item .tag[data-v-56e10481]{position:absolute;top:0;left:70%;width:%?200?%;height:%?34?%}.share-pop .pop-content .sure[data-v-56e10481]{width:100%;height:%?88?%;line-height:%?88?%;text-align:center;color:#fff;background-color:#09bb07;-webkit-border-radius:0 0 %?8?% %?8?%;border-radius:0 0 %?8?% %?8?%}',""])},"28c3":function(t,e,i){"use strict";i.r(e);var o=i("13a5"),n=i("5611");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("fe61");var s=i("2877"),r=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"56e10481",null);e["default"]=r.exports},"37a6":function(t,e,i){"use strict";var o=i("f298"),n=i.n(o);n.a},"3c26":function(t,e,i){"use strict";var o=i("b467"),n=i.n(o);n.a},4315:function(t,e,i){"use strict";i.r(e);var o=i("ca32"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},5611:function(t,e,i){"use strict";i.r(e);var o=i("92d7"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},"58ac":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:["story","showMe"],data:function(){return{}},methods:{shareToWeixin:function(t,e){e?uni.share({provider:"weixin",type:0,title:"点书吧",scene:t,imageUrl:e.pic,href:e.url,summary:e.content,success:function(t){uni.showToast({title:"分享成功！"})}}):uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(e){uni.share({provider:"weixin",type:2,title:"点书吧",scene:t,imageUrl:e.tempFilePaths[0],success:function(t){uni.showToast({title:"分享成功！"})}})}})},close:function(){this.$emit("closeSharePop",!1)}}};e.default=o},"7cc6":function(t,e,i){var o=i("1e07");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("010ff3aa",o,!0,{sourceMap:!1,shadowMode:!1})},"92d7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:["story","showRecharge","list"],data:function(){return{current:0,money:0,curType:0,styleItems:[{name:"微信",value:"wx",pic:"icon icon-wx-pay"},{name:"支付宝",value:"zfb",pic:"icon icon-zfb-pay"}]}},methods:{close:function(){this.$emit("closeRechargePop",!1)},moveHandle:function(){},changeMoney:function(t){var e=t.detail.value;this.money=t.detail.value;for(var i=0;i<this.list.length;i++)if(e===this.list[i].amount){this.current=i;break}},typeChange:function(t){this.type=t.detail.value;var e=t.detail.value;"wx"===e?this.curType=0:"zfb"===e?this.curType=1:"yl"===e&&(this.curType=2)},isChecked:function(t){return t===this.current},sure:function(){0===this.money&&(this.money=this.list[0].amount)}}};e.default=o},"97b5":function(t,e,i){"use strict";i.r(e);var o=i("134b"),n=i("ec17");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("3c26");var s=i("2877"),r=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"6f3233b1",null);e["default"]=r.exports},"9a4f":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"story"},[t.showHF?i("v-uni-view",{staticClass:"header"},[i("v-uni-navigator",{attrs:{"open-type":"navigateBack"}},[i("v-uni-text",{staticClass:"icon icon-back"})],1),i("v-uni-text",{staticClass:"fr icon icon-more-vertical",on:{click:function(e){e=t.$handleEvent(e),t.showMore(e)}}}),i("v-uni-text",{staticClass:"fr icon icon-download",on:{click:function(e){e=t.$handleEvent(e),t.download(e)}}}),t.moreIsShow?i("v-uni-view",{staticClass:"more-icon more-lr"},[i("v-uni-navigator",{staticClass:"more-item",attrs:{"open-type":"switchTab",url:"../../find/find"}},[i("v-uni-text",{staticClass:"icon icon-book-city"}),i("v-uni-text",{staticClass:"fl"},[t._v("去书城")])],1),i("v-uni-view",{staticClass:"more-item",on:{click:function(e){e=t.$handleEvent(e),t.goDetail(e)}}},[i("v-uni-text",{staticClass:"icon icon-book"}),i("v-uni-text",{staticClass:"fl"},[t._v("书籍详情")])],1),i("v-uni-view",{staticClass:"more-item",on:{click:function(e){e=t.$handleEvent(e),t.shareInfo(e)}}},[i("v-uni-text",{staticClass:"icon icon-share"}),i("v-uni-text",{staticClass:"fl"},[t._v("分享")])],1)],1):t._e()],1):t._e(),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"title-text"},[t._v(t._s(t.storyData.title))]),i("v-uni-view",{staticClass:"content-text"},[i("v-uni-rich-text",{attrs:{id:"data",nodes:t.contentData}}),t.showBuyBtn?t._e():i("v-uni-view",{staticClass:"btn-box"},[i("v-uni-text",{staticClass:"btn1 prev",on:{click:function(e){e=t.$handleEvent(e),t.goPrev(e)}}},[t._v("上一章")]),i("v-uni-text",{staticClass:"btn1 next",on:{click:function(e){e=t.$handleEvent(e),t.goNext(e)}}},[t._v("下一章")])],1),t.showBuyBtn?i("v-uni-view",{staticClass:"is-buy"},[i("v-uni-view",{staticClass:"balance"},[t._v("该章节为收费章节，请点击购买继续阅读")]),i("v-uni-view",{staticClass:"price"},[t._v("价格："),i("v-uni-text",[t._v(t._s(t.storyData.price))]),t._v("书币/章"),i("v-uni-text",{staticClass:"c-red"},[t._v("（已购章节不扣费）")])],1),i("v-uni-view",{staticClass:"balance"},[t._v("余额："),i("v-uni-text",[t._v(t._s(t.storyData.gold))]),t._v("书币")],1),i("v-uni-view",{staticClass:"btn-buy",on:{click:function(e){e=t.$handleEvent(e),t.buyIt(e)}}},[t._v("购买")])],1):t._e()],1),i("v-uni-view",{staticClass:"menu-box",attrs:{animation:t.animMenu}},[i("v-uni-view",{staticClass:"right",on:{touchstart:function(e){e=t.$handleEvent(e),t.menuStart(e)},touchmove:function(e){e=t.$handleEvent(e),t.menuMove(e)},touchend:function(e){e=t.$handleEvent(e),t.menuEnd(e)}}}),i("v-uni-view",{staticClass:"menu"},[i("v-uni-view",{staticClass:"title text-over-1"},[t._v(t._s(t.story.title))]),i("v-uni-view",{staticClass:"info"},[i("v-uni-text",{staticClass:"c-red",staticStyle:{"margin-right":"20upx"}},[t._v(t._s(t.story.serialize_text))]),0===t.story.serialize?i("v-uni-text",[t._v(t._s(t.updateTime)+"前更新")]):t._e()],1),i("v-uni-scroll-view",{staticClass:"content-menu",attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){e=t.$handleEvent(e),t.moreChapter(e)}}},t._l(t.chaptersList,function(e,o){return i("v-uni-view",{key:o,staticClass:"menu-item",on:{click:function(i){i=t.$handleEvent(i),t.goChapter(e)}}},[i("v-uni-view",{staticClass:"chapter text-over-1",class:[{current:e.id===t.storyData.id},{color_gray:1===e.isfree}]},[i("v-uni-text",[t._v(t._s(1+o)+"、")]),i("v-uni-text",[t._v(t._s(e.title))])],1),1===e.isfree?i("v-uni-text",{staticClass:"payment"},[t._v("(付费章节)")]):t._e()],1)}),1),i("v-uni-view",{staticClass:"menu-download",on:{click:function(e){e=t.$handleEvent(e),t.download(e)}}},[i("v-uni-text",{staticClass:"down-text"},[t._v("下载免费章节("+t._s(t.story.free_reading)+"章)")])],1)],1)],1),i("v-uni-view",{staticClass:"btn-center",on:{click:function(e){e=t.$handleEvent(e),t.centerShow(e)}}})],1),i("recharge-pop",{attrs:{showRecharge:t.rechargeShow,story:t.storyData,list:t.lists},on:{closeRechargePop:function(e){e=t.$handleEvent(e),t.closeRP(e)}}}),t.showHF?i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"footer-item",on:{click:function(e){e=t.$handleEvent(e),t.showMenu(e)}}},[i("v-uni-text",{staticClass:"icon icon-menu"}),i("v-uni-view",[t._v("目录")])],1),i("v-uni-view",{staticClass:"footer-item",on:{click:function(e){e=t.$handleEvent(e),t.goPrev(e)}}},[i("v-uni-text",{staticClass:"icon icon-prev-step"}),i("v-uni-view",[t._v("上一章")])],1),i("v-uni-view",{staticClass:"footer-item",on:{click:function(e){e=t.$handleEvent(e),t.goNext(e)}}},[i("v-uni-text",{staticClass:"icon icon-next-step"}),i("v-uni-view",[t._v("下一章")])],1),i("v-uni-view",{staticClass:"footer-item",on:{click:function(e){e=t.$handleEvent(e),t.goComment(e)}}},[i("v-uni-text",{staticClass:"icon icon-comment"}),i("v-uni-view",[t._v("评论")])],1)],1):t._e()],1)},n=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n})},a4eb:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.share-pop[data-v-6f3233b1]{width:100%;position:fixed;top:0;left:0;height:100vh;z-index:888}.share-pop .mask[data-v-6f3233b1]{width:100%;height:100vh;background-color:rgba(0,0,0,.3);position:fixed;left:0;top:0;z-index:889}.share-pop .pop-content[data-v-6f3233b1]{width:92%;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:999;left:4%;bottom:%?20?%;background-color:#fff;-webkit-border-radius:%?8?%;border-radius:%?8?%}.share-pop .pop-content .share-icon[data-v-6f3233b1]{width:100%;height:15vh;padding:%?20?% 0 %?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.share-pop .pop-content .share-icon .item[data-v-6f3233b1]{width:20%;text-align:center}.share-pop .pop-content .share-icon .item .icon[data-v-6f3233b1]{font-size:%?88?%;display:inline-block}.share-pop .pop-content .share-icon .item .icon-qq[data-v-6f3233b1]{color:#5eaade}.share-pop .pop-content .share-icon .item .icon-weixin[data-v-6f3233b1]{color:#50b674}.share-pop .pop-content .share-icon .item .icon-frends-circle[data-v-6f3233b1]{color:#50b674}.share-pop .pop-content .cancle[data-v-6f3233b1]{width:100%;height:%?78?%;line-height:%?78?%;text-align:center;border-top:%?1?% solid #eee;color:#999}',""])},b467:function(t,e,i){var o=i("a4eb");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("4e5426f2",o,!0,{sourceMap:!1,shadowMode:!1})},c40d:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.story[data-v-20c82dba]{width:100%;height:100vh;background-color:#fff9eb;position:relative;z-index:1}.story .header[data-v-20c82dba]{width:100%;height:%?88?%;line-height:%?88?%;padding-top:%?44?%;background-color:#fff;position:fixed;top:0;left:0;z-index:99}.story .header .icon-back[data-v-20c82dba]{float:left;color:#999;font-weight:600;margin-left:%?40?%}.story .header .fr[data-v-20c82dba]{color:#bd3037;margin-right:%?40?%;font-weight:600}.story .header .fl[data-v-20c82dba]{color:#bd3037;margin-left:%?40?%;font-weight:600}.story .header .more-icon[data-v-20c82dba]{width:%?250?%;position:absolute;top:%?130?%;right:0;font-size:%?28?%;border:%?1?% solid #ccc;z-index:999}.story .header .more-icon .more-item[data-v-20c82dba]{font-size:%?28?%;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;border-bottom:1px solid #ccc;overflow:hidden}.story .header .more-icon .more-item .icon[data-v-20c82dba]{color:#bd3037;font-size:%?50?%;float:left}.story .header .more-icon .more-item .fl[data-v-20c82dba]{color:#515151;margin-left:%?10?%}.story .header .more-icon .more-item .c-red[data-v-20c82dba]{font-size:%?20?%}.story .header .more-icon .more-item .mp-share[data-v-20c82dba]{width:70%;height:100%;background-color:#fff;font-size:%?28?%;padding:%?10?% 0;text-align:left}.story .header .more-icon .more-item .mp-share[data-v-20c82dba]:after{border:none}.story .content[data-v-20c82dba]{width:100%;height:100vh;color:#756959;font-size:%?30?%;text-indent:2em;background-color:#fff9eb;-webkit-box-sizing:border-box;box-sizing:border-box;border-top:%?1?% solid #fff9eb;position:relative}.story .content .menu-box[data-v-20c82dba]{position:fixed;top:0;left:-100%;z-index:99;width:100%;height:100vh}.story .content .menu-box .right[data-v-20c82dba]{position:absolute;top:0;right:0;z-index:99;width:10%;height:100vh;opacity:0}.story .content .menu-box .menu[data-v-20c82dba]{width:90%;height:100vh;padding-top:%?40?%;color:#756959;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;border-right:%?2?% solid #999;-webkit-box-shadow:%?4?% 0 %?60?% #515151;box-shadow:%?4?% 0 %?60?% #515151;background-color:#fff9eb}.story .content .menu-box .menu .content-menu[data-v-20c82dba]{height:82vh}.story .content .menu-box .menu .title[data-v-20c82dba]{width:90%;font-size:%?48?%}.story .content .menu-box .menu .info[data-v-20c82dba]{font-size:%?24?%;color:#c4c0b5;margin-top:%?20?%}.story .content .menu-box .menu .menu-item[data-v-20c82dba]{font-size:%?28?%;width:100%;height:%?74?%;line-height:%?74?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.story .content .menu-box .menu .menu-item .chapter[data-v-20c82dba]{width:76%;display:inline-block}.story .content .menu-box .menu .menu-item .payment[data-v-20c82dba]{font-size:%?20?%;color:#bd3037}.story .content .menu-box .menu .menu-item .color_gray[data-v-20c82dba]{color:#999}.story .content .menu-box .menu .menu-item .current[data-v-20c82dba]{color:#b3752c}.story .content .menu-box .menu .menu-download[data-v-20c82dba]{position:absolute;bottom:0;left:0;z-index:100;display:inline-block;width:100%;height:%?88?%;line-height:%?88?%;text-align:center;border-top:%?1?% solid #aaa;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff9eb}.story .content .btn-center[data-v-20c82dba]{width:50%;height:50vh;opacity:0;position:fixed;top:25vh;left:25%;z-index:92}.story .content .current-page[data-v-20c82dba]{position:absolute;bottom:%?10?%;right:%?20?%;font-size:%?24?%}.story .content .title-text[data-v-20c82dba]{width:100%;height:3vh;font-size:%?28?%;color:#b3752c;line-height:%?40?%;position:fixed;padding-top:1vh;top:0;left:0;z-index:10;background-color:#fff9eb}.story .content .content-text[data-v-20c82dba]{width:100%;min-height:100vh;line-height:26px;font-size:%?34?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:relative;top:4vh;z-index:2;padding:0 %?20?%;background-color:#fff9eb;overflow-x:hidden}.story .content .content-text #data[data-v-20c82dba]{width:100%;background-color:#fff9eb}.story .content .content-text .btn-box[data-v-20c82dba]{width:100%;margin-top:%?40?%;height:14vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.story .content .content-text .btn-box .btn1[data-v-20c82dba]{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;height:%?80?%;line-height:%?80?%;-webkit-border-radius:%?8?%;border-radius:%?8?%;padding-right:%?40?%;text-align:left}.story .content .content-text .btn-box .prev[data-v-20c82dba]{color:#bd3037;border:%?1?% solid #bd3037}.story .content .content-text .btn-box .next[data-v-20c82dba]{background-color:#bd3037;color:#fff}.story .content .content-text .is-buy[data-v-20c82dba]{width:100%;height:30vh;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?40?%;font-size:%?28?%;color:#999;background-color:#fff9eb;position:absolute;left:0;bottom:%?200?%}.story .content .content-text .is-buy .c-red[data-v-20c82dba]{font-size:%?24?%}.story .content .content-text .is-buy .btn-buy[data-v-20c82dba]{width:%?180?%;height:%?66?%;margin:0 auto;line-height:%?66?%;margin-top:%?15?%;border:%?1?% solid #756959;-webkit-border-radius:%?8?%;border-radius:%?8?%;color:#756959;font-size:%?32?%;padding:0;background-color:rgba(255,249,235,0)}.story .footer[data-v-20c82dba]{width:100%;position:fixed;left:0;bottom:0;z-index:99;background-color:#fff;border-top:%?4?% solid #f3eddf;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.story .footer .footer-item[data-v-20c82dba]{width:25%;text-align:center;padding:%?20?% 0;font-size:%?28?%;color:#756959}.story .footer .footer-item .icon[data-v-20c82dba]{font-size:%?48?%}',""])},ca32:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(i("d348")),n=r(i("97b5")),a=r(i("28c3")),s=r(i("f30b"));function r(t){return t&&t.__esModule?t:{default:t}}var c={components:{sharePop:n.default,rechargePop:a.default},data:function(){return{animationHeader:{},animTxt:{},animMenu:{},moreIsShow:!1,showHF:!1,story:{},rechargeShow:!1,isMenuShow:!1,shareShow:!1,curChapter:1,chaptersList:[],menuX:0,menuEndX:0,menu_x:0,showBuyBtn:!1,lists:[],share_url:"",share_title:"",isLogin:this.$store.state.isLogin}},onShareAppMessage:function(t){var e=this.storyData.source_id,i=this.storyData.ncontent,o=this.storyData.pic;this.storyData.url;return{title:i,path:"/pages/common/book/storyDetail?id="+e,imageUrl:o}},onLoad:function(){var t=this,e=this.$store.state.bookId,i="";if(this.isLogin)i=JSON.parse(uni.getStorageSync("userInfo")).id;else i=0;uni.request({url:o.default.HTTP+"/novel/getnovel",method:"POST",data:{novelid:e,uid:i},success:function(e){t.story=e.data.novel[0],t.share_url=t.story.author_url,t.share_title=t.story.title,t.comment=e.data.comment,t.comments=e.data.comment.slice(0,3),t.other=e.data.othernovel,t.others=e.data.othernovel.slice(0,4),t.similar=e.data.similarnovel,t.similars=e.data.similarnovel.slice(0,4),t.$store.dispatch("comments",e.data.comment),t.$store.dispatch("story",t.story)}}),0===this.$store.state.storyData.isbuy&&(this.showBuyBtn=!0),uni.request({url:o.default.HTTP+"/Generalize/moneylist",method:"POST",success:function(e){t.lists=e.data.money}})},onShow:function(){var t=this,e=this.$store.state.bookId,i="";i=this.isLogin?JSON.parse(uni.getStorageSync("userInfo")).id:0,uni.request({url:o.default.HTTP+"/novel/getnovel",method:"POST",data:{novelid:e,uid:i},success:function(e){t.story=e.data.novel[0],t.comment=e.data.comment,t.comments=e.data.comment.slice(0,3),t.other=e.data.othernovel,t.others=e.data.othernovel.slice(0,4),t.similar=e.data.similarnovel,t.similars=e.data.similarnovel.slice(0,4),t.$store.dispatch("comments",e.data.comment),t.$store.dispatch("story",t.story)}});var n=uni.createAnimation({duration:500,timingFunction:"ease"});this.animation=n},onBackPress:function(){if(this.shareObj.shareMenu.isVisible())return this.shareObj.shareMenu.hide(),this.shareObj.alphaBg.hide(),!0},onReachBottom:function(){console.log("这是触底加载"),this.goNext(),console.log("触底加载完毕")},methods:{shareInfo:function(){var t=this,e={href:this.share_url,title:this.share_title},i=[{icon:"/static/sharemenu/wx.png",text:"微信好友"},{icon:"/static/sharemenu/pyq.png",text:"朋友圈"},{icon:"/static/sharemenu/weibo.png",text:"微博"},{icon:"/static/sharemenu/qq.png",text:"QQ"},{icon:"/static/sharemenu/copy.png",text:"复制"},{icon:"/static/sharemenu/more.png",text:"更多"}];this.shareObj=(0,s.default)(e,i,function(t){console.log("点击按钮的序号: "+t);var i={href:e.href||"",title:e.title||"",summary:e.desc||"",success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){console.log("fail:"+JSON.stringify(t))}};switch(t){case 0:i.provider="weixin",i.scene="WXSceneSession",i.type=0,i.imageUrl=e.imgUrl||"",uni.share(i);break;case 1:i.provider="weixin",i.scene="WXSenceTimeline",i.type=0,i.imageUrl=e.imgUrl||"",uni.share(i);break;case 2:i.provider="sinaweibo",i.type=0,i.imageUrl=e.imgUrl||"",uni.share(i);break;case 3:i.provider="qq",i.type=1,i.imageUrl=e.imgUrl||"",uni.share(i);break;case 4:uni.setClipboardData({data:e.href,complete:function(){uni.showToast({title:"已复制到剪贴板"})}});break;case 5:plus.share.sendWithSystem({type:"web",title:e.title||"",thumbs:[e.imgUrl||""],href:e.href||"",content:e.desc||""});break}}),this.$nextTick(function(){t.shareObj.alphaBg.show(),t.shareObj.shareMenu.show()})},goNext:function(){var t=this,e=this.storyData.next.id,i="";i=this.isLogin?JSON.parse(uni.getStorageSync("userInfo")).id:0;var n=this.storyData.source_id;e?(uni.showLoading({title:"loading...",mask:!0}),uni.request({url:o.default.HTTP+"/novel/getnovelcontent",method:"POST",data:{id:n,key:e,uid:i},success:function(e){t.$store.dispatch("storyData",e.data),uni.pageScrollTo({scrollTop:0,duration:1e3}),uni.hideLoading(),0===e.data.isbuy&&(t.showBuyBtn=!0)}})):uni.showToast({title:"已经是最后一章了",icon:"none"})},buyIt:function(){var t=this;if(0==this.$store.state.isLogin)uni.showModal({title:"提示",content:"您还没有登录，是否登录？",success:function(t){t.confirm&&uni.navigateTo({url:"../login"})}});else{var e=this.storyData.id,i="";i=this.isLogin?JSON.parse(uni.getStorageSync("userInfo")).id:0;var n=this.storyData.source_id,a=this.storyData.price;uni.request({url:o.default.HTTP+"/novel/buynovelchapter",method:"POST",data:{id:n,key:e,price:a,uid:i},success:function(e){1===e.data.code?t.rechargeShow=!0:0===e.data.code&&(t.$store.dispatch("storyData",e.data.data),uni.pageScrollTo({scrollTop:0,duration:300}),t.showBuyBtn=!1)}})}},goPrev:function(){var t=this,e=this.storyData.prev.id,i=this.storyData.source_id,n="";n=this.isLogin?JSON.parse(uni.getStorageSync("userInfo")).id:0,e?uni.request({url:o.default.HTTP+"/novel/getnovelcontent",method:"POST",data:{id:i,key:e,uid:n},success:function(e){t.$store.dispatch("storyData",e.data),uni.pageScrollTo({scrollTop:0,duration:300})}}):uni.showToast({title:"已经是第一章了",icon:"none"})},menuStart:function(t){this.menuX=t.touches[0].pageX},menuMove:function(t){this.menuEndX=t.changedTouches[0].pageX},menuEnd:function(t){this.menu_x=this.menuEndX-this.menuX,this.menu_x<-10&&(this.animation.left("-100%").step(),this.animMenu=this.animation.export())},showMore:function(){this.moreIsShow=!this.moreIsShow},centerShow:function(){this.showHF=!this.showHF,this.moreIsShow=!1,this.animation.translateY(0,66).step(),this.animationHeader=this.animation.export()},showMenu:function(){var t=this;this.animation.left(0).step(),this.animMenu=this.animation.export(),this.showHF=!1,uni.showLoading({mask:!0,title:"正在加载"});this.$store.state.bookId;var e="";e=this.isLogin?JSON.parse(uni.getStorageSync("userInfo")).id:0;var i=this.curChapter;uni.request({url:o.default.HTTP+"/novel/getchapterlist",method:"POST",data:{id:this.storyData.novel_id,uid:e,pagesize:200,pagenum:i},success:function(e){console.log(e),t.story=e.data,t.chaptersList=e.data.chapter,uni.hideLoading()}})},moreChapter:function(){var t=this;uni.showLoading({mask:!0,title:"正在加载"});var e=this.$store.state.bookId,i="";i=this.isLogin?JSON.parse(uni.getStorageSync("userInfo")).id:0,this.curChapter++;var n=this.curChapter;uni.request({url:o.default.HTTP+"/novel/getchapterlist",method:"POST",data:{id:e,uid:i,pagesize:200,pagenum:n},success:function(e){t.chaptersList=e.data.chapter,uni.hideLoading(),1===e.data.islast&&uni.showToast({title:"已经到底啦",icon:"none"})}})},download:function(){uni.getSavedFileList({success:function(t){console.log(t.fileList)}});var t=this.$store.state.bookId;uni.downloadFile({url:o.default.HTTP+"/novel/noveldownload1?novelid="+t,success:function(t){console.log(t),200===t.statusCode&&uni.saveFile({tempFilePath:t.tempFilePath,success:function(t){uni.showToast({title:"保存成功："+t.savedFilePath,icon:"none"})}})}})},goComment:function(){var t=this,e=this.$store.state.bookId,i="";i=this.isLogin?JSON.parse(uni.getStorageSync("userInfo")).id:0,uni.request({url:o.default.HTTP+"/novel/getnovel",method:"POST",data:{novelid:e,uid:i},success:function(e){t.$store.dispatch("comments",e.data.comment),uni.navigateTo({url:"allComments"})}})},goChapter:function(t){var e=this;this.isMenuShow=!1;var i=this.$store.state.story.source_id,n=t.id,a="";a=this.isLogin?JSON.parse(uni.getStorageSync("userInfo")).id:0,uni.request({url:o.default.HTTP+"/novel/getnovelcontent",method:"POST",data:{id:i,key:n,uid:a},success:function(t){e.$store.dispatch("storyData",t.data),uni.redirectTo({url:"story"})}})},goDetail:function(){this.$store.dispatch("bookId",this.$store.state.bookId),uni.redirectTo({url:"storyDetail?id="+this.$store.state.bookId})},closeSP:function(t){this.shareShow=t},closeRP:function(t){this.rechargeShow=t}},computed:{storyData:function(){return this.$store.state.storyData},contentData:function(){return this.storyData.content},updateTime:function(){var t=parseInt((new Date).getTime()/1e3),e=parseInt(t-this.story.update_time);return e<0?"1秒":e>=0&&e<60?e+"秒":e>=60&&e<3600?Math.ceil(e/60)+"分钟":e>=3600&&e<86400?Math.ceil(e/3600)+"小时":e>=86400&&e<2592e3?Math.ceil(e/86400)+"天":e>=2592e3&&e<31104e3?Math.ceil(e/2592e3)+"月":Math.ceil(e/31104e3)+"年"}}};e.default=c},d1dc:function(t,e,i){"use strict";i.r(e);var o=i("9a4f"),n=i("4315");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("37a6");var s=i("2877"),r=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"20c82dba",null);e["default"]=r.exports},d348:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={HTTP:"https://xs.it-xd.cn/api",UrlHttp:"https://xs.it-xd.cn",ImgUrl:"https://xs.it-xd.cn"};e.default=o},ec17:function(t,e,i){"use strict";i.r(e);var o=i("58ac"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},f298:function(t,e,i){var o=i("c40d");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("2143627b",o,!0,{sourceMap:!1,shadowMode:!1})},f30b:function(t,e,i){"use strict";function o(t,e,i){var o=plus.screen.resolutionWidth,n=25,a=25,s=55,r=55,c=10,l=12,d=Math.floor(o/(s+a)),u=(o-(s+a)*d-a)/(d+1),h=a+u,p=s+h,f=r+c+l+n,v=r+c,b=new plus.nativeObj.View("alphaBg",{top:"0px",left:"0px",height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.5)"});b.addEventListener("click",function(){b.hide(),m.hide()});var m=new plus.nativeObj.View("shareMenu",{bottom:"0px",left:"0px",height:Math.ceil(e.length/d)*f+n+44+1+"px",width:"100%",backgroundColor:"rgb(255,255,255)"});return m.draw([{tag:"rect",color:"#e7e7e7",position:{top:"0px",height:"1px"}},{tag:"font",id:"sharecancel",text:"取消分享",textStyles:{size:"14px"},position:{bottom:"0px",height:"44px"}},{tag:"rect",color:"#e7e7e7",position:{bottom:"45px",height:"1px"}}]),e.map(function(t,e){var i=(new Date).getTime(),o=Math.floor(e/d),a=e%d,r=[{src:t.icon,id:1e3*Math.random()+i,tag:"img",position:{top:o*f+n,left:a*p+h,width:s,height:s}},{text:t.text,id:1e3*Math.random()+i,tag:"font",textStyles:{size:l},position:{top:o*f+v,left:a*p+h,width:s,height:s}}];m.draw(r)}),m.addEventListener("click",function(t){if(t.screenY>plus.screen.resolutionHeight-44)b.hide(),m.hide();else if(t.clientX<5||t.clientX>o-5||t.clientY<5);else{var e=t.clientX,n=t.clientY,a=Math.floor(e/p),s=Math.floor(n/f),r=a+s*d;i&&i(r)}}),{alphaBg:b,shareMenu:m}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o;e.default=n},fe61:function(t,e,i){"use strict";var o=i("7cc6"),n=i.n(o);n.a}}]);