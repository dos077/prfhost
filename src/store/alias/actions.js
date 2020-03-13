const sectionTemplate = isChips => ({
  name: isChips ? 'Skills' : 'Experiences',
  id: Date.now(),
  lines: isChips ? null : [],
  chips: isChips ? [] : null
})

export default ({ loadCollectionDB }) => ({
  createAlias: async ({ rootState, commit }, newAlias) => {
    const alias = newAlias.replace(/[^\w]/gi, '')
    const { user } = rootState.authentication
    commit('setCreationPending', true)

    try {
      const collectionDB = loadCollectionDB({ rootState })
      const created = await collectionDB.createAlias({ alias, user })
      commit('setCurrent', created)
    } catch (e) {
      commit('setCreationPending', false)
      throw e
    }

    commit('setCreationPending', false)
  },
  loadAlias: async ({ rootState, dispatch }) => {
    const { user } = rootState.authentication
    if (user.alias) dispatch('read', user.alias)
  },
  changeAlias: async ({ rootState, commit }, { to, from }) => {
    const alias = to.replace(/[^\w]/gi, '')
    if (alias === from) throw Error('No change detected')
    commit('addUpdatePending', from)

    try {
      const collectionDB = loadCollectionDB({ rootState })
      const changed = await collectionDB.changeAlias({ from, to: alias })
      commit('setCurrent', changed)
    } catch (e) {
      commit('removeUpdatePending', from)
      throw e
    }

    commit('removeUpdatePending', from)
  },
  addSection: async ({ state, dispatch }, { isChips = false }) => {
    const { current } = state
    const clone = { ...current }
    const blank = sectionTemplate(isChips)
    clone.sections = current.sections ? [...current.sections, blank] : [blank]
    return dispatch('update', clone)
  },
  deleteSection: async ({ state, dispatch }, sId) => {
    const clone = { ...state.current }
    clone.sections = state.current.sections.filter(s => s.id !== sId)
    return dispatch('update', clone)
  },
  updateSection: async ({ state, dispatch }, { id, name, chips, lines }) => {
    if (!id || (!name && !chips && !lines)) return false // should throw error
    const { current } = state
    const clone = { ...current }
    clone.sections = current.sections.map(s => {
      if (s.id !== id) return s
      const cloneS = { ...s }
      if (name) cloneS.name = name
      if (chips) cloneS.chips = chips
      if (lines) cloneS.lines = lines
      return cloneS
    })
    return dispatch('update', clone)
  }
})
