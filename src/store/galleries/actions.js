import initStorage from '@/firebase/storage'
import { buildSubPath, checkPath } from '@/firebase/storage/galleriesPath'

export default () => ({
  createBlank: async ({ dispatch }) => {
    const blank = { name: 'Untitled', images: null }
    return dispatch('create', blank)
  },
  addImage: async ({ state, rootState, commit, dispatch }, imgFile) => {
    const { current } = state
    const storage = await initStorage({ rootState })
    const subPath = buildSubPath({ gallery: current })
    await storage.validateImg(imgFile, subPath)
    await checkPath({ gallery: current, storage })

    commit('addUpdatePending', current.id)
    const uploadedImg = await storage.upload({ imgFile, subPath })
    const clone = { ...current }
    clone.images = current.images
      ? [uploadedImg, ...current.images]
      : [uploadedImg]

    commit('removeUpdatePending', current.id)
    return dispatch('update', clone)
  },
  updateImage: async ({ state, dispatch }, { path, title, caption }) => {
    const clone = { ...state.current }
    clone.images = state.current.images.map(img => {
      if (img.path !== path) return img
      const newImg = { ...img }
      if (title) newImg.title = title
      if (caption) newImg.caption = caption
      return newImg
    })
    return dispatch('update', clone)
  },
  deleteImage: async ({ state, rootState, commit, dispatch }, { path }) => {
    const { current } = state
    commit('addUpdatePending', current.id)

    const storage = await initStorage({ rootState })
    storage.destroy({ path })
    const clone = { ...current }
    clone.images = current.images.filter(img => img.path !== path)

    commit('removeUpdatePending', current.id)

    return dispatch('update', clone)
  },
  deleteGallery: async ({ rootState, dispatch }, gallery) => {
    const { id } = gallery

    if (gallery.images) {
      const storage = await initStorage({ rootState })
      gallery.images.forEach(({ path }) => {
        storage.destroy({ path })
      })
    }

    dispatch('delete', id)
  }
})
