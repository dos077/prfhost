import CollectionDB from '@/firebase/user-galleries-db'

const loadCollectionDB = ({ rootState }) => {
  const { id } = rootState.authentication.user
  return new CollectionDB(id)
}

export default {
  loadCollectionDB
}
