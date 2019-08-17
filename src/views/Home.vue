<template>
  <div class="home" @click="gotoAbout">
      点击调转到about
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  name: 'home',
  created () {
    request({
      url: '/hello',
      method: 'GET',
      data: null
    })
  },
  methods: {
    gotoAbout () {
      this.$router.push('./about')
    }
  }
}
</script>
