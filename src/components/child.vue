<template>
  <div>
    <div @click="wa">child1:{{str}}</div>
    <div>{{$attrs}}</div>
    <child2 v-bind="$attrs" v-on="$listeners"></child2>
  </div>
</template>
<script>
import child2 from "@/components/child2";

export default {
  components: {
    child2
  },
  props: ["str"],
  data() {
    return {
      lll: 2
    };
  },
  methods: {
      wa(){
          this.lll=3
          console.log(this.lll)
      }
  },
  beforeCreate() {
    console.log("child beforeCreate");
  },
  created() {
    console.log("child created");
  },
  beforeMount() {
    console.log("child beforeMount");
  },
  mounted() {
      console.log(this.$parent)
    console.log("child mounted");
  }
};
</script>
<style lang="scss" scoped>
</style>