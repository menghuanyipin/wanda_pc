import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
})

var defaultState = {
  count: 0
}
const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }
    case 'sub':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const addAction = {
  type: 'add'
}
const subAction = {
  type: 'sub'
}

addBtn(){
  store.dispatch(addAction)
}
<buttton onClick={this.addBtn}></button>