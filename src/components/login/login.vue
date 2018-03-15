<template>
  <div class="login-body">
    <div class="login-wrap">
      <input type="text" placeholder="input name" ref="nameRef"/>
      <input type="password" placeholder="input password" ref="passRef"/>
      <button v-on:click = 'login'>确认提交</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    userName: state => state.login.userName,
    password: state => state.login.password,
    loginSuccess: state => state.login.loginSuccess
  }),
  methods: {
    login(){
      var name = this.$refs.nameRef.value
      var password = this.$refs.passRef.value
      this.$store.dispatch('login',
        {
          userName: name,
          password: password
        })
    }
  },
  watch: {
    loginSuccess () {
      this.$router.push({path: '/home'})
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
  @import "../../../static/css/login";
</style>
