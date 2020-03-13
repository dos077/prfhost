import presetColors from '@/helpers/presetColors'

export default ({ loadCollectionDB }) => {
  /**
   * Fetch of current loggedin user
   */
  return {
    getAll: async ({ rootState, commit }) => {
      const collectionDB = loadCollectionDB({ rootState })

      const items = await collectionDB.readAll()
      commit('set', items)
    },

    read: async ({ rootState, commit }, id) => {
      commit('setCreationPending', true)
      const collectionDB = loadCollectionDB({ rootState })

      const item = await collectionDB.read(id)
      commit('setCurrent', item)
      commit('setCreationPending', false)
    },

    /**
     * Create a Gallerie for current loggedin user
     */
    create: async ({ rootState, commit }, item) => {
      const collectionDB = loadCollectionDB({ rootState })

      commit('setCreationPending', true)
      const created = await collectionDB.create(item)
      commit('add', created)
      commit('setCurrent', created)
      commit('setCreationPending', false)
    },

    rename: async ({ rootState, state, commit }, { name }) => {
      if (!name || typeof name !== 'string') throw Error('Name is not a string')
      const srr = name.match(/[\w\s]/g)
      if (srr.length > 11) throw Error('Name too long')

      const newMeta = { name: srr.join(''), color: state.color }
      const collectionDB = loadCollectionDB({ rootState })
      await collectionDB.updateMeta(newMeta)
      commit('setName', name)
    },

    setColor: async ({ rootState, state, commit }, { color }) => {
      if (!color || !presetColors.includes(color))
        throw Error('Color is not in material palette')
      const collectionDB = loadCollectionDB({ rootState })
      const meta = { name: state.collectionName, color }
      await collectionDB.updateMeta(meta)
      commit('setColor', color)
    },

    readMeta: async ({ rootState, commit }) => {
      const collectionDB = loadCollectionDB({ rootState })
      const meta = await collectionDB.getMeta()
      if (meta) {
        if (meta.name) commit('setName', meta.name)
        if (meta.color) commit('setColor', meta.color)
      }
    },

    update: async ({ rootState, commit }, item) => {
      const collectionDB = loadCollectionDB({ rootState })

      commit('addUpdatePending', item.id)
      const updated = await collectionDB.update(item)
      commit('update', updated)
      commit('removeUpdatePending', item.id)
    },

    /**
     * Delete a user Gallerie from its id
     */
    delete: async ({ rootState, commit, getters }, id) => {
      if (getters.isDeletionPending(id)) return

      const collectionDB = loadCollectionDB({ rootState })

      commit('addDeletionPending', id)
      await collectionDB.delete(id)
      commit('removeById', id)
      commit('removeDeletionPending', id)
    }
  }
}
