import Vue from 'vue'
// import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 完整引用
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI) // 将ElementUI组件注册到Vue中

// 按需引用
// 步骤1:安装 npm install babel-plugin-component -D
// 步骤2:设置 babel.config.js
// 步骤3:开始使用
// 可以在组件中使用,也可以绑定到原型上使用

import { Button, Form, FormItem, Input, Checkbox, Link, Message, Container, Aside, Header, Main, Menu, MenuItem, Submenu, Scrollbar, Breadcrumb, BreadcrumbItem, Avatar, Radio, RadioGroup, Tabs, TabPane, Dropdown, DropdownItem, DropdownMenu } from 'element-ui'
Vue.use(Button) // 注册组件
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Link)

// 布局
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Scrollbar) // 滚动条的组件
Vue.use(Submenu)
// Vue.component(Button.name,Button);

Vue.prototype.$message = Message // 绑定了一个方法
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Avatar)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
