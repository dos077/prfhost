import buildModule from '@/store/buildModule'
import buildActions from './actions'
import config from './config'

const { state, mutations, actions, getters } = buildModule(config)
const customActions = buildActions(config)

export default {
  namespaced: true,
  state,
  mutations,
  actions: { ...actions, ...customActions },
  getters
}
