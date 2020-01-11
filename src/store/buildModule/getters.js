import { find } from 'lodash'

export default () => ({
  /**
   * Check if a id has deletion pending
   */
  isDeletionPending: state => id => state.deletionPending.includes(id),

  /**
   * Get  by id
   */
  getById: state => id => find(state.items, i => i.id === id)
})
