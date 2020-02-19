<template>
  <div>
    <div class="box">?</div>
    <div class="a">如果指定宽高就可以margin: 0 auto;</div>
    <div class="flex-box">
      <div class="flex-item"></div>
    </div>
    <!-- <div>绝对定位元素居中</div>
    <div class="relative-box">
      <div class="absolute1"></div>
    </div>
    <div class="relative-box">
      <div class="absolute2"></div>
    </div>-->
  </div>
</template>
<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  background: red;
  @media screen and (max-width: 900px) {
    background: blueviolet;
  }
}
.a {
  @extend .box;
  margin: 0 auto;
}
.relative-box {
  //   position: relative;
  .absolute1 {
    @extend .box;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
  .absolute2 {
    @extend .box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.flex-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 300px;
  background: blue;
  .flex-item {
    @extend .box;
  }
}
</style>