<template>
  <div id="app">
<!--    用于展示路由对应的页面 , 根据路由加载页面-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
