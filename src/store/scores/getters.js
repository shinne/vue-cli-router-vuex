const getters = {
  selectedScoreList: state => {
    return state.scoreList.filter(score => score.checked === true)
  },
  scoreAcc: (state, getters) => {
    var scoreAcc = 0
    getters.selectedScoreList.forEach(score => {
      scoreAcc += score.score
    })
    return scoreAcc
  },
  // getters has three params, state,getters,rootState
  selectScoreLength: (state, getters, rootState, rootGetters) => {
    // console.log(rootState, rootGetters)
    return getters.selectedScoreList.length
  }
}
export default getters
