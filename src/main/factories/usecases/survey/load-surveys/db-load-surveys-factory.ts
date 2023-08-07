
import { SurveyMongoRepository } from '@app/infra/db/mongodb/survey/survey-mongo-repository'
import { DbLoadSurveys } from '@app/data/usecases/load-surveys/db-load-surveys'
import { LoadSurveys } from '@app/domain/usecases/load-surveys'

export const makeDbLoadSurveys = (): LoadSurveys => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveys(surveyMongoRepository)
}
