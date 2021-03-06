import GenericDB from './generic-db'

export default class UserProfolioDB extends GenericDB {
  constructor(userId) {
    super(`users/${userId}/profolio`)
  }

  // Here you can extend UserProductsDB with custom methods
}
