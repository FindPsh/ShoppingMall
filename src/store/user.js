import api from '@/api'
export default {
  namespaced: true, // 模块
  state () {
    return {
      userInfo: {}
      // token: null
    }
  },
  getters: {},
  mutations: {
    changeUserInfo (state, payload) {
      state.userinfo = payload
    }
  },
  actions: {
    // 登录
    // payload -->  一整个数据     { username, password } --> obj
    async login ({ commit }, { username, password }) {
      try {
        const { data: { user, token } } = await api.login({ username, password })
        commit('changeUserInfo', user)
        // set('zmall', token)
      } catch (err) {
        return Promise.reject(err)
      }
    },
    // 退出登录
    async logout ({ commit }) {
      await api.logout()
      commit('changeUserInfo', {})
      // remove('zmall')
    },
    // 专门获取信息
    async getUser ({ commit }) {
      try {
        const { data } = await api.user()
        commit('changeUserInfo', data)
      } catch (err) {
        return Promise.reject(err)
      }
    }
    // 修改信息
    // async editUser({ commit }, payload)
  }
}
