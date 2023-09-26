import { Controller } from '@app/presentation/protocols'
import { makeLogControllerDecorator } from '@app/main/factories/decorators/log-controller-decorator-factory'
import { SaveSurveyResultController } from '@app/presentation/controllers/survey/survey-result/save-survey-result/save-survey-result-controller'
import { makeDbLoadSurveyById } from '@app/main/factories/usecases/survey/load-survey-by-id/db-load-survey-by-id-factory'
import { makeDbSaveSurveyResult } from '@app/main/factories/usecases/survey-result/save-survey-result/db-save-survey-result-factory'

export const makeSaveSurveyResultController = (): Controller => {
  const controller = new SaveSurveyResultController(makeDbLoadSurveyById(), makeDbSaveSurveyResult())
  return makeLogControllerDecorator(controller)
}
