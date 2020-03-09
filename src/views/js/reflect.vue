<template>
  <div>
    <h1>reflect</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    let obj = {
      a: 1,
      b: 2,
      c: 3
    };
    let proxy = new Proxy(obj, {
      get(target, propKey, receiver) {
        // 参数依次为目标对象，属性名，proxy实例
        if (propKey in target) {
          return target[propKey];
        } else {
          throw new ReferenceError("不存在该属性");
        }
      },
      set(target, property, value, receiver) {
        return value;
      },
      has(target, propKey) {}, // 拦截propKey in proxy
      deleteProperty(target, propKey) {}, // 拦截delete proxy[propkey]
      ownKeys(target) {}, // 拦截器Object.getOwnPropertyNames()、Object.getOwnPropertyDescriptors()、Object.keys(proxy)、for in
      getOwnPropertyDescriptor(target, propKey) {}, // 拦截Object.getOwnPropertyDescriptor(proxy, propKey)
      defineProperty(target, propKey, propDesc) {}, // 拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)
      getPrototypeOf(target) {}, // 拦截Object.getPrototypeOf(proxy)
      setPrototypeOf(target, proto) {}, // 拦截Object.setPrototypeOf(proxy, proto)
      preventExtensions(target) {}, // 拦截Object.preventExtensions(proxy)
      isExtensible(target) {}, // 拦截Object.isExtensible(proxy)
      apply(target, object, args) {}, // 拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
      construct(target, args) {} // 拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)
    });
  }
};
</script>
