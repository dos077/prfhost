import initStorage from '@/firebase/storage'
import { buildSubPath, checkSectionPath } from '@/firebase/storage/profolioPath'

const projectTemplate = () => ({
  name: 'Untitled',
  sections: null,
  github: null,
  demo: null,
  bannerImage: null
})

const sectionTemplate = () => ({
  id: Date.now(),
  images: [],
  text: ''
})

export default () => ({
  createBlank: ({ dispatch }) => {
    const blank = projectTemplate()
    return dispatch('create', blank)
  },
  addBanner: async ({ state, rootState, commit, dispatch }, imgFile) => {
    const { current } = state
    const subPath = buildSubPath({ project: current })
    const storage = await initStorage({ rootState })
    await storage.validateImg(imgFile, subPath)
    if (current.bannerImage)
      await storage.destroy({ path: current.bannerImage.path })

    commit('addUpdatePending', current.id)

    const bannerImage = await storage.upload({ imgFile, subPath })
    const clone = { ...current }
    clone.bannerImage = bannerImage

    commit('removeUpdatePending', current.id)

    return dispatch('update', clone)
  },
  addSection: async ({ state, dispatch }) => {
    const { current } = state
    const clone = { ...current }
    const blank = sectionTemplate()
    clone.sections = current.sections ? [...current.sections, blank] : [blank]
    return dispatch('update', clone)
  },
  updateSection: async ({ state, dispatch }, { section, newText }) => {
    const { current } = state
    const clone = { ...current }
    clone.sections = current.sections.map(s => {
      if (s.id !== section.id) return s
      const cloneS = { ...s }
      cloneS.text = newText
      return cloneS
    })
    return dispatch('update', clone)
  },
  deleteSection: async ({ state, rootState, commit, dispatch }, section) => {
    const { current } = state
    commit('addUpdatePending', current.id)

    const storage = await initStorage({ rootState })
    section.images.forEach(({ path }) => storage.destroy({ path }))

    const clone = { ...current }
    clone.sections = current.sections.filter(s => s.id !== section.id)

    commit('removeUpdatePending', current.id)

    return dispatch('update', clone)
  },
  deleteProject: async ({ rootState, commit, dispatch }, project) => {
    const { id } = project
    commit('addUpdatePending', id)

    const storage = await initStorage({ rootState })
    if (project.bannerImage) {
      storage.destroy({ path: project.bannerImage.path })
    }
    if (project.sections)
      project.sections.forEach(section => {
        if (section.images)
          section.images.forEach(({ path }) => {
            storage.destroy({ path })
          })
      })
    commit('removeUpdatePending', id)
    return dispatch('delete', id)
  },
  addImage: async (
    { state, rootState, commit, dispatch },
    { imgFile, section }
  ) => {
    const { current } = state
    const subPath = buildSubPath({ project: current, section })
    const storage = await initStorage({ rootState })
    await storage.validateImg(imgFile, subPath)
    await checkSectionPath({ project: current, section, storage })

    commit('addUpdatePending', state.current.id)

    const uploadedImg = await storage.upload({ imgFile, subPath })
    const updatedImages = [...section.images, uploadedImg]
    const clone = { ...state.current }
    clone.sections = state.current.sections.map(s => {
      if (s.id !== section.id) return s
      const updatedSection = { ...s }
      updatedSection.images = updatedImages
      return updatedSection
    })

    commit('removeUpdatePending', state.current.id)

    return dispatch('update', clone)
  },
  deleteImage: async (
    { state, rootState, commit, dispatch },
    { path, section }
  ) => {
    const { current } = state
    commit('addUpdatePending', current.id)

    const storage = await initStorage({ rootState })
    await storage.destroy({ path })

    const clone = { ...current }
    clone.sections = current.sections.map(s => {
      if (s.id !== section.id) return s
      const cloneS = { ...s }
      cloneS.images = s.images.filter(i => i.path !== path)
      return cloneS
    })
    commit('removeUpdatePending', current.id)

    return dispatch('update', clone)
  }
})
