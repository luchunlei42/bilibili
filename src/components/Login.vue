<template>
  <el-container style="height:100%">
    <el-main>
      <el-row style="width: 360px; margin: 50px auto">
        <el-col>
          <div></div>
          <el-row justify="center">
            <el-col :span="24" style="text-align:center">
              <span @click="changeToPwd">密码登录</span>
              <el-divider direction="vertical"></el-divider>
              <span @click="changeToPhone">短信登录</span>
            </el-col>
          </el-row>
          <div style="text-align:center"></div>
          <el-form label-position="left">
            <el-form-item v-if="loginMethod==0" label="账号">
              <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item v-if="loginMethod==1" label="手机号">
              <el-input v-model="loginForm.username" placeholder="请输入手机号">
                <el-button slot="append" @click="getPhoneCode">获取验证码</el-button>
              </el-input>
            </el-form-item>
            <el-form-item v-if="loginMethod==0" label="密码">
              <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-form-item v-if="loginMethod==1" label="验证码">
              <el-input v-model="loginForm.code" placeholder="请输入验证码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-row :gutter="10">
                <el-col :span="12">
                  <el-button style="width:100%">没有账号立即注册</el-button>
                </el-col>
                <el-col :span="12">
                  <el-button style="width:100%" @click="login" type="primary">登录</el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
   
  <script>
import { setCookie, getCookie } from "@/utils/support";
import { phoneCode } from '@/lib/login'
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        code: ""
      },
      userToken: "",
      loginMethod: 0
    };
  },
  created() {
    this.loginForm.username = getCookie("username");
    this.loginForm.password = getCookie("password");
    if (
      this.loginForm.username === undefined ||
      this.loginForm.username == null ||
      this.loginForm.username === ""
    ) {
      this.loginForm.username = "";
    }
    if (
      this.loginForm.password === undefined ||
      this.loginForm.password == null
    ) {
      this.loginForm.password = "";
    }
  },
  methods: {
    getPhoneCode(){
      if (this.loginForm.username === "" ) {
        alert("手机号不能为空");
      } else {
        phoneCode(this.loginForm.username)
      }
    },
    changeToPhone() {
      this.loginMethod = 1;
    },
    changeToPwd() {
      this.loginMethod = 0;
    },
    login() {
      let _this = this;
      if (this.loginForm.username === "" || (this.loginForm.password === "" && this.loginForm.code === "") ) {
        alert("账号或密码不能为空");
      } else {
        this.$store
          .dispatch("Login", this.loginForm)
          .then(() => {
            setCookie("username", this.loginForm.username, 15);
            setCookie("password", this.loginForm.password, 15);
            this.$router.push({ path: "/" });
          })
          .catch(() => {});
      }
    }
  }
};
</script>
<style>
</style>