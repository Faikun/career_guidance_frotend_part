import { createStore } from 'vuex'
import Universities from "@/store/modules/Universities";
import Category from "@/store/modules/category";
import ProfessionsArray from "@/store/modules/professionsArray";
import users from "@/store/modules/users";
import notification from "@/store/modules/Notification";
import testsArr from "@/store/modules/testsArr";
import comments from "@/store/modules/comments";
import tags from "@/store/modules/tags";
import subjects from "@/store/modules/subjects";
export default createStore({
  state: {
    isAuth: false,
    isAdmin: false,
    userId: null,
    openedAuth: false,
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  getters: {
    getAuth(state) {
      return state.isAuth
    },
    getAdmin(state) {
      return state.isAdmin
    },
    getOpenedAuth(state) {
      return state.openedAuth
    },
    getUserId(state) {
      return state.userId
    }

  },
  mutations: {
    toggleOpenedAuth(state) {
      state.openedAuth = !state.openedAuth;
    },
    setAuth(state) {
      state.isAuth = !state.isAuth
    },
    setAdmin(state) {
      state.isAdmin = !state.isAdmin
    },
    setUserId(state, value) {
      state.userId = value
    },
  },

  modules: {
    university: Universities,
    category: Category,
    professionsArray: ProfessionsArray,
    users: users,
    notification: notification,
    testsArr: testsArr,
    comments: comments,
    tags: tags,
    subjects: subjects
  }
})
