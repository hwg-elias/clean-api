import { AuthMiddleware } from '@app/presentation/middlewares/auth-middleware'
import { Middleware } from '@app/presentation/protocols'
import { makeDbLoadAccountByToken } from '@app/main/factories/usecases/account/load-account-by-token/db-account-by-token-factory'

export const makeAuthMiddlewares = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
