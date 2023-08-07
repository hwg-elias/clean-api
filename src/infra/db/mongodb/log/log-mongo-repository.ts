import { LogErrorRepository } from '@app/data/protocols/db/log/log-error-repository'
import { MongoHelper } from '@app/infra/db/mongodb/helpers/mongo-helper'

export class LogMongoRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorColletion = await MongoHelper.getCollection('errors')
    await errorColletion.insertOne({
      stack,
      date: new Date()
    })
  }
}
