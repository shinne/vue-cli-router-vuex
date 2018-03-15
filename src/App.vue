<template>
  <div id="app">
    <header-top></header-top>
    <loading></loading>
    <router-view/>
  </div>
</template>

<script>
import headerTop from './components/headerTop/headerTop.vue'
import loading from './components/loading/loading.vue'
export default {
  name: 'App',
  components: {
    headerTop,
    loading
  }
}
</script>

<style lang="scss">
  @import "../static/css/loading";
</style>
