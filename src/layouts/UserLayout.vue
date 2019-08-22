<template>
  <div class="user-layout">
    <div class="title">登录页</div>
    <div><img alt="logo" class="logo" :src="logo"/></div>
    <a-button @click="loginBtn" type="primary">登录</a-button>
  </div>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
  data() {
    return {
      logo
    };
  },
  methods: {
    loginBtn() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less">
.user-layout {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  .logo {
    height: 200px;
    margin: 30px;
    vertical-align: top;
  }
  .title {
    font-size: 18px;
    margin: 30px 0 10px 0;
  }
}
</style>
