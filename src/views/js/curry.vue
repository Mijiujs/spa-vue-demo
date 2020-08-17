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
  beforeMount() {
    function myTime(time, n) {
      setTimeout(() => {
        console.log(n);
      }, time);
    }
    async function myFn() {
      await myTime(1000, 1);
      await myTime(2000, 2);
      await myTime(1000, 3);
      return "promise";
    }
    myFn().then((res) => {
      console.log(res);
    });

    function fn(a, b, c) {
      console.log(a + b + c);
      return a + b + c;
    }
    function currying(fn, ...arr1) {
      return function (...arr2) {
        let arr = [...arr1, ...arr2];
        if (arr.length < fn.length) {
          return currying(fn, ...arr);
        } else {
          fn.apply(this, arr);
        }
      };
    }
    let add1 = currying(fn);
    add1(1, 2, 3);
    add1(1)(2)(9);

    function multi(...arr1) {
      let fn = function (...arr2) {
        let arr = [...arr1, ...arr2];
        return multi.apply(this, arr);
      };
      fn.toString = function () {
        return arr1.reduce((a, b) => a * b);
      };
      return fn;
    }
  },
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
      return function (...arg2) {
        let newArr = [...arg1, ...arg2];
        if (newArr.length === 3) {
          return fn.apply(this, newArr);
        } else {
          return curry.apply(this, [fn, ...newArr]);
        }
      };
    }
    let fn = curry(multiplicate);
  },
};
</script>
