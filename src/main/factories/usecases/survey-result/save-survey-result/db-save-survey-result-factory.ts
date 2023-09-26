
import { DbSaveSurveyResult } from '@app/data/usecases/survey-result/save-survey-result/db-save-survey-result'
import { SaveSurveyResult } from '@app/domain/usecases/survey-result/save-survey-result'
import { SurveyResultMongoRepository } from '@app/infra/db/mongodb/survey-result/survey-result-mongo-repository'

export const makeDbSaveSurveyResult = (): SaveSurveyResult => {
  const surveyResultMongoRepository = new SurveyResultMongoRepository()
  return new DbSaveSurveyResult(surveyResultMongoRepository)
}
