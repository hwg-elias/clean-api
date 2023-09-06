
import { DbAddSurvey } from '@app/data/usecases/survey/add-survey/db-add-survey'
import { SurveyMongoRepository } from '@app/infra/db/mongodb/survey/survey-mongo-repository'
import { AddSurvey } from '@app/domain/usecases/survey/add-survey'

export const makeDbAddSurvey = (): AddSurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbAddSurvey(surveyMongoRepository)
}
