<template>
  <div class="home">
    <el-button @click="change">默认按钮</el-button>
    <div class="my">haha</div>
    <coral-icon name="edit" :style="{ color: 'blue' }"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CoralIcon from '@webuy/coral-icon/lib/component-vue'

export default {
  name: "Home",
  data() {
    return {
      str: "test",
      str2: "test2",
      a: null
    };
  },
   components: {
    CoralIcon,
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
    change() {}
  }
};
</script>
<style lang="scss" scoped>
</style>
