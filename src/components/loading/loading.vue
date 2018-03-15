<template>
  <div class="mask" v-show="showLoading">
  </div>
</template>

<style lang="scss">
  @import "../../../static/css/headerTop.scss";
</style>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    showLoading: state => state.loading.showLoading
  }),
  methods: {
  },
  created () {
  }
}
</script>
