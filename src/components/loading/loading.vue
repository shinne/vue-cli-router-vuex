<template>
  <div class="mask" v-show="showLoading">
  </div>
</template>

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

<style lang="scss">
  @import "../../../static/css/loading.scss";
</style>
