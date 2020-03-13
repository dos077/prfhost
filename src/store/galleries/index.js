import buildModule from '@/store/buildModule'
import buildActions from './actions'
import config from './config'

const { state, mutations, actions, getters } = buildModule(config)
const customActions = buildActions(config)

state.collectionName = 'galleries'

export default {
  namespaced: true,
  state,
  mutations,
  actions: { ...actions, ...customActions },
  getters
}
