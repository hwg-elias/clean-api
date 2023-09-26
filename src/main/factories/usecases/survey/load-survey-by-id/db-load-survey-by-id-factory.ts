
import { SurveyMongoRepository } from '@app/infra/db/mongodb/survey/survey-mongo-repository'
import { LoadSurveyById } from '@app/domain/usecases/survey/load-survey-by-id'
import { DbLoadSurveyById } from '@app/data/usecases/survey/load-survey-by-id/db-load-survey-by-id'

export const makeDbLoadSurveyById = (): LoadSurveyById => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveyById(surveyMongoRepository)
}
