const state = () => ({
  help: false // 是否展示帮助文档 false：不展示，true：展示
})

const mutations = {
  SET_HELP_WORD(state, val) {
    state.help = val
  }
}

const actions = {
  useHelpWord({ commit }, val) {
    commit('SET_HELP_WORD', val)
  }
}

export default { namespaced: true, state, mutations, actions }
