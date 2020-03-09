<template>
  <div>
    <div id="nav" v-if="way==='js'">
      <router-link to="curry">curry</router-link>|
      <router-link to="promise">promise</router-link>|
      <router-link to="proxy">proxy</router-link>|
      <router-link to="reflect">reflect</router-link>|
    </div>
    <div id="nav" v-if="way==='css'">
      <router-link to="center">居中</router-link>|
      <router-link to="threeColumnLayout">两栏布局</router-link>|
      <router-link to="twoColumnLayout">三栏布局</router-link>|
    </div>
    <router-view ></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      way: null
    };
  },
  watch: {
    $route: {
      handler(newVal, oldVal) {
        if(newVal.path.search(/\/js/g)===0){
            this.way='js'
        }
        if(newVal.path.search(/\/css/g)===0){
            this.way='css'
        }
      },
      immediate: true
    }
  }
};
</script>
