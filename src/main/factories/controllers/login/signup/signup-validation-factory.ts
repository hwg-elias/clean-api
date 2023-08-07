
import { RequiredFieldValidation, CompareFieldsValidation, EmailValidation, ValidationComposite } from '@app/validation/validators'
import { Validation } from '@app/presentation/protocols/validation'
import { EmailValidatorAdapter } from '@app/infra/validator/email-validator-adapter'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }

  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

  return new ValidationComposite(validations)
}
