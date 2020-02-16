<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <el-button>默认按钮</el-button>
    <div>{{$store.state.num}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {},
  mounted () {
    const param = {
      username: 'admin',
      password: 'admin@knoten2020'
    }
    this.$axios.post('/login?', this.$qs.stringify(param)).then(res => {
      if (res.data.success) {
        console.log(res.data.data)
        this.$store.state.num = res.data.data
      } else {
      }
    })
  }
}
</script>
