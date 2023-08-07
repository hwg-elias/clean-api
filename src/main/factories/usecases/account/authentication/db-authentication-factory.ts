
import env from '@app/main/config/env'
import { DbAuthentication } from '@app/data/usecases/authentication/db-authentication'
import { AccountMongoRepository } from '@app/infra/db/mongodb/account/account-mongo-repository'
import { Authentication } from '@app/domain/usecases/authentication'
import { BcryptAdapter } from '@app/infra/cryptography/bcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from '@app/infra/cryptography/jwt-adapter/jwt-adapter'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
}
