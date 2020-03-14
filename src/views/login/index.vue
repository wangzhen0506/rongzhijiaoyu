<template>
  <div class="login">
    <!-- 放置一个卡片组件 -->
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/imges/Jg_Logo.png" alt />
      </div>
      <span>北京荣知教育科技有限公司</span>
      <!-- 登录表单  表单容器-->
      <el-form ref="myForm" style="margin-top:90px;" :model="loginForm" :rules="loginRules">
        <!-- 表单域 el-form-item -->
        <el-form-item style="position: relative;" prop="moblie">
          <el-input v-model="loginForm.moblie" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <a href="#" style="margin-left:190px;">忘记密码</a>
        <el-row style="margin-top:30px;">
          <el-button @click="submitLogin" type="primary" style="width:260px;">登录</el-button>
        </el-row>
        <el-row style="margin-top:20px;">
          <el-button type="primary" style="width:260px;">注册</el-button>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        moblie: '', // 手机号
        password: '' // 密码
      },
      loginRules: {
        // 验证规则 验证登录表单的规则
        moblie: [{ required: true, message: '请输入您的手机号' }],
        password: [{ required: true, message: '请输入您的密码' }]
      }
    }
  },
  methods: {
    //   提交登录表单
    submitLogin () {
      this.$refs.myForm.validate(function (isOK) {
        if (isOK) {
          // 认为表单校验成功
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  background-image: url(../../assets/imges/bg_login.png);
  background-size: cover; //自适应背景图片
  height: 100vh;
  position: relative;
  .login-card {
    width: 300px;
    height: 600px;
    position: absolute;
    top: 200px;
    right: 100px;
    .title {
      margin-left: 20px;
      img {
        height: 40px;
      }
    }
    span {
      position: absolute;
      top: 80px;
      left: 35px;
      font-size: 20px;
    }
  }
}
</style>
