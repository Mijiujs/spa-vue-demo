<template>
  <div>
    <div>两栏布局--float实现</div>
    <div class="float-box">
      <div class="left1">float:left</div>
      <div class="right1">margin-left:宽度</div>
    </div>
    <div>两栏布局--flex实现</div>
    <div class="flex-box">
      <div class="left3"></div>
      <div class="right3">flex:1</div>
    </div>
    <div>两栏布局--absolute实现</div>
    <div class="relative-box">
      <div class="left2">position: absolute;</div>
      <div class="right2"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
}

.float-box {
  background: #f5f5f5;
  &::after {
    clear: both;
    content: "";
    display: block;
    height: 0;
    visibility: hidden;
  }
  .left1 {
    @extend .box;
    background: red;
    float: left;
  }
  .right1 {
    background: green;
    height: 200px;
    margin-left: 200px;
  }
}
.relative-box {
  position: relative;
  .left2 {
    @extend .box;
    background: red;
    position: absolute;
    top: 0;
    left: 0;
  }
  .right2 {
    background: yellow;
    height: 200px;
    position: absolute;
    top: 0;
    width: 100%;
    left: 200px;
  }
}
.flex-box {
  display: flex;
  .left3 {
    @extend .box;
    background: red;
  }
  .right3 {
    background: blue;
    flex: 1;
  }
}
</style>