<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <el-button  @click="change">默认按钮</el-button>
    <child :str="str" :str2="str2" @sunMethod="haha" ref="child"></child>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import child from "@/components/child";
export default {
  name: 'Home',
  data() {
    return {
      str:'test',
      str2:'test2'
    }
  },
  components: {
   child
  },
  mounted () {
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
  },
  methods: {
    change(){
      this.$('.test').toggle()
    },
    haha(e){
      console.log(e)
    }
  },
}
</script>
