import storage from '@/helpers/galleries/storage'

const makeBlank = () => ({
  name: 'Untitled',
  sections: null,
  github: null,
  demo: null,
  bannerImage: null
})

export default ({ loadCollectionDB }) => ({
  createBlank: async ({ rootState, commit }) => {
    const blank = makeBlank
    commit('setCreationPending', true)

    const collectionDB = loadCollectionDB({ rootState })
    const created = await collectionDB.create(blank)

    commit('add', created)
    commit('setCurrent', created)
    commit('setCreationPending', false)
  },
  addBanner: async ({ state, rootState, commit }, imgFile) => {
    const userId = rootState.authentication.user.id
    const { current } = state
    commit('addUpdatePending', current.id)

    const bannerImage = await storage.upload({ imgFile, userId })
    const clone = { ...current }
    clone.bannerImage = bannerImage

    const collectionDB = loadCollectionDB({ rootState })
    const updated = await collectionDB.update(clone)
    commit('update', updated)
    commit('removeUpdatePending', current.id)
  },
  addImage: async ({ state, rootState, commit }, imgFile) => {
    const userId = rootState.authentication.user.id
    const { name, id, createTimestamp } = state.current
    commit('addUpdatePending', id)

    const uploadedImg = await storage.upload({ imgFile, userId })
    const images = state.current.images
      ? [uploadedImg, ...state.current.images]
      : [uploadedImg]

    const collectionDB = loadCollectionDB({ rootState })

    const updated = await collectionDB.update({
      id,
      name,
      createTimestamp,
      images
    })
    commit('update', updated)
    commit('removeUpdatePending', id)
  },
  updateImage: async (
    { state, rootState, commit },
    { path, title, caption }
  ) => {
    const { name, id, createTimestamp } = state.current
    commit('addUpdatePending', id)

    const images = state.current.images.map(img => {
      if (img.path !== path) return img
      const newImg = { ...img }
      if (title) newImg.title = title
      if (caption) newImg.caption = caption
      return newImg
    })
    const collectionDB = loadCollectionDB({ rootState })

    const updated = await collectionDB.update({
      id,
      name,
      createTimestamp,
      images
    })
    commit('update', updated)
    commit('removeUpdatePending', id)
  },
  deleteImage: async ({ state, rootState, commit }, { path }) => {
    const { name, id, createTimestamp } = state.current
    const images = state.current.images.filter(img => img.path !== path)
    commit('addUpdatePending', id)

    storage.destroy({ path })

    const collectionDB = loadCollectionDB({ rootState })

    const updated = await collectionDB.update({
      id,
      name,
      createTimestamp,
      images
    })
    commit('update', updated)
    commit('removeUpdatePending', id)
  }
})
