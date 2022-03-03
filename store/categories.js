const state = () => ({
  categories: []
})

const getters = {
  getCategories: state => state.categories
}

const mutations = {
  setCategories (state, payload) {
    state.categories = payload
  }
}

const actions = {
  async fetchCategories ({ commit }) {
    const categories = await this.$axios.$get('/users')
    commit('setCategories', categories)
  }
}

export default {
  state, getters, mutations, actions
}
