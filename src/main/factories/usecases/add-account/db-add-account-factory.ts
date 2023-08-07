
import { DbAddAccount } from '@app/data/usecases/add-account/db-add-account'
import { AccountMongoRepository } from '@app/infra/db/mongodb/account/account-mongo-repository'
import { BcryptAdapter } from '@app/infra/cryptography/bcrypt-adapter/bcrypt-adapter'
import { AddAccount } from '@app/domain/usecases/add-account'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(bcryptAdapter, accountMongoRepository, accountMongoRepository)
}
