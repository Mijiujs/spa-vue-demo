<template>
  <div>
    <h1>返回一个函数使fn(a,b)和fn(a)(b)结果都是a+b</h1>
    <h1>返回一个函数使fn(a,b,c)和fn(a)(b)(c)结果都是a*b*c</h1>
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
    // function curry(fn, ...arg1) {
    //   return function(...arg2) {
    //     let newArr=[...arg1,...arg2]
    //     console.log(newArr.length)
    //     if(newArr.length===2){
    //       return fn.apply(this, newArr);
    //     }else{
    //       return curry.apply(this,[fn,...newArr])
    //     }
    //   };
    // }
    // function add(x, y) {
    //   return x + y;
    // }
    // let fn = curry(add);
    function multiplicate(a, b, c) {
      return a * b * c;
    }
    function curry(fn, ...arg1) {
      return function(...arg2) {
        let newArr = [...arg1, ...arg2];
        if(newArr.length===3){
          return fn.apply(this,newArr)
        }else{
          return curry.apply(this,[fn,...newArr])
        }
      };
    }
    let fn = curry(multiplicate)
  }
};
</script>
