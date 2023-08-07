import { adaptMiddleware } from '@app/main/adapters/express-middleware-adapter'
import { makeAuthMiddlewares } from '@app/main/factories/middlewares/auth-middleware-factory'

export const auth = adaptMiddleware(makeAuthMiddlewares())
