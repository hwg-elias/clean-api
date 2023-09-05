import { AddSurveyModel } from '@app/domain/usecases/add-survey'
import { AddSurveyRepository } from '@app/data/protocols/db/survey/add-survey-repository'
import { MongoHelper } from '@app/infra/db/mongodb/helpers/mongo-helper'
import { SurveyModel } from '@app/domain/models/survey'
import { LoadSurveysRepository } from '@app/data/protocols/db/survey/load-surveys-repository'
import { LoadSurveyById } from '@app/domain/usecases/load-survey-by-id'
import { ObjectId } from 'mongodb'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository, LoadSurveyById {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const surveys = await surveyCollection.find().toArray() as unknown as SurveyModel[]
    return surveys
  }

  async loadById (id: string): Promise<SurveyModel> {
    const objectId = new ObjectId(id)
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const survey = await surveyCollection.findOne({ _id: objectId }) as unknown as SurveyModel
    return survey
  }
}
