<template>
  <div class="Aside">
    <el-aside style="width: 200px;">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>自动表单
          </template>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  computed: {}
};
</script>

<style lang="less">
.Aside {
  height: 100%;
  border-right: solid 1px #e6e6e6;
  .el-menu {
    border-right: 0px;
  }
}
</style>
