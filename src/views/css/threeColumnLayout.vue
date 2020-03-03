<template>
  <div>
    <div>三栏布局-float实现</div>
    <div class="float-box">
      <div class="left">left</div>
      <div class="right">right</div>
      <div class="center">center</div>
    </div>
    <div>三栏布局-flex实现</div>
    <div class="flex-box">
      <div class="left">left</div>
      <div class="center">center</div>
      <div class="right">right</div>
    </div>
    <div>三栏布局-absolute实现</div>
    <div class="relative-box">
      <div class="left">left</div>
      <div class="center">center</div>
      <div class="right">right</div>
    </div>
    <div>三栏布局-圣杯布局</div>
    <div class="grail-box">
      <div class="center">center</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <div>三栏布局-双飞翼布局</div>
    <div class="double-fly-box">
      <div class="center">
        <div class="inside">center</div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  width: 20rem;
  height: 20rem;
  background: red;
}
.float-box {
  &::after {
    clear: both;
    display: block;
    content: "";
    height: 0;
    visibility: hidden;
  }
  .left {
    @extend .box;
    float: left;
  }
  .right {
    @extend .box;
    float: right;
  }
  .center {
    margin-left: 200px;
    margin-right: 200px;
    height: 200px;
    background: blue;
  }
}
.flex-box {
  display: flex;
  .left {
    @extend .box;
  }
  .right {
    @extend .box;
  }
  .center {
    flex: 1;
    background: blue;
  }
}
.relative-box {
  position: relative;
  height: 200px;
  .left {
    @extend .box;
    position: absolute;
    top: 0;
    left: 0;
  }
  .right {
    @extend .box;
    position: absolute;
    top: 0;
    right: 0;
  }
  .center {
    background: blue;
    position: absolute;
    top: 0;
    left: 200px;
    right: 200px;
    width: 100%;
    height: 200px;
  }
}
.grail-box {
  padding: 0 200px;
  &::after {
    clear: both;
    display: block;
    visibility: hidden;
    height: 0;
    content: "";
  }
  .left {
    float: left;
    @extend .box;
    margin-left: -100%;
    position: relative;
    right: 200px;
  }
  .right {
    float: left;
    @extend .box;
    margin-right: -200px;
  }
  .center {
    float: left;
    width: 100%;
    height: 200px;
    background: blue;
  }
}
.double-fly-box {
  &::after {
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
    content: "";
  }
  .center {
    float: left;
    width: 100%;
    .inside {
      margin: 0 200px;
      background: blue;
      height: 200px;
    }
  }
  .left {
    float: left;
    @extend .box;
    margin-left: -100%;
  }
  .right {
    float: left;
    @extend .box;
    margin-left: -200px;
  }
}
</style>