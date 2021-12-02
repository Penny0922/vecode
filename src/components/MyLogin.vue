<template>
  <div class="bg">
    <form class="testbox">
      <h4 class="logintitle">登录界面</h4>
      <input type="text" v-model.trim="username" placeholder="用户名" />
      <input type="password" v-model.trim="password" placeholder="密码" />
      <button type="button" @click="login" class="loginbtn">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "毛西城",
      password: "123456",
    };
  },

  methods: {
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
.bg {
  background-image: url("~@/assets/wallpaper.jpg");
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;

  .testbox {
    position: absolute;
    top: 50%;
    margin-top: -200px;
    left: 50%;
    margin-left: -200px;
    background-color: whitesmoke;
    width: 400px;
    height: 400px;
    border-radius: 25px;
    text-align: center;
    padding: 5px 40px;
    box-sizing: border-box;

    input {
      background-color: whitesmoke;
      width: 100%;
      height: 48px;
      margin-bottom: 10px;
      border: none;
      border-bottom: 2px solid silver;
      /* 下面的会覆盖上面的步伐 */
      outline: none;
      font-size: 22px;
    }
    .logintitle {
      font-size: 38px;
      font-weight: 600;
    }
    .loginbtn {
      background-color: #59c2c5;
      width: 38%;
      height: 48px;
      border-radius: 8px;
      margin-top: 40px;
      font-size: 28px;
      font-weight: 600;
      color: white;
    }
  }
}
</style>
