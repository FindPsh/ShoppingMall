<template>
<!--  注意: 页面/组件为根标签建议添加一个类名,且该类名最好为页面/组件的名称-->
  <div class="login_container">
    <router-view></router-view>
  </div>
</template>

<script>
import { login } from '@/api'
import { set } from '@/utils/store'
export default {
  // 为了后期调试,为该页面/组件添加一个name属性,name属性的值就算该文件的名称
  name: 'LoginDemo'
}
</script>

<style scoped>
 .el-form-item >>> .el-form-item__error {
  color: pink ;
   font-size: 16px;
}
.el-form-item {
  margin-bottom: 40px;
 }
.no_margin{
  margin: 0;
}
.check {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*color: #409EFF;*/
}
.el-link.el-link--default {
 color: #409EFF;
}
.btn_login{
  width: 100%;
  background-color: #F56C6C;
  color: white;
  border:none;
}
.login_container{
  /* css中可以使用绝对路径,@->src PS:如果直接写@返回错误,在@前面添加一个~ */
  background-size: cover;
  background: url('~@/assets/login-bg.png') center;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_box{
  width:370px;
  height:350px;
  background-color: rgba(255,255,255, .3);
  border-radius: 10px;
  /* 水平垂直居中 : 定位+transform*/
  /*position: absolute;*/
  /*top: 50%;*/
  /*left: 50%;*/
  /*transform: translate(-50%,-50%);*/
}
.top_box{
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  width: 85%;
  margin: 0 auto;
}
.top_box img{
  width: 35px;
  height: 35px;
}
.login_form{
  width: 320px;
  margin: 0 auto;
}
</style>
