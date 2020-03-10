<template>
  <div>
    <h1>1.把Object对象上上属于语言内部的方法放到Reflect对象上</h1>
    <h1>2.让返回结果更合理。Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。</h1>
    <h1>3.让部分操作都变成函数行为。name in obj和delete obj[name]变成Reflect.has(obj,name)，Reflect.deleteProperty(obj,name)</h1>
    <h1>4.Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    // Reflect.apply(target, thisArg, args);
    // Reflect.construct(target, args);
    // Reflect.get(target, name, receiver);
    // Reflect.set(target, name, value, receiver);
    // Reflect.defineProperty(target, name, desc);
    // Reflect.deleteProperty(target, name);
    // Reflect.has(target, name);
    // Reflect.ownKeys(target);
    // Reflect.isExtensible(target);
    // Reflect.preventExtensions(target);
    // Reflect.getOwnPropertyDescriptor(target, name);
    // Reflect.getPrototypeOf(target);
    // Reflect.setPrototypeOf(target, prototype);
  }
};
</script>
