<template>
  <div class="score-wrap">
    <strong class="tips">请勾选以下特权，并进行保存</strong>
    <div v-for="score in scoreList" :key="score.id">
      <input type="checkbox" v-model = score.checked><label for="">{{score.name}}</label>
    </div>

    <div class="selected-wrap">
      <strong>您当前选中 <span style="color: red;">{{selectScoreLength}}</span> 特权</strong>
      <strong>共需要 <span style="color:red;">{{ scoreAcc }}</span>积分</strong>
      <strong>点击保存按钮进行保存</strong>
      <ul>
        <li class="select-li" v-for="score in selectedScoreList">
          <span>{{score.name}}</span>
          <i class="del-icon" v-on:click="delRights(score.id)"></i>
        </li>
      </ul>
    </div>
    <button v-on:click="saveScore">保存</button>
    <transition name="msg">
      <div v-show="showMsg" v-bind:class="[{success:saveSuccess}, 'toast']" v-on:click ="closeToast" ref = 'toast'>
        {{saveMsg}}
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import * as types from '../../store/scores/mutationsType'
export default {

  computed: {
    ...mapState({
      scoreList: state => state.scores.scoreList,
      showMsg: state => state.scores.showMsg,
      saveSuccess: state => state.scores.saveSuccess,
      saveMsg: state => state.scores.saveMsg
    }),
    ...mapGetters([
      'selectedScoreList',
      'scoreAcc',
      'selectScoreLength'
    ])
  },
  watch: {
    showMsg () {
      if (this.showMsg) {
        let self = this
        setTimeout(function () {
          self.$store.commit(types.CLOSE_TOAST)
        }, 2000)
      }
    }
  },
  methods: {
    saveScore () {
      if (this.selectedScoreList && this.selectedScoreList.length > 0) {
        this.$store.dispatch('saveScoreList', this.selectedScoreList)
      } else {
        alert('请选择您需要的特权')
      }
    },
    closeToast () {
      this.$store.commit(types.CLOSE_TOAST)
    },
    delRights (id) {
      this.$store.commit(types.DELETE_RIGHTS_BY_ID, id)
    }
  },
  created () {
    this.$store.dispatch('getScoreList', {id: 12})
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../static/css/score.scss";
</style>
