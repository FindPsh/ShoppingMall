import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/LoginDemo.vue'
import Layout from '@/views/layout/LayoutView.vue'
import DashboadView from '../dashboard/DashboadView.vue'
import SignIn from '@/components/SignIn.vue'
import RegisterView from '@/components/RegisterView.vue'
import ProductCategoryView from '@/views/product/ProductCategoryView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 首页
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      component: Login,
      children: [
        {
          path: '/',
          component: SignIn
        }
        // {
        //   path: '/',
        //   component: RegisterView
        // }
      ]
    },
    { path: '/', redirect: '/index' },
    {
      path: '/index',
      component: Layout,
      children: [
        {
          path: '/',
          component: DashboadView
        }
      ]
    },
    // 商品管理
    {
      path: '/product',
      component: Layout,
      redirect: '/product/category',
      children: [
        {
          path: '/product/category',
          component: ProductCategoryView
        },
        {
          path: '/product/category'
          // component: createView
        },
        {
          path: '/product/list'
          // component: categoryView
        }
      ]
    }
  ]
})

export default router
