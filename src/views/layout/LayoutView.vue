<template>
    <el-container>
        <el-aside :class="{ small:!isCollapse }" width="220px">
          <div class="layout-view_aside-header" v-if="isCollapse">
            <img src="@/assets/z-mall-logo-white@1x.png" alt="">
            <h3>Z-Mall Admin</h3>
          </div>
          <div class="layout-view_aside-header" v-else>
            <img src="@/assets/z-mall-logo-white@1x.png" alt="">
          </div>

          <div class="layout-view_aside-main">
            <el-scrollbar >
              <MenuTree></MenuTree>
            </el-scrollbar>
          </div>
        </el-aside>
        <el-container>
          <el-header>
            <div class="header-left">
              <el-radio-group v-model="isCollapse">
<!--              <el-radio-button :label="false">展开</el-radio-button>-->
<!--              <el-radio-button :label="true">收起</el-radio-button>-->
                <i class="el-icon-s-fold" @click="changeMenu"></i>
<!--                <i class="el-icon-s-fold" @click="changeMenu"></i>-->
            </el-radio-group>

              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">商品管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>商品类名</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="header-right">
              <span class="welcome">欢迎您架构师Arcitect</span>
              <el-dropdown>
                <div class="block"><el-avatar :size="35" :src="circleUrl" class="el-dropdown-link"></el-avatar></div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click="logout">注销</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                  <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-header>
          <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
            <el-tab-pane :key="item.name"
                         v-for="(item ) in editableTabs"
                         :label="item.title"
                         :name="item.name">
            </el-tab-pane>
          </el-tabs>
          <el-main>主体
            <div class="tab"></div>
<!--          通过路由加载组件-->
            <router-view></router-view>
          </el-main>
        </el-container>
    </el-container>
</template>

<script>
// import { getMenuTree } from '@/api/site'
import { logout } from '@/api'
import { mapActions, mapState } from 'vuex'
import MenuTree from '@/components/MenuTree.vue'

export default {
  name: 'LayoutView',
  components: {
    MenuTree
  },
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      sizeList: ['large', 'medium', 'small'],
      isCollapse: true,
      editableTabsValue: '2',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2
    }
  },
  methods: {
    async logout () {
      try {
        console.log(logout())
      } catch (err) {
        console.log(err)
      }
    },
    // 改写法只是提供一种封装思路
    // async _getMenuTree () {
    //   try {
    //     const { data } = await this.$api.getMenuTree()
    //     this.menutree = data
    //   } catch (err) {
    //     console.log(err)
    //   }
    // },
    changeMenu () {
      this.isCollapse = !this.isCollapse
    },
    handleTabsEdit (targetName, action) {
      if (action === 'add') {
        const newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        })
        this.editableTabsValue = newTabName
      }
      if (action === 'remove') {
        const tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    },
    ...mapActions(['getMenuTree'])
  },
  created () {
    // this._getMenuTree()
    // this.$store.dispatch('getMenuTree')
    this.getMenuTree()
  },
  computed: {
    // ...mapState(['menuTree'])
    ...mapState('user', ['userInfo'])
  }
}
</script>

<style scoped>
/* scoped: 空间
 如果样式标签中存在 scoped,我们设置的样式,在渲染时,会帮我们带上,属性选择器
 .el-aside --> .el-aside[data-v-cb316f2c]
如果我们需要深入到组件内部修改样式,需要使用vue-loader提供的工具
::v-deep 深入
 */
.layout-view_aside-header{
  height: 60px;
  background-color: #1F283E;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-evenly;
}
.layout-view_aside-header img{
  height: 30px;
}
.el-aside {
  transition: 1s linear;
  height: 100vh;
  /*color: #fff;*/
  overflow: hidden;
  background-color: #1F283E;
  width: 220px;
}
.el-radio-group {
  font-size: 16px;
}
.small {
  width: 65px !important;
}
.el-icon-s-fold {
  cursor: pointer;
}

.welcome{
  color: #888888;
}
.el-header{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-left,.header-right{
  display: flex;
  height: 100%;
  align-items: center;
  width: 230px;
  justify-content: space-between;
}

.el-scrollbar {
  height: calc(100vh - 60px);
  padding-bottom: 21px;
  box-sizing: content-box;
}
</style>
