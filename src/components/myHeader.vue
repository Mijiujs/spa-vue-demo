<template>
  <div>
    <div class="flex_box">
      <div class="system_name">
        <!-- <el-avatar shape="circle" :size="40" :src="circleUrl"></el-avatar> -->
        <h2>科若顿盒子</h2>
      </div>
      <div class="user_msg">
        <el-row>
          <el-col :xl="{span:1,offset:21}" :lg="{span:1,offset:20}" :md="{span:1,offset:19}" :sm="{span:2,offset:16}" :xs="{span:4,offset:12}">
            <div class="img_box center">
              <img src="../assets/img/logo.png" />
            </div>
          </el-col>
          <el-col :xl="{span:2}" :lg="{span:3}" :md="{span:4}" :sm="{span:6}"  :xs="{span:6}">
            <div class="center"><span>{{$store.state.userInfo.nickname}}</span><span><i class="el-icon-arrow-down" @click="logout"></i></span><span>{{$store.state.userInfo.role_str}}</span></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      circleUrl: require('@/assets/img/logo.png')
    }
  },
  methods: {
    logout(){
      this.$router.push({path:'/'})
    }
  },
}
</script>
<style lang="scss" scoped>
.flex_box {
  display: flex;
  .center {
    height: 6rem;
    line-height: 6rem;
    text-align: center;
  }

  .system_name {
    @extend .center;
    // border-bottom: 1px solid #cfd8dc;
    border-bottom: 1px solid rgb(25, 43, 56);
    background: linear-gradient(
      90deg,
      #0379db,
      rgba(6, 117, 209, 0.7),
      rgba(6, 117, 209, 0.54)
    );
    color: #fff;
    flex: 0 0 20rem;
  }
  .user_msg {
    flex: 1 1 auto;
    border-bottom: 1px solid #cfd8dc;
    .img_box {
      img {
        width: 4rem;
        height: 4rem;
        vertical-align: middle;
      }
    }
    span{
      font-size:1rem;
      i{
        padding:0 0.5rem;
      }
    }
  }
}
</style>
