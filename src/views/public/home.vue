<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">login</router-link>|
      <router-link to="/home">home</router-link>|
      <router-link to="/js">js</router-link>|
      <router-link to="/css">css</router-link>|
      <router-link to="/chart">chart</router-link>
    </div>
    <el-button @click="change">默认按钮</el-button>
    -->
    <h3>按钮</h3>
    <div>
      <hyk-btn>默认按钮</hyk-btn>
      <hyk-btn type="primary">主要按钮</hyk-btn>
      <hyk-btn type="success">成功按钮</hyk-btn>
      <hyk-btn type="warning">信息按钮</hyk-btn>
      <hyk-btn type="error">警告按钮</hyk-btn>
      <hyk-btn type="info">危险按钮</hyk-btn>
    </div>
    <h3>朴素按钮</h3>
    <div>
      <hyk-btn plain>默认按钮</hyk-btn>
      <hyk-btn type="primary" plain>主要按钮</hyk-btn>
      <hyk-btn type="success" plain>成功按钮</hyk-btn>
      <hyk-btn type="warning" plain>信息按钮</hyk-btn>
      <hyk-btn type="error" plain>警告按钮</hyk-btn>
      <hyk-btn type="info" plain>危险按钮</hyk-btn>
    </div>
    <h3>尺寸</h3>
    <div>
      <hyk-btn type="primary" size="normal">尺寸按钮</hyk-btn>
      <hyk-btn type="primary" size="small">尺寸按钮</hyk-btn>
      <hyk-btn type="primary" size="mini">尺寸按钮</hyk-btn>
    </div>
    <h3>圆角</h3>
    <div>
      <hyk-btn type="primary" round  @click="show">圆角按钮</hyk-btn>
      <hyk-btn type="primary" round size="small">圆角按钮</hyk-btn>
      <hyk-btn type="primary" round size="mini">圆角按钮</hyk-btn>
    </div>
    <h3>禁用按钮</h3>
    <hyk-btn disabled>默认按钮</hyk-btn>
    <hyk-btn type="primary" disabled @click="show">主要按钮</hyk-btn>
    <hyk-btn type="success" disabled>成功按钮</hyk-btn>
    <hyk-btn type="warning" disabled>信息按钮</hyk-btn>
    <hyk-btn type="error" disabled>警告按钮</hyk-btn>
    <hyk-btn type="info" disabled>危险按钮</hyk-btn>
    <h3>圆形按钮</h3>
    <hyk-btn circle>默认按钮</hyk-btn>


  </div>
</template>

<script>
import hykBtn from "../../components/button";

export default {
  name: "home",
  components: {
    hykBtn,
  },
  methods: {
    show(e) {
      alert('点击了')
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
