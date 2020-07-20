import firebase from 'firebase/app'
import { isNil } from 'lodash'

let asyncStorage = null

export default () => {
  if (isNil(asyncStorage)) {
    asyncStorage = import(
      /* webpackChunkName: "chunk-firebase_storage" */ 'firebase/storage'
    ).then(() => {
      return firebase.storage()
    })
  }
  return asyncStorage
}
