<template>
  <div class="home">
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
      a: null
    };
  },
  mounted() {
    // let param = {
    //   username: 'admin',
    //   password: 'admin@knoten2020'
    // }
    // this.$axios.post('/login?', this.$qs.stringify(param)).then(res => {
    //   if (res.data.success) {
    //     this.$store.state.num = res.data.data
    //   } else {
    //   }
    // })
    $(function() {
      $(".my").animate(
        {
          left: "100px"
        },
        "slow"
      );
    });
  },
  methods: {
    change() {}
  }
};
</script>
<style lang="scss" scoped>
</style>
