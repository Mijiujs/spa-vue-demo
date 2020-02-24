<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <el-button  @click="change">默认按钮</el-button>
    <div class="test">{{$store.state.num}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {},
  mounted () {
    let param = {
      username: 'admin',
      password: 'admin@knoten2020'
    }
    this.$axios.post('/login?', this.$qs.stringify(param)).then(res => {
      if (res.data.success) {
        this.$store.state.num = res.data.data
      } else {
      }
    })
  },
  methods: {
    change(){
      this.$('.test').toggle()
    }
  },
}
</script>
