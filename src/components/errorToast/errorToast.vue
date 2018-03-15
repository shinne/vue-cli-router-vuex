<template>
  <transition name="err-toast">
    <div class="err-toast-wrap" v-show="showErrorToast">
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import * as types from '../../store/errorToast/mutationsType'
export default {
  computed: mapState({
    showErrorToast: state => state.errorToast.showErrorToast
  }),
  watch: {
    showErrorToast () {
      var self = this
      this.showErrorToast && setTimeout(function () {
        self.$store.commit(types.TOAST_CLOSE)
      }, 2000)
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style lang="scss">
  @import "../../../static/css/errorToast.scss";
</style>
