<template>
  <div class="login">
    <div class="box">
      <h2>忘记密码</h2>
      <el-form ref="form" :model="form" :rules="rules" label-position="left">
        <el-form-item prop="phone">
          <el-input v-model="form.phone" prefix-icon="el-icon-phone" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="form.code" prefix-icon="el-icon-s-comment" placeholder="验证码">
               <el-button slot="append" @click="getCode">{{tip}}</el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="newPwd">
          <el-input v-model="form.newPwd" show-password prefix-icon="el-icon-lock" placeholder="新密码"></el-input>
        </el-form-item>
        <el-button class="btn" @click="retrieve">修改</el-button>
        <div class="operate">
          <div class="item"></div>
          <div class="item" @click="goBack">返回</div>
        </div>
      </el-form>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        phone: null,
        code: null,
        newPwd: null
      },
      rules: {
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
        newPwd: [{ required: true, message: '请输入新密码', trigger: 'blur' }]
      },
      tip: '获取验证码',
      timer: null
    }
  },
  methods: {
    retrieve () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$axios.post(this.$url.retrievePwd, this.form).then(res => {
            if (res.data.success) {
              this.$message.success('修改成功！')
              this.$router.go(-1)
            } else {
              this.$message.error(res.data.msg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getCode () {
      if (this.form.phone == null) {
        this.$message.error('请输入手机号')
      } else {
        if (this.form.phone.length === 11) {
          if (!this.timer) {
            let totalTime = 60
            this.tip = totalTime + 's后重试'
            this.$axios.get(this.$url.getCode + '?phone=' + this.form.phone).then(res => {
              if (res.data.success) {
                this.$message.success('验证码已发送')
                this.timer = setInterval(() => {
                  if (totalTime === 0) {
                    clearInterval(this.timer)
                    this.timer = null
                    totalTime = 60
                    this.tip = '重新发送'
                  } else {
                    totalTime--
                    this.tip = totalTime + 's后重试'
                  }
                }, 1000)
              } else {
                this.$message.error(res.data.msg)
              }
            })
          }
        } else {
          this.$message.info('请输正确的手机号')
        }
      }
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss"  scoped>
.login{
  background: linear-gradient(to right, #74ebd5, #acb6e5);
  width: 100%;
  height: 100%;
  .box{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top:-300px;
    margin-left: -200px;
    width: 400px;
    height: 600px;
    background-size:100% 100%;
    border: 10px solid #fff;
    box-shadow: 0 0 20px rgb(167, 187, 179);
    text-align: center;
    color: #fff;
    background: url("../../assets/img/back.jpg") no-repeat;
    h2{
      margin-top:80px;
    }
    .el-form{
      margin:20px 80px;
      .el-button{
        padding:10px;
      }
      .btn{
        padding: 10px 104px;
        color:#74ebd5;
      }
      .operate{
        margin-top: 10px;
        display: flex;
        font-size: 14px;
        .item{
          flex:1;
          text-decoration: underline;
          text-align: right;
          &:hover{
            color:#74ebd5;
          }
        }
      }
    }
  }
}
</style>
