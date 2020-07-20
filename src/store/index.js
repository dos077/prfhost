import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './authentication'
import app from './app'
import galleries from './galleries'
import profolio from './profolio'
import alias from './alias'
import profile from './profile'

Vue.use(Vuex)

/* If you don't know about Vuex, please refer to https://vuex.vuejs.org/ */

export default new Vuex.Store({
  modules: {
    authentication,
    app,
    galleries,
    profolio,
    alias,
    profile
  }
})
