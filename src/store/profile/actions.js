const sectionTemplate = isChips => ({
  name: isChips ? 'Skills' : 'Experiences',
  lines: isChips ? null : [],
  chips: isChips ? [] : null
})

export default () => ({
  addSection: async ({ dispatch }, { isChips }) => {
    const blank = sectionTemplate(isChips)
    return dispatch('create', blank)
  }
})
