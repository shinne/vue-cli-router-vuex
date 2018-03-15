<template>
  <div id="app">
    <header-top></header-top>
    <loading></loading>
    <error-toast></error-toast>
    <router-view/>
  </div>
</template>

<script>
import headerTop from './components/headerTop/headerTop.vue'
import loading from './components/loading/loading.vue'
import errorToast from './components/errorToast/errorToast.vue'
export default {
  name: 'App',
  components: {
    headerTop,
    loading,
    errorToast
  }
}
</script>
