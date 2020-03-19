(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/common/book/story"],{

/***/ 74:
/*!*********************************************************************************************************************!*\
  !*** F:/2019.11.10之前证书类东西/项目/小说/点说吧整站小说源码最新版2019-7-19/dsb8.31/dsb/main.js?{"page":"pages%2Fcommon%2Fbook%2Fstory"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _story = _interopRequireDefault(__webpack_require__(/*! ./pages/common/book/story.vue */ 75));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_story.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 75:
/*!************************************************************************************************!*\
  !*** F:/2019.11.10之前证书类东西/项目/小说/点说吧整站小说源码最新版2019-7-19/dsb8.31/dsb/pages/common/book/story.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _story_vue_vue_type_template_id_bf6ff9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story.vue?vue&type=template&id=bf6ff9e2&scoped=true& */ 76);
/* harmony import */ var _story_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story.vue?vue&type=script&lang=js& */ 78);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _story_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _story_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _story_vue_vue_type_style_index_0_id_bf6ff9e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story.vue?vue&type=style&index=0&id=bf6ff9e2&lang=scss&scoped=true& */ 81);
/* harmony import */ var _D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _story_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _story_vue_vue_type_template_id_bf6ff9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _story_vue_vue_type_template_id_bf6ff9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bf6ff9e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/2019.11.10之前证书类东西/项目/小说/点说吧整站小说源码最新版2019-7-19/dsb8.31/dsb/pages/common/book/story.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/*!*******************************************************************************************************************************************!*\
  !*** F:/2019.11.10之前证书类东西/项目/小说/点说吧整站小说源码最新版2019-7-19/dsb8.31/dsb/pages/common/book/story.vue?vue&type=template&id=bf6ff9e2&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_template_id_bf6ff9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./story.vue?vue&type=template&id=bf6ff9e2&scoped=true& */ 77);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_template_id_bf6ff9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_template_id_bf6ff9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 77:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/2019.11.10之前证书类东西/项目/小说/点说吧整站小说源码最新版2019-7-19/dsb8.31/dsb/pages/common/book/story.vue?vue&type=template&id=bf6ff9e2&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 78:
/*!*************************************************************************************************************************!*\
  !*** F:/2019.11.10之前证书类东西/项目/小说/点说吧整站小说源码最新版2019-7-19/dsb8.31/dsb/pages/common/book/story.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./story.vue?vue&type=script&lang=js& */ 79);
/* harmony import */ var _D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 79:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/2019.11.10之前证书类东西/项目/小说/点说吧整站小说源码最新版2019-7-19/dsb8.31/dsb/pages/common/book/story.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;











































































































var _urls = _interopRequireDefault(__webpack_require__(/*! ../../../utils/urls.js */ 23));


var _share = _interopRequireDefault(__webpack_require__(/*! ../../../utils/share.js */ 80));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var sharePop = function sharePop() {return __webpack_require__.e(/*! import() | pages/components/sharePop */ "pages/components/sharePop").then(__webpack_require__.bind(null, /*! ../../components/sharePop.vue */ 410));};var rechargePop = function rechargePop() {return __webpack_require__.e(/*! import() | pages/components/rechargePop */ "pages/components/rechargePop").then(__webpack_require__.bind(null, /*! ../../components/rechargePop.vue */ 417));};var _default = { components: { sharePop: sharePop, rechargePop: rechargePop }, data: function data() {return { animationHeader: {}, animTxt: {}, animMenu: {}, moreIsShow: false, showHF: false, story: {}, rechargeShow: false, isMenuShow: false, shareShow: false, // 分享界面
      curChapter: 1, // 章节列表分页---当前页
      chaptersList: [], // 章节列表
      menuX: 0, menuEndX: 0, menu_x: 0, // shareInfo: {},
      showBuyBtn: false, lists: [], // 充值金额列表
      share_url: '', share_title: '', share_content: '', isLogin: this.$store.state.isLogin, "second": 0 //计时器
    };}, onShareAppMessage: function onShareAppMessage(res) {var novelid = this.storyData.source_id;var title = this.storyData.ncontent;var imageUrl = this.storyData.pic;var url = this.storyData.url;return { title: title, path: '/pages/common/book/storyDetail?id=' + novelid, imageUrl: imageUrl };}, onLoad: function onLoad() {var _this = this;var id = this.$store.state.bookId;var ids = '';if (this.isLogin) {var ids = JSON.parse(uni.getStorageSync('userInfo')).id;} else {ids = 0;}uni.request({ url: _urls.default.HTTP + '/novel/getnovel', method: 'POST', data: { novelid: id, uid: ids }, success: function success(res) {// console.log('书籍详情', res.data)
        _this.story = res.data.novel[0];_this.share_url = _this.story.url, _this.share_title = _this.story.title, _this.share_content = _this.story.ncontent, _this.comment = res.data.comment;_this.comments = res.data.comment.slice(0, 3);_this.other = res.data.othernovel;_this.others = res.data.othernovel.slice(0, 4);_this.similar = res.data.similarnovel;_this.similars = res.data.similarnovel.slice(0, 4);_this.$store.dispatch('comments', res.data.comment);_this.$store.dispatch('story', _this.story);} });if (this.$store.state.storyData.isbuy === 0) {this.showBuyBtn = true;}uni.request({ url: _urls.default.HTTP + '/Generalize/moneylist', method: 'POST', success: function success(res) {// console.log(res)
        _this.lists = res.data.money;} });this.timer = setInterval(function () {_this.second = Number(_this.second) + 1; //console.log(this.second);
      if (_this.v_time == 9) {//开始验证
        var ti = Date.parse(_this.scroll_time) - Date.parse(_this.start_time);if (ti < _this.old_time) {clearInterval(_this.timer);}} //console.log(this.second);
      if (_this.v_time == 9) {//开始验证
        var ti = Date.parse(_this.scroll_time) - Date.parse(_this.start_time);if (ti < _this.old_time) {clearInterval(_this.timer);}}}, 1000);}, onShow: function onShow() {var _this2 = this; // var animation = uni.createAnimation({
    //   duration: 1000
    // })
    // this.animation = animation
    var id = this.$store.state.bookId;var id1 = '';if (this.isLogin) {id1 = JSON.parse(uni.getStorageSync('userInfo')).id;} else {id1 = 0;}

    // let uid = JSON.parse(uni.getStorageSync("userInfo")).id
    // let user = uni.getStorageSync("userInfo");
    // let uid =""
    // if(user){
    // 	uid=JSON.parse(user).id
    // }
    // console.log(id)
    uni.request({
      url: _urls.default.HTTP + '/novel/getnovel',
      method: 'POST',
      data: {
        novelid: id,
        uid: id1 },

      success: function success(res) {
        // console.log('书籍详情', res.data)
        _this2.story = res.data.novel[0];
        _this2.comment = res.data.comment;
        _this2.comments = res.data.comment.slice(0, 3);
        _this2.other = res.data.othernovel;
        _this2.others = res.data.othernovel.slice(0, 4);
        _this2.similar = res.data.similarnovel;
        _this2.similars = res.data.similarnovel.slice(0, 4);
        _this2.$store.dispatch('comments', res.data.comment);
        _this2.$store.dispatch('story', _this2.story);
      } });




    var animation = uni.createAnimation({
      duration: 500,
      timingFunction: 'ease' });

    this.animation = animation;
  },

  //监听滚动
  /**
   *  记录进入页面时间 start_time  计时器开始
   *  计时器中每5秒判断  scroll_time - start_time 是否大于 old_time 然后赋值给 old_time   如果大于继续计时 否则暂停
   */
  onPageScroll: function onPageScroll(e) {
    // console.log(e);

  },
  //离开当前页面后执行
  onUnload: function onUnload() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.isLogin) {
      var id = JSON.parse(uni.getStorageSync('userInfo')).id;
      uni.request({
        url: _urls.default.HTTP + '/novel/getreadtime',
        method: 'POST',
        data: {
          uid: id,
          time: this.second },

        success: function success(res) {
          // console.log(res)
        } });

    }

  },
  onBackPress: function onBackPress() {
    //监听back键，关闭弹出菜单
    if (this.shareObj.shareMenu.isVisible()) {
      this.shareObj.shareMenu.hide();
      this.shareObj.alphaBg.hide();
      return true;
    }
  },
  onReachBottom: function onReachBottom() {
    console.log('这是触底加载');
    this.goNext();
    console.log('触底加载完毕');
  },
  methods: {
    shareInfo: function shareInfo() {var _this3 = this;
      var shareInfo = {
        href: this.share_url,
        title: this.share_title,
        desc: this.share_content };

      var shareList = [{
        icon: "/static/sharemenu/wx.png",
        text: "微信好友" },

      {
        icon: "/static/sharemenu/pyq.png",
        text: "朋友圈" },

      // {
      // 	icon: "/static/sharemenu/weibo.png",
      // 	text: "微博"
      // },
      {
        icon: "/static/sharemenu/qq.png",
        text: "QQ" },

      {
        icon: "/static/sharemenu/copy.png",
        text: "复制" },

      {
        icon: "/static/sharemenu/more.png",
        text: "更多" }];


      this.shareObj = (0, _share.default)(shareInfo, shareList, function (index) {
        console.log("点击按钮的序号: " + index);
        var shareObj = {
          href: shareInfo.href || "",
          title: shareInfo.title || "",
          summary: shareInfo.desc || "",
          success: function success(res) {
            var user = uni.getStorageSync("userInfo");
            var uid = "";
            if (user) {
              uid = JSON.parse(user).id;
            } else {
              uid = 0;
            }
            uni.request({
              url: _urls.default.HTTP + '/share/novelshare',
              method: 'POST',
              data: {
                uid: uid },

              success: function success(res) {
                //console.log(res)
              } });

            console.log("success:" + JSON.stringify(res));
          },
          fail: function fail(err) {
            console.log("fail:" + JSON.stringify(err));
          } };

        switch (index) {
          case 0:
            shareObj.provider = "weixin";
            shareObj.scene = "WXSceneSession";
            shareObj.type = 0;
            shareObj.imageUrl = shareInfo.imgUrl || "";
            uni.share(shareObj);
            break;
          case 1:
            shareObj.provider = "weixin";
            shareObj.scene = "WXSenceTimeline";
            shareObj.type = 0;
            shareObj.imageUrl = shareInfo.imgUrl || "";
            uni.share(shareObj);
            break;
          // case 2:
          // 	shareObj.provider = "sinaweibo";
          // 	shareObj.type = 0;
          // 	shareObj.imageUrl = shareInfo.imgUrl || "";
          // 	uni.share(shareObj);
          // 	break;
          case 2:
            shareObj.provider = "qq";
            shareObj.type = 1;
            shareObj.imageUrl = shareInfo.imgUrl || "";
            uni.share(shareObj);
            break;
          case 3:
            uni.setClipboardData({
              data: shareInfo.href,
              complete: function complete() {
                uni.showToast({
                  title: "已复制到剪贴板" });

              } });

            break;
          case 4:
            plus.share.sendWithSystem({
              type: "web",
              title: shareInfo.title || "",
              thumbs: [shareInfo.imgUrl || ""],
              href: shareInfo.href || "",
              content: shareInfo.desc || "" });

            break;}
        ;
      });
      this.$nextTick(function () {
        _this3.shareObj.alphaBg.show();
        _this3.shareObj.shareMenu.show();
      });
    },
    goNext: function goNext() {var _this4 = this;
      var key = this.storyData.next.id;

      var id = '';
      if (this.isLogin) {
        id = JSON.parse(uni.getStorageSync('userInfo')).id;
      } else {
        id = 0;
      }

      // let uid = JSON.parse(uni.getStorageSync('userInfo')).id
      var bookId = this.storyData.source_id;
      if (!key) {
        uni.showToast({
          title: '已经是最后一章了',
          icon: 'none' });

      } else {
        uni.showLoading({
          title: 'loading...',
          mask: true });

        uni.request({
          url: _urls.default.HTTP + '/novel/getnovelcontent',
          method: 'POST',
          data: {
            id: bookId,
            key: key,
            uid: id },

          success: function success(res) {
            // console.log('下一章', res)
            _this4.$store.dispatch('storyData', res.data);
            uni.pageScrollTo({
              scrollTop: 0,
              duration: 1000 });

            uni.hideLoading();
            if (res.data.isbuy === 0) {
              _this4.showBuyBtn = true;
            }
          } });

      }
    },
    buyIt: function buyIt() {var _this5 = this;
      if (this.$store.state.isLogin == false) {
        uni.showModal({
          title: '提示',
          content: '您还没有登录，是否登录？',
          success: function success(res) {
            if (res.confirm) {
              uni.navigateTo({
                url: '../login' });

            }
          } });

      } else {
        var key = this.storyData.id;

        var id = '';
        if (this.isLogin) {
          id = JSON.parse(uni.getStorageSync('userInfo')).id;
        } else {
          id = 0;
        }

        // let uid = JSON.parse(uni.getStorageSync('userInfo')).id
        var bookId = this.storyData.source_id;
        var price = this.storyData.price;
        uni.request({
          url: _urls.default.HTTP + '/novel/buynovelchapter',
          method: 'POST',
          data: {
            id: bookId,
            key: key,
            price: price,
            uid: id },

          success: function success(res) {
            // console.log(res)
            if (res.data.code === 1) {
              _this5.rechargeShow = true;
            } else if (res.data.code === 0) {
              _this5.$store.dispatch('storyData', res.data.data);
              uni.pageScrollTo({
                scrollTop: 0,
                duration: 300 });

              _this5.showBuyBtn = false;
            }
          } });

      }
    },
    goPrev: function goPrev() {var _this6 = this;
      var key = this.storyData.prev.id;
      var bookId = this.storyData.source_id;

      var id = '';
      if (this.isLogin) {
        id = JSON.parse(uni.getStorageSync('userInfo')).id;
      } else {
        id = 0;
      }

      // let uid = JSON.parse(uni.getStorageSync('userInfo')).id
      if (!key) {
        uni.showToast({
          title: '已经是第一章了',
          icon: 'none' });

      } else {
        uni.request({
          url: _urls.default.HTTP + '/novel/getnovelcontent',
          method: 'POST',
          data: {
            id: bookId,
            key: key,
            uid: id },

          success: function success(res) {
            // console.log('上一章', res)
            _this6.$store.dispatch('storyData', res.data);
            uni.pageScrollTo({
              scrollTop: 0,
              duration: 300 });

          } });

      }
    },
    menuStart: function menuStart(e) {
      this.menuX = e.touches[0].pageX;
    },
    menuMove: function menuMove(e) {
      this.menuEndX = e.changedTouches[0].pageX;
    },
    menuEnd: function menuEnd(e) {
      this.menu_x = this.menuEndX - this.menuX;
      if (this.menu_x < -10) {
        this.animation.left(-100 + '%').step();
        this.animMenu = this.animation.export();
      }
    },
    showMore: function showMore() {
      this.moreIsShow = !this.moreIsShow;
    },
    centerShow: function centerShow() {
      this.showHF = !this.showHF;
      this.moreIsShow = false;
      this.animation.translateY(0, 66).step();
      this.animationHeader = this.animation.export();
    },
    showMenu: function showMenu() {var _this7 = this; // 阅读页菜单初始值
      this.animation.left(0).step();
      this.animMenu = this.animation.export();
      this.showHF = false;
      uni.showLoading({
        mask: true,
        title: '正在加载' });

      var bookId = this.storyData.novel_id;
      console.log(bookId);
      var id = '';
      if (this.isLogin) {
        id = JSON.parse(uni.getStorageSync('userInfo')).id;
      } else {
        id = 0;
      }

      // let uid = JSON.parse(uni.getStorageSync('userInfo')).id
      var pagenum = this.curChapter;
      uni.request({
        url: _urls.default.HTTP + '/novel/getchapterlist',
        method: 'POST',
        data: {
          id: this.storyData.novel_id,
          uid: id,
          pagesize: 200,
          pagenum: pagenum },

        success: function success(res) {
          console.log(res);
          _this7.story = res.data;
          _this7.chaptersList = res.data.chapter;
          uni.hideLoading();
        } });

    },
    moreChapter: function moreChapter() {var _this8 = this; // 滚动到菜单栏底部加载更多章节
      uni.showLoading({
        mask: true,
        title: '正在加载' });

      var bookId = this.storyData.novel_id;
      console.log(bookId);
      var id = '';
      if (this.isLogin) {
        id = JSON.parse(uni.getStorageSync('userInfo')).id;
      } else {
        id = 0;
      }

      // let uid = JSON.parse(uni.getStorageSync('userInfo')).id
      this.curChapter++;
      var pagenum = this.curChapter;
      uni.request({
        url: _urls.default.HTTP + '/novel/getchapterlist',
        method: 'POST',
        data: {
          id: bookId,
          uid: id,
          pagesize: 200,
          pagenum: pagenum },

        success: function success(res) {
          // console.log(res)
          _this8.chaptersList = res.data.chapter;
          uni.hideLoading();
          if (res.data.islast === 1) {
            uni.showToast({
              title: '已经到底啦',
              icon: 'none' });

          }
        } });

    },
    download: function download() {
      var id = this.$store.state.bookId;
      uni.downloadFile({
        url: _urls.default.HTTP + '/novel/noveldownload1?novelid=' + id,
        success: function success(res) {
          console.log(res);
          if (res.statusCode === 200) {
            uni.saveFile({
              tempFilePath: res.tempFilePath,
              success: function success(saveRes) {
                // console.log(saveRes)
                uni.showToast({
                  title: '保存成功：' + saveRes.savedFilePath,
                  icon: 'none' });

              } });

          }
        } });

    },
    goComment: function goComment() {var _this9 = this;
      //let id = this.$store.state.bookId
      var bookId = this.storyData.novel_id;
      var uid = '';
      if (this.isLogin) {
        uid = JSON.parse(uni.getStorageSync('userInfo')).id;
      } else {
        uid = 0;
      }

      // let uid = JSON.parse(uni.getStorageSync('userInfo')).id
      uni.request({
        url: _urls.default.HTTP + '/novel/getnovel',
        method: 'POST',
        data: {
          novelid: bookId,
          uid: uid },

        success: function success(res) {
          // console.log('书籍详情', res.data)
          _this9.$store.dispatch('comments', res.data.comment);
          uni.navigateTo({
            url: 'allComments' });

        } });

    },
    goChapter: function goChapter(item) {var _this10 = this;
      this.isMenuShow = false;
      // let bookId = this.$store.state.bookId
      var bookId = this.storyData.source_id;
      var key = item.id;

      var id = '';
      if (this.isLogin) {
        id = JSON.parse(uni.getStorageSync('userInfo')).id;
      } else {
        id = 0;
      }
      // let uid = JSON.parse(uni.getStorageSync('userInfo')).id
      uni.request({
        url: _urls.default.HTTP + '/novel/getnovelcontent',
        method: 'POST',
        data: {
          id: bookId,
          key: key,
          uid: id },

        success: function success(res) {
          _this10.$store.dispatch('storyData', res.data);
          uni.redirectTo({
            url: 'story' });

        } });

    },
    goDetail: function goDetail() {
      //this.$store.dispatch('bookId', this.$store.state.bookId)				
      var bookId = this.storyData.novel_id;
      uni.redirectTo({
        url: 'storyDetail?id=' + bookId });

    },
    // shareTo: function() {
    // 	let novelid = this.storyData.source_id
    // 	uni.request({
    // 		url: urls.HTTP + '/novel/novelshare',
    // 		method: 'POST',
    // 		data: {
    // 			novelid: novelid
    // 		},
    // 		success: (res) => {
    // 			// console.log(res)
    // 			this.shareInfo = res.data
    // 			this.moreIsShow = false
    // 			this.showHF = false
    // 			this.shareShow = true
    // 		}
    // 	})
    // },
    closeSP: function closeSP(val) {
      this.shareShow = val;
    },
    closeRP: function closeRP(val) {
      this.rechargeShow = val;
    } },

  computed: {
    storyData: function storyData() {// 小说信息
      return this.$store.state.storyData;
    },
    contentData: function contentData() {// 本章内容
      return this.storyData.content;
    },
    updateTime: function updateTime() {
      var now = parseInt(new Date().getTime() / 1000);
      var num = parseInt(now - this.story.update_time);
      if (num < 0) {
        return 1 + '秒';
      } else if (num >= 0 && num < 60) {
        return num + '秒';
      } else if (num >= 60 && num < 3600) {
        return Math.ceil(num / 60) + '分钟';
      } else if (num >= 3600 && num < 86400) {
        return Math.ceil(num / 3600) + '小时';
      } else if (num >= 86400 && num < 2592000) {
        return Math.ceil(num / 86400) + '天';
      } else if (num >= 2592000 && num < 31104000) {
        return Math.ceil(num / 2592000) + '月';
      } else {
        return Math.ceil(num / 31104000) + '年';
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 81:
/*!**********************************************************************************************************************************************************!*\
  !*** F:/2019.11.10之前证书类东西/项目/小说/点说吧整站小说源码最新版2019-7-19/dsb8.31/dsb/pages/common/book/story.vue?vue&type=style&index=0&id=bf6ff9e2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_style_index_0_id_bf6ff9e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./story.vue?vue&type=style&index=0&id=bf6ff9e2&lang=scss&scoped=true& */ 82);
/* harmony import */ var _D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_style_index_0_id_bf6ff9e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_style_index_0_id_bf6ff9e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_style_index_0_id_bf6ff9e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_style_index_0_id_bf6ff9e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Hbuilder_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_story_vue_vue_type_style_index_0_id_bf6ff9e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 82:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/2019.11.10之前证书类东西/项目/小说/点说吧整站小说源码最新版2019-7-19/dsb8.31/dsb/pages/common/book/story.vue?vue&type=style&index=0&id=bf6ff9e2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[74,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/common/book/story.js.map