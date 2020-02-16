<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <el-button>默认按钮</el-button> -->
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
    console.log(process.env.VUE_APP_BASE_URL)
  }
}
</script>
