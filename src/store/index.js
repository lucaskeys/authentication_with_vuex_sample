import Vue from 'vue'
import Vuex from 'vuex'
import actions from './modules/actions'
import getters from './modules/getters'
import mutations from './modules/mutations'
Vue.use(Vuex)

const initializeState = () => {
  return {
    user: null,
    error: null
  }
}

export default new Vuex.Store({
  state: initializeState(),
  actions: actions,
  getters,
  mutations
})
