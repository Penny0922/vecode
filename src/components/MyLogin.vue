<template>
  <div class="login_container">
    <div class="login_box">
      <h2 class="title">登录</h2>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code" style="width: 380px">
          <el-input
            v-model="loginForm.code"
            style="width: 172px; float: left"
            maxlength="5"
          ></el-input>
          <el-image
            :src="captchaImg"
            class="captchaImg"
            @click="getCaptcha"
          ></el-image>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
        code: "",
      },
    };
  },

  methods: {
    resetLoginForm() {
      // console.log(this);
      this.$refs.loginFormRef.resetFields();
    },
    async login() {
      this.axios
        .post("/api/user/find", {
          account: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log(response.request.status);
          if (response.request.status !== 200) {
            console.log("登录失败");
          } else {
            console.log("登录成功");
            this.$router.push("/home");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  background-image: url("~@/assets/wallpaper.jpg");
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 25px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  .title {
    padding-top: 10px;
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
