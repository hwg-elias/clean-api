import { makeLoginValidation } from './login-validation-factory'
import { Controller } from '@app/presentation/protocols'
import { LoginController } from '@app/presentation/controllers/login/login/login-controller'
import { makeDbAuthentication } from '@app/main/factories/usecases/account/authentication/db-authentication-factory'
import { makeLogControllerDecorator } from '@app/main/factories/decorators/log-controller-decorator-factory'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(controller)
}
