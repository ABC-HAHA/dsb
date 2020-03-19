import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	userInfo: {},
	comment: {}, // 评论详情数据
	comments: [], // 全部书评列表
	isLogin: true, // 登录状态
	novelType: [], // 更多推荐类型
	pageTitle: '', // 动态修改页面标题栏文字
	bookId: null, // 每本书籍唯一标识
	bookClassList: [], // 分类书籍
	showDialog: false,
	storyData: {}, // 小说章节内容
	story: {}, // 当前书籍信息
	history: [], // 搜索历史
	type: 'wx', // 充值方式
	loginType: 1, // 第三方登录方式，1为微信或小程序，2为QQ
	otherUser: {}
}

const getter = {}

const actions = {
	userInfo({
		commit
	}, data) {
		commit('USERINFO', data)
	},
	isLogin({
		commit
	}, data) {
		commit('ISLOGIN', data)
	},
	comment({
		commit
	}, data) {
		commit('COMMENT', data)
	},
	comments({
		commit
	}, data) {
		commit('COMMENTS', data)
	},
	novelType({
		commit
	}, data) {
		commit('NOVELTYPE', data)
	},
	pageTitle({
		commit
	}, data) {
		commit('PAGETITLE', data)
	},
	bookId({
		commit
	}, data) {
		commit("BOOKID", data)
	},
	bookClassList({
		commit
	}, data) {
		commit('BOOKCLASSLIST', data)
	},
	showDialog({
		commit
	}, data) {
		commit('SHOWDIALOG', data)
	},
	storyData({
		commit
	}, data) {
		commit('STORYDATA', data)
	},
	story({
		commit
	}, data) {
		commit('STORY', data)
	},
	history({
		commit
	}, data) {
		commit('HISTORY', data)
	},
	type({
		commit
	}, data) {
		commit('TYPE', data)
	},
	loginType({
		commit
	}, data) {
		commit('LOGINTYPE', data)
	},
	otherUser({
		commit
	}, data) {
		commit('OTHERUSER', data)
	}
}

const mutations = {
	USERINFO(state, data) {
		state.userInfo = data
	},
	ISLOGIN(state, data) {
		state.isLogin = data
	},
	COMMENT(state, data) {
		state.comment = data
	},
	COMMENTS(state, data) {
		state.comments = data
	},
	NOVELTYPE(state, data) {
		state.novelType = data
	},
	PAGETITLE(state, data) {
		state.pageTitle = data
	},
	BOOKID(state, data) {
		state.bookId = data
	},
	BOOKCLASSLIST(state, data) {
		state.bookClassList = data
	},
	SHOWDIALOG(state, data) {
		state.showDialog = data
	},
	STORYDATA(state, data) {
		state.storyData = data
	},
	STORY(state, data) {
		state.story = data
	},
	HISTORY(state, data) {
		state.history = data
	},
	TYPE(state, data) {
		state.type = data
	},
	LOGINTYPE(state, data) {
		state.loginType = data
	},
	OTHERUSER(state, data) {
		state.otherUser = data
	}
}

export default new Vuex.Store({
	state: state,
	getters: getter,
	actions: actions,
	mutations: mutations
})
