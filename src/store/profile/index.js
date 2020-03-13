import buildModule from '@/store/buildModule'
import config from './config'
import buildActions from './actions'

const { state, mutations, actions, getters } = buildModule(config)
const customActions = buildActions(config)

state.collectionName = 'profolio'

export default {
  namespaced: true,
  state,
  mutations,
  actions: { ...actions, ...customActions },
  getters
}
