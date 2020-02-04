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
