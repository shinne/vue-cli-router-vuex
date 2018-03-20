const getters = {
  selectedScoreList: state => {
    return state.scoreList.filter(score => score.checked === true)
  },
  scoreAcc: state => {
    var scoreAcc = 0
    state.scoreList.forEach(score => {
      if (score.checked) {
        scoreAcc += score.score
      }
    })
    return scoreAcc
  },
  //getters has three params, state,getters,rootState
  selectScoreLength: (state, getters, rootState) => {
    return getters.selectedScoreList.length
  }
}
export default getters
