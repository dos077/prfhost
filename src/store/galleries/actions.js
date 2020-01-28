import storage from '@/helpers/galleries/storage'

export default ({ loadCollectionDB }) => ({
  deleteImage: async ({ state, rootState, commit }, { path }) => {
    const { name, id, createTimestamp } = state.current
    const images = state.current.images.filter(img => img.path !== path)

    storage.destroy({ path })

    const collectionDB = loadCollectionDB({ rootState })

    const updated = collectionDB.update({ id, name, createTimestamp, images })
    commit('update', updated)
  }
})
