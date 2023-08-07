import { AddSurveyModel } from '@app/domain/usecases/add-survey'
import { AddSurveyRepository } from '@app/data/protocols/db/survey/add-survey-repository'
import { MongoHelper } from '@app/infra/db/mongodb/helpers/mongo-helper'
import { SurveyModel } from '@app/domain/models/survey'
import { LoadSurveysRepository } from '@app/data/protocols/db/survey/load-surveys-repository'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyColletion = await MongoHelper.getCollection('surveys')
    await surveyColletion.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveyColletion = await MongoHelper.getCollection('surveys')
    const surveys = await surveyColletion.find().toArray() as unknown as SurveyModel[]
    return surveys
  }
}
