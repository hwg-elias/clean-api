
import { RequiredFieldValidation, ValidationComposite, EmailValidation } from '@app/validation/validators'
import { Validation } from '@app/presentation/protocols/validation'
import { EmailValidatorAdapter } from '@app/infra/validator/email-validator-adapter'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }

  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

  return new ValidationComposite(validations)
}
