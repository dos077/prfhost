export default () => ({
  /*  input name */
  setNameToCreate: (state, name) => (state.nameToCreate = name),

  set: (state, items) => {
    state.items = items
  },

  setCurrent: (state, item) => (state.current = item),

  add: (state, item) => state.items.push(item),

  removeById: (state, id) => {
    const index = state.items.findIndex(i => i.id === id)
    state.items.splice(index, 1)
  },

  addUpdatePending: (state, id) => state.deletionPending.push(id),

  remoteUpdatePending: (state, id) => {
    const index = state.updatePending.findIndex(i => i === id)
    state.updatePending.splice(index, 1)
  },

  addDeletionPending: (state, id) => state.deletionPending.push(id),

  removeDeletionPending: (state, id) => {
    const index = state.deletionPending.findIndex(i => i === id)
    state.deletionPending.splice(index, 1)
  },

  setCreationPending: (state, value) => (state.creationPending = value)
})
