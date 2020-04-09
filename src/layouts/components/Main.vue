<template>
  <el-main class="Main">
    <router-view></router-view>
  </el-main>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(8).fill(item)
    };
  }
};
</script>

<style  lang="less">
.Main {
}
</style>
