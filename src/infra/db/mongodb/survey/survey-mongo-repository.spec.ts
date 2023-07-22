import { Collection } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { SurveyMongoRepository } from './survey-mongo-repository'
import env from '../../../../main/config/env'
import { AddSurveyModel } from '../../../../domain/usecases/add-survey'

let surveyColletion: Collection
describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoUrl)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  beforeEach(async () => {
    surveyColletion = await MongoHelper.getCollection('surveys')
    await surveyColletion.deleteMany({})
  })

  const makeFakeSurveyData = (): AddSurveyModel => ({
    question: 'any_question',
    answers: [
      {
        image: 'any_image',
        answer: 'any_answer'
      },
      {
        answer: 'other_answer'
      }
    ]
  })

  const makeSut = (): SurveyMongoRepository => {
    return new SurveyMongoRepository()
  }
  test('Should add a survey on success', async () => {
    const sut = makeSut()
    await sut.add(makeFakeSurveyData())
    const survey = await surveyColletion.findOne({ question: 'any_question' })
    expect(survey).toBeTruthy()
  })
})
