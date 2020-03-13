import GenericDB from './generic-db'

export default class UserProfileDB extends GenericDB {
  constructor(userId) {
    super(`users/${userId}/profile`)
  }

  // Here you can extend UserProductsDB with custom methods
}
