<template>
    <div>
      <el-menu :router="true" :collapse="!isCollapse" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu v-for="parentmenu in menuTree" :key="parentmenu.id" :index="parentmenu.path">
          <template slot="title">
            <i :class="parentmenu.icon_class_name"></i>
            <span slot="title">{{ parentmenu.name }}</span>
          </template>
          <el-menu-item v-for="item in parentmenu.children" :key="item.id" :index="item.path">
            <i :class="item.icon_class_name"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MenuTree',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    ...mapState(['menuTree'])
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
:deep(.el-scrollbar__bar.is-horizontal){
  height: 0 !important;
}
.el-menu-item:hover {
  color: #ECC445;
  background-color: #000;
}
.el-menu-item {
  background-color: #1F283E;
  color: white;
}
.el-menu {
  height: calc(100vh - 60px);
  background-color: #1F283E;
}
.el-submenu::v-deep .el-submenu__title {
  color: white;
}
.el-submenu::v-deep .el-submenu__title:hover {
  background-color: #000;
  color: #ECC445;
}
.el-menu {
  border: none !important;
}
</style>
