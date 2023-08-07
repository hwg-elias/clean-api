import { JwtAdapter } from '@app/infra/cryptography/jwt-adapter/jwt-adapter'
import { DbLoadAccountByToken } from '@app/data/usecases/load-account-by-token/db-load-account-by-token'
import { LoadAccountByToken } from '@app/domain/usecases/load-account-by-token'
import { AccountMongoRepository } from '@app/infra/db/mongodb/account/account-mongo-repository'
import env from '@app/main/config/env'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(jwtAdapter, accountMongoRepository)
}
