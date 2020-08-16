<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">login</router-link>|
      <router-link to="/home">home</router-link>|
      <router-link to="/js">js</router-link>|
      <router-link to="/css">css</router-link>|
      <router-link to="/chart">chart</router-link>
    </div>
    <el-button @click="change">默认按钮</el-button>
    <div class="my">haha</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      str: "test",
      str2: "test2",
      a: null,
    };
  },
  mounted() {
    console.log(11);
    // let param = {
    //   username: 'admin',
    //   password: 'admin@knoten2020'
    // }
    // axios.get('/user?id=1').then(res => {
    //   if (res.data.success) {
    //   } else {
    //   }
    // })
    // axios.post("/user",{name:'接口插入',sex:'what'}).then(res => {
    //   if (res.data.success) {
    //   } else {
    //   }
    // });
    // axios.put("/user", { id: 4, name: "修改", sex: "HHH" }).then(res => {
    //   if (res.data.success) {
    //   } else {
    //   }
    // });
    // axios.delete("/user?id=4").then(res => {
    //   if (res.data.success) {
    //   } else {
    //   }
    // });
  },
  methods: {
    change() {},
  },
};
</script>
<style lang="scss" scoped>
</style>
