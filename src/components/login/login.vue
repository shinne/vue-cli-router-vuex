<template>
  <div class="login-body">
    <div class="login-wrap">
      <input type="text" placeholder="input name" v-model="userName" ref="nameRef"/>
      <input type="password" placeholder="input password" v-model="password" ref="passRef"/>
      <button v-on:click = 'login'>确认提交</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as types from '../../store/login/mutationsType'
export default {
  computed: {
    ...mapState({
      userName: state => state.login.userName,
      loginSuccess: state => state.login.loginSuccess
    }),
    userName: {
      get: function () {
        return this.$store.state.login.userName
      },
      set: function (val) {
        this.$store.commit(types.SET_USER_NAME, val)
      }
    },
    password: {
      get: function () {
        return this.$store.state.login.password
      },
      set: function (val) {
        this.$store.commit(types.SET_USER_PASSWORD, val)
      }
    }
  },
  methods: {
    login(){
      var name = this.userName
      var password = this.password
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
