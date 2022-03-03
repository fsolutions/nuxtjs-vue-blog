const state = () => ({
  posts: []
})

const getters = {
  getPosts: state => state.posts
}

const mutations = {
  setPosts (state, payload) {
    state.posts = payload
  }
}

const actions = {
  async fetchPosts ({ commit }) {
    const posts = await this.$axios.$get('/posts')
    commit('setPosts', posts)
  }
}

export default {
  state, getters, mutations, actions
}
