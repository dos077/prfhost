import CollectionDB from '@/firebase/user-profolio-db'

const loadCollectionDB = ({ rootState }) => {
  const { id } = rootState.authentication.user
  return new CollectionDB(id)
}

export default {
  loadCollectionDB
}
