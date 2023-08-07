import { makeDbLoadSurveys } from '@app/main/factories/usecases/survey/load-surveys/db-load-surveys-factory'
import { LoadSurveysController } from '@app/presentation/controllers/survey/load-surveys/load-surveys-controller'
import { Controller } from '@app/presentation/protocols'
import { makeLogControllerDecorator } from '@app/main/factories/decorators/log-controller-decorator-factory'

export const makeLoadSurveysController = (): Controller => {
  const controller = new LoadSurveysController(makeDbLoadSurveys())
  return makeLogControllerDecorator(controller)
}
