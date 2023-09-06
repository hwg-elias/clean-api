import { AddAccountRepository } from '@app/data/protocols/db/account/add-account-repository'
import { LoadAccountByEmailRepository } from '@app/data/protocols/db/account/load-account-by-email-repository'
import { UpdateAccessTokenRepository } from '@app/data/protocols/db/account/update-access-token-repository'
import { AccountModel } from '@app/domain/models/account'
import { AddAccountModel } from '@app/domain/usecases/account/add-account'
import { MongoHelper } from '@app/infra/db/mongodb/helpers/mongo-helper'
import { LoadAccountByTokenRepository } from '@app/data/protocols/db/account/load-account-by-token-repository'

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository, LoadAccountByTokenRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const { insertedId: id } = result
    const account = await accountCollection.findOne({ _id: id })

    return MongoHelper.map(account)
  }

  async loadByEmail (email: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ email })
    return MongoHelper.map(account)
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const objectId = MongoHelper.parseToObjectId(id)
    await accountCollection.updateOne(
      { _id: objectId },
      {
        $set: {
          accessToken: token
        }
      }
    )
  }

  async loadByToken (token: string, role?: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      accessToken: token,
      $or: [{
        role
      }, {
        role: 'admin'
      }]
    })
    return MongoHelper.map(account)
  }
}
