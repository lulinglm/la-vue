<template>
  <el-container class="BasicLayout">
    <LayoutAside />
    <el-container class="content" direction="vertical">
      <LayoutHeader />
      <LayoutMain />
    </el-container>
  </el-container>
</template>

<script>
import LayoutHeader from "./components/Header";
import LayoutAside from "./components/Aside";
import LayoutMain from "./components/Main";

export default {
  components: {
    LayoutHeader,
    LayoutAside,
    LayoutMain
  }
};
</script>

<style lang="less">
.BasicLayout {
  height: 100%;
  .content {
    width: 100%;
    height: 100%;
  }
  .el-header {
    text-align: left;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
