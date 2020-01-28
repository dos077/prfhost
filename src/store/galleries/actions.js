import storage from '@/helpers/galleries/storage'

export default ({ loadCollectionDB }) => ({
  addImage: async ({ state, rootState, commit }, imgFile) => {
    const userId = rootState.authentication.user.id
    const { name, id, createTimestamp } = state.current
    commit('addUpdatePending', id)

    const uploadedImg = await storage.upload({ imgFile, userId })
    const images = state.current.images
      ? [uploadedImg, ...state.current.images]
      : [uploadedImg]

    commit('update', { id, name, createTimestamp, images })
    commit('removeUpdatePending', id)
  },
  deleteImage: async ({ state, rootState, commit }, { path }) => {
    const { name, id, createTimestamp } = state.current
    const images = state.current.images.filter(img => img.path !== path)
    commit('addUpdatePending', id)

    storage.destroy({ path })

    const collectionDB = loadCollectionDB({ rootState })

    const updated = collectionDB.update({ id, name, createTimestamp, images })
    commit('update', updated)
    commit('removeUpdatePending', id)
  }
})
