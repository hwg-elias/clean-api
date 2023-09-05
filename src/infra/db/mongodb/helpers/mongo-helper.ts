import { MongoClient, Collection, ObjectId } from 'mongodb'
import { AccountModel } from '@app/domain/models/account'
export const MongoHelper = {
  client: null as MongoClient,
  url: null as string,

  async connect (url: string): Promise<void> {
    this.url = url
    this.client = await MongoClient.connect(url)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect(this.url)
    }

    return this.client.db().collection(name)
  },

  parseToObjectId (value: string): ObjectId {
    return new ObjectId(value)
  },

  map (data: any): any {
    if (!data) return null
    const { _id, ...dataWithoutId } = data

    return Object.assign(
      {},
      dataWithoutId,
      { id: _id.toHexString() }
    ) as AccountModel
  },

  mapCollection (collection: any[]): any[] {
    return collection.map(c => MongoHelper.map(c))
  }
}
