import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import store from './store' // VueX
import 'normalize.css' // 打包时会被同步到项目中
import Fragment from 'vue-fragment'
// 项目中混存多种导入方式,根据自己的导入方式决定如何正确导入
// import { getMenuTree } from '@/api/site'
// Vue.prototype.$getMenuTree = getMenuTree()
import api from '@/api/index'

Vue.use(Fragment.Plugin)
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// views 目录放置的是目录(.vue) 相对组件来说是一个相对完成的页面
// components 目录放置 组件 (.vue) 组件为页面中应用到小的模块
