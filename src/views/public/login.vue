<template>
  <div class="login">
    <div class="box">
      <h2>登录</h2>
      <el-form ref="form" :model="form" :rules="rules" label-position="left">
        <el-form-item prop="userName">
          <el-input
            v-model="form.userName"
            prefix-icon="el-icon-user"
            placeholder="账号"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            show-password
            prefix-icon="el-icon-lock"
            placeholder="密码"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-button @click="login">登录</el-button>
        <div class="operate">
          <div class="item" @click="goPage('register')">注册</div>
          <div class="item" @click="goPage('forgetPwd')">忘记密码</div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        userName: null,
        password: null,
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$router.push({ path: "/home" });

          // this.$axios.post(this.$url.login, this.form).then((res) => {
          //   if (res.data.success) {
          //     this.$store.commit("login", res.data.data);
          //     this.$axios.defaults.headers.common["Access-Token"] =
          //       res.data.data.accessToken;
          //     this.$message.success("登录成功！");
          //     this.$router.push({ path: "/home" });
          //   } else {
          //     this.$message.error(`登录失败：${res.data.msg}`);
          //   }
          // });
        } else {
          return false;
        }
      });
    },
    goPage(pageName) {
      this.$router.push({ path: `/${pageName}` });
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  background: linear-gradient(to right, #74ebd5, #acb6e5);
  width: 100vw;
  height: 100vh;
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -300px;
    margin-left: -200px;
    width: 400px;
    height: 600px;
    background-size: 100% 100%;
    border: 10px solid #fff;
    box-shadow: 0 0 20px rgb(167, 187, 179);
    text-align: center;
    color: #fff;
    background: url("../../assets/img/back.jpg") no-repeat;
    h2 {
      margin-top: 140px;
    }
    .el-form {
      margin: 20px 80px;
      .el-button {
        padding: 10px 104px;
        color: #74ebd5;
      }
      .operate {
        margin-top: 10px;
        display: flex;
        font-size: 14px;
        .item {
          flex: 1;
          text-decoration: underline;
          &:hover {
            color: #74ebd5;
          }
        }
      }
    }
  }
}
</style>
