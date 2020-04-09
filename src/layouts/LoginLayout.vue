<template>
  <div class="LoginLayout">
    <div class="title">登录页</div>
    <a-button @click="loginBtn" type="primary">登录</a-button>
  </div>
</template>

<script>
export default {
  data() {
  },
  methods: {
    loginBtn() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less">
.LoginLayout {
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
