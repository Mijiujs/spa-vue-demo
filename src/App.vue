<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link> |
      <router-link to="/js">js</router-link> |
      <router-link to="/css">css</router-link> |
      <router-link to="/chart">chart</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 62.5%;
}
body{
  font-size:1.6rem;
}
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
