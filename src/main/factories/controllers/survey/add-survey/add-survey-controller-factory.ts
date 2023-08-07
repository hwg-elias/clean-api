import { Controller } from '@app/presentation/protocols'
import { makeLogControllerDecorator } from '@app/main/factories/decorators/log-controller-decorator-factory'
import { AddSurveyController } from '@app/presentation/controllers/survey/add-survey/add-surver-controller'
import { makeAddSurveyValidation } from './add-survey-validation-factory'
import { makeDbAddSurvey } from '@app/main/factories/usecases/survey/add-survey/db-add-account-factory'

export const makeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerDecorator(controller)
}
