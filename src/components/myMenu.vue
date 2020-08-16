<template>
  <div>
    <el-menu
      :default-active="currentMenu"
      class="el-menu-vertical-demo"
      background-color="#192B38"
      text-color="#869199"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="info">
        <i class="el-icon-tickets"></i>
        <span slot="title">基本信息</span>
      </el-menu-item>
      <el-menu-item index="user" v-if="$store.getters.isAdmin">
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="device">
        <i class="el-icon-s-help"></i>
        <span slot="title">设备管理</span>
      </el-menu-item>
      <el-menu-item index="dp">
        <i class="el-icon-c-scale-to-original"></i>
        <span slot="title">测点管理</span>
      </el-menu-item>
      <el-menu-item index="alarm">
        <i class="el-icon-message-solid"></i>
        <span slot="title">告警配置</span>
      </el-menu-item>
      <el-menu-item index="table">
        <i class="el-icon-s-data"></i>
        <span slot="title">数据表管理</span>
      </el-menu-item>
      <el-menu-item index="remoteControl">
        <i class="el-icon-place"></i>
        <span slot="title">远程控制</span>
      </el-menu-item>
      <el-menu-item index="dpLinkGroup">
        <i class="el-icon-s-operation"></i>
        <span slot="title">测点联动</span>
      </el-menu-item>
      <el-menu-item index="dashboardManage">
        <i class="el-icon-view"></i>
        <span slot="title">可视化配置管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentMenu: null
    };
  },
  mounted() {
    this.currentMenu = this.$route.path.split("/")[2];
    switch (this.$route.path.split("/")[2]) {
      case "deviceHistory":
        this.currentMenu = "device";
        return;
      case "dpHistory":
        this.currentMenu = "dp";
        return;
      case "errorHistory":
        this.currentMenu = "alarm";
        return;
      case "dpRemoteHistory":
        this.currentMenu = "remoteControl";
        return;
      case "tableUpdate":
        this.currentMenu = "table";
        return;
    }
  }
};
</script>
<style lang="scss" scoped>
.el-menu {
  border-right: 0;
}
</style>
