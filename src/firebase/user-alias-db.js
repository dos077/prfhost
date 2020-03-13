import GenericDB from './generic-db'

import firestore from './async-firestore'

export default class UserAliasDB extends GenericDB {
  constructor() {
    super(`alias`)
  }

  async createAlias({ alias, user }) {
    const existing = await this.read(alias)
    if (existing !== null) throw Error('Alias already existed')
    const { id, email, displayName, photoURL } = user
    const createdAlias = await this.create(
      {
        userId: id,
        email,
        displayName,
        photoURL
      },
      alias
    )
    await (await firestore())
      .collection('users')
      .doc(createdAlias.userId)
      .update({
        alias: createdAlias.id
      })
    return createdAlias
  }

  async changeAlias({ from, to }) {
    const existing = await this.read(to)
    if (existing !== null) throw Error('Alias already existed')
    const data = await this.read(from)
    delete data.id
    const createdAlias = await this.create(data, to)
    await this.delete(from)
    await (await firestore())
      .collection('users')
      .doc(createdAlias.userId)
      .update({
        alias: createdAlias.id
      })
    return createdAlias
  }

  // eslint-disable-next-line class-methods-use-this
  async findAlias({ user }) {
    const { id } = user
    const result = await (await firestore())
      .collection('users')
      .doc(id)
      .get()
    const data = result.exists ? result.data() : null
    return data ? data.alias : null
  }
}
