<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  beforeMount() {},
  mounted() {
    function curry(fn, ...arg1) {
      return function(...arg2) {
        let newArr=[...arg1,...arg2]
        console.log(newArr.length)
        if(newArr.length===2){
          return fn.apply(this, newArr);
        }else{
          return curry.apply(this,[fn,...newArr])
        }
      };
    }
    function add(x, y) {
      return x + y;
    }
    let fn = curry(add);
    console.log(fn(3)(4));
  }
};
</script>
