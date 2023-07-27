import { adaptMiddleware } from '../../main/adapters/express-middleware-adapter'
import { makeAuthMiddlewares } from '../../main/factories/middlewares/auth-middleware-factory'

export const auth = adaptMiddleware(makeAuthMiddlewares())