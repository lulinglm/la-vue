<template>
  <div class="home" @click="gotoAbout">
      点击调转到about
  </div>
</template>

<script>

export default {
  name: 'home',
  created () {
    this.$store.dispatch({
      type: 'hello/getHello'
    })
  },
  methods: {
    gotoAbout () {
      this.$router.push('./about/1')
    }
  }
}
</script>
