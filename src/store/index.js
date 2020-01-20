import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*
  modules
 */
import Cat from './modules/Cat/Cat'

export default new Vuex.Store({
  modules: {
    Cat
  }
})
