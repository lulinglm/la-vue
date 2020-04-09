<template>
  <div class="home">
    主页
  </div>
</template>

<script>
const buttonItem = {
  type: "select",
  label: "状态",
  value: "",
  disabled: false,
  multiple: false,
  placeholder: "请选择",
  rules: [],
  key: "selectValue",
  options: {
    UNSOLVED: "未解决",
    SOLVED: "已解决"
  }
};


export default {
  components: {},
  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch({
      type: "hello/getHello"
    });
  },
  methods: {
    gotoAbout() {
      this.$router.push("./about/1");
    },
    handlClick(data) {
      buttonItem.key = `${buttonItem.key}1`;
      this.config.formItemList.push(buttonItem);
    }
  }
};
</script>



<style  lang="less">
.home {
  display: flex;
  height: 100%;
}
</style>
