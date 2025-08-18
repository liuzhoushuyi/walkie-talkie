export default {
  state: {
    username: '',
    groups: []
  },
  mutations: {
    setUsername(state, name) { state.username = name }
  }
}