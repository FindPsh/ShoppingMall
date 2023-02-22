import Vue from 'vue'
import Vuex from 'vuex'
import * as site from '@/api/site'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuTree: [] // 左侧菜单项
  },
  getters: {},
  mutations: {
    getMenuTree (state, payload) {
      state.menuTree = payload
    }
  },
  actions: {
    async getMenuTree ({ commit }) {
      // 发起请求 并 将数据传递给getMenuTree中的payload
      try {
        const { data } = await site.getMenu()
        commit('getMenuTree', data)
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
    user
  }
})
