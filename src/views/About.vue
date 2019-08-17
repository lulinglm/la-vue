<template>
  <div class="about" @click="gotoHome">
    <h1>点击调转home</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  methods: {
    gotoHome () {
      this.$router.push('/')
    }
  }
}
</script>
