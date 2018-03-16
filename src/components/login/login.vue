<template>
  <div class="login-body">
    <div class="login-wrap">
      <input type="text" placeholder="input name" v-model="pageUserName" ref="nameRef"/>
      <input type="password" placeholder="input password" v-model="pagePassword" ref="passRef"/>
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
      password: state => state.login.password,
      loginSuccess: state => state.login.loginSuccess
    }),
    pageUserName: {
      get: function () {
        return this.userName
      },
      set: function (val) {
        this.$store.commit(types.SET_USER_NAME, val)
      }
    },
    pagePassword: {
      get: function () {
        return this.password
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
