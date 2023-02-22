<template>
  <div class="login_box">
    <!-- v-pre:跳过vue语法的编译,直接显示原内容,提示编译性能 VNode -->
    <div class="top_box" v-pre>
      <img src="../assets/z-mall-logo@2x.png" alt="">
      <h2>ZMALL商城管理系统</h2>
    </div>
    <div class="login_form">
      <div>
        <el-form :rules="loginFormRules" :model="form" ref="loginFormRef">
          <!-- 账号框 -->
          <el-form-item prop="username" >
            <el-input clearable placeholder="请输入账号" v-model="form.username">
              <!-- 插槽的写法-->
              <!-- 属性与插槽的区别:如果使用属性添加图标,只能使用element-ui中已经封装好的图标,使用插槽的形式,可以使用其他框架中的图标,如阿里巴巴矢量图-->
              <template v-slot:prefix>
                <i class="el-input__icon el-icon-user"></i>
                <!--                  <i class="el-input__icon el-icon-lock"></i>-->
              </template>
            </el-input>
          </el-form-item>
          <!-- 密码框 -->
          <el-form-item class="no_margin" prop="password">
            <el-input clearable show-password placeholder="请输入密码" v-model="form.password">
              <template v-slot:prefix>
                <i class="el-input__icon el-icon-lock"></i>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <template>
        <!-- `checked` 为 true 或 false -->
        <!-- 记住密码 -->
        <div class="check">
          <el-checkbox v-model="form.checked">记住密码</el-checkbox>
          <el-link>注册新账号</el-link>
        </div>
      </template>
      <el-button class="btn_login" @click="login" >登录</el-button>
      <!--        <el-button class="btn_login" @click="logout">登出</el-button>-->
      <!-- 记住密码-->
    </div>
  </div>
</template>

<script>
import { login, logout } from '@/api'
import { set } from '@/utils/store'
import { mapMutations } from 'vuex'

export default {
  name: 'SignIn',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      checked: true,
      // 输入框规则
      loginFormRules: {
        username: [
          { required: true, message: 'Please enter one username name', trigger: 'blur' },
          { min: 3, max: 10, message: '3 to 10 characters in length', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please enter the login password', trigger: 'blur' },
          { min: 6, max: 15, message: '6 to 15 characters in length', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations('user', ['login']),
    async onClick () {
      try {
        await this.login(this.form)
        this.$message.success('登陆成功')
      } catch (err) {
        console.log(err)
        return Promise.reject(err)
      }
    },
    async logout () {
      try {
        console.log(logout())
      } catch (err) {
        console.log(err)
      }
    }
  }
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
