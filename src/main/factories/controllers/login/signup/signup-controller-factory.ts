import { SignUpController } from '@app/presentation/controllers/login/signup/signup-controller'
import { Controller } from '@app/presentation/protocols'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '@app/main/factories/usecases/account/authentication/db-authentication-factory'
import { makeDbAddAccount } from '@app/main/factories/usecases/account/add-account/db-add-account-factory'
import { makeLogControllerDecorator } from '@app/main/factories/decorators/log-controller-decorator-factory'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
