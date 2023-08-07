import { Router } from 'express'
import { adaptRoute } from '@app/main/adapters/express-routes-adapter'
import { makeLoginController } from '@app/main/factories/controllers/login/login/login-controller-factory'
import { makeSignUpController } from '@app/main/factories/controllers/login/signup/signup-controller-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
