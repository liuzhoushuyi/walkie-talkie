export default {
  state: {
    messages: []
  },
  mutations: {
    addMessage(state, msg) { state.messages.push(msg) }
  }
}