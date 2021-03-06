import { isNil, keys, cloneDeep } from 'lodash'
import firebase from 'firebase/app'

import firestore from './async-firestore'

export default class GenericDB {
  constructor(collectionPath) {
    this.collectionPath = collectionPath
  }

  /**
   * Create a document in the collection
   * @param data
   * @param id
   */
  async create(data, id = null) {
    const collectionRef = (await firestore()).collection(this.collectionPath)
    const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp()

    const dataToCreate = {
      ...data,
      createTimestamp: serverTimestamp,
      updateTimestamp: serverTimestamp
    }

    const createPromise = isNil(id)
      ? // Create doc with generated id
        collectionRef.add(dataToCreate).then(doc => doc.id)
      : // Create doc with custom id
        collectionRef
          .doc(id)
          .set(dataToCreate)
          .then(() => id)

    const docId = await createPromise

    return {
      id: docId,
      ...data,
      createTimestamp: new Date(),
      updateTimestamp: new Date()
    }
  }

  async updateMeta(newMeta) {
    await (await firestore())
      .collection(this.collectionPath)
      .doc('meta')
      .set(newMeta)
  }

  async getMeta() {
    const res = await (await firestore())
      .collection(this.collectionPath)
      .doc('meta')
      .get()
    const data = res.exists ? res.data() : null
    return data
  }

  /**
   * Read a document in the collection
   * @param id
   */
  async read(id) {
    const result = await (await firestore())
      .collection(this.collectionPath)
      .doc(id)
      .get()

    const data = result.exists ? result.data() : null

    if (isNil(data)) return null

    this.convertObjectTimestampPropertiesToDate(data)
    return { id, ...data }
  }

  /**
   * Read all documents in the collection following constraints
   * @param constraints
   */
  async readAll(constraints = null) {
    const collectionRef = (await firestore()).collection(this.collectionPath)
    let query = collectionRef

    if (constraints) {
      constraints.forEach(constraint => {
        query = query.where(...constraint)
      })
    }

    const formatResult = result =>
      result.docs
        .filter(doc => doc.id !== 'meta')
        .map(ref =>
          this.convertObjectTimestampPropertiesToDate({
            id: ref.id,
            ...ref.data()
          })
        )

    return query.get().then(formatResult)
  }

  /**
   * Update a document in the collection
   * @param data
   */
  async update(data) {
    const { id } = data
    const clonedData = cloneDeep(data)
    delete clonedData.id

    const updateTimestamp = firebase.firestore.FieldValue.serverTimestamp()

    await (await firestore())
      .collection(this.collectionPath)
      .doc(id)
      .update({
        ...clonedData,
        updateTimestamp
      })

    return {
      id,
      ...clonedData,
      updateTimestamp
    }
  }

  /**
   * Delete a document in the collection
   * @param id
   */
  async delete(id) {
    return (await firestore())
      .collection(this.collectionPath)
      .doc(id)
      .delete()
  }

  /**
   * Convert all object Timestamp properties to date
   * @param obj
   */
  convertObjectTimestampPropertiesToDate(obj) {
    const newObj = {}

    keys(obj)
      .filter(prop => obj[prop] instanceof Object)
      .forEach(prop => {
        if (obj[prop] instanceof firebase.firestore.Timestamp) {
          newObj[prop] = obj[prop].toDate()
        } else {
          this.convertObjectTimestampPropertiesToDate(obj[prop])
        }
      })

    return {
      ...obj,
      newObj
    }
  }
}
