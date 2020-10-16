<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginForm"
      :model="loginForm"
      label-position="left"
      label-width="0px"
      autoComplete="on"
    >
      <h3 class="login_title">系统登录</h3>
      <div class="login-body">
        <el-form-item>
          <el-input
            type="text"
            v-model="loginForm.username"
            auto-complete="off"
            placeholder="账号"
          ></el-input>
          <div class="login-username" slot="prepend"></div>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="loginForm.password"
            auto-complete="off"
            placeholder="密码"
          ></el-input>
          <template slot="prepend"><div class="login-password"></div></template>
        </el-form-item>
        <!--<el-checkbox class="login_remember" v-model="checked" label-position="left">记住密码</el-checkbox>-->
        <el-form-item style="width: 100%">
          <el-button
            type="primary"
            @click.native.prevent="doLogin"
            style="width: 100%"
            >登录</el-button
          >
        </el-form-item>
        <el-footer> </el-footer>
      </div>
    </el-form>
  </div>
</template>
<script>
import { login } from "@/api/auth";

export default {
  data() {
    return {
      loginForm: {
        username: "jay",
        password: "jay",
      },
    };
  },
  computed: {},
  methods: {
    doLogin() {
      console.log({
        username: this.loginForm.username,
        password: this.loginForm.password,
      });

      //触发 store里面的login方法
      this.$store
        .dispatch("Login", {
          username: this.loginForm.username,
          password: this.loginForm.password,
        })
        .then(() => {
          this.$notify({
            title: "success",
            message: "登录成功",
            type: "success",
            position: "bottom-right",
          });
          this.$router.push({ name: "Home", params: {  } });
        })
        .catch((error) => {
          
        });

      // login({
      //   username: this.loginForm.username,
      //   password: this.loginForm.password,
      // }).then((r) => {
      //   console.log(r);
      //   if (r.code === 200) {
      //     this.$router.push({ name: "Main", params: { user: r.data } });
      //     this.$notify({
      //       title: "success",
      //       message: "登录成功",
      //       type: "success",
      //       position: "bottom-right",
      //     });
      //   } else {
      //     this.$notify.error({
      //       title: "error",
      //       message: "登录失败:" + r.data.msg,
      //       type: "error",
      //       position: "bottom-right",
      //     });
      //   }
      // });
    },
    doLogout() {
      this.$store.dispatch("LogOut").then(() => {
        //跳转到登录页面
        console.log("doLogout");
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 10% auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.login_remember {
  margin: 0px 0px 35px 0px;
  text-align: left;
}
</style>
