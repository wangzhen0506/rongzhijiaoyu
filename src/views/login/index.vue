<template>
  <div class="login">
      <!-- 放置一个卡片组件 -->
      <el-card class="login-card">
         <div class="title">
             <img src="../../assets/imges/Jg_Logo.png" alt="">
         </div>
         <span>北京荣知教育科技有限公司</span>
         <!-- 登录表单  表单容器-->
         <el-form style="margin-top:90px;">
             <!-- 表单域 el-form-item -->
             <el-form-item style="position: relative;">
                 <i><img src="../../assets/imges/user.png" alt="" style="position: absolute; top:8px; left:-20px;"></i>
                 <el-input placeholder="请输入手机号"></el-input>
             </el-form-item>
             <el-form-item>
                 <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
             </el-form-item>
             <a href="#" style="margin-left:190px;">忘记密码</a>
             <el-form-item style="margin-top:30px;">
                   <el-button type="primary" style="width:260px;">登录</el-button>
             </el-form-item>
             <el-form-item style="margin-top:20px;">
                <el-button type="primary" style="width:260px;">注册</el-button>
             </el-form-item>
         </el-form>
      </el-card>
  </div>
</template>
<script>
export default {
}
</script>

<style lang='less' scoped>
.login {
    background-image: url(../../assets/imges/bg_login.png);
    background-size: cover;//自适应背景图片
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
