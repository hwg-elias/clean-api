import { Collection } from 'mongodb'
import { MongoHelper } from '@app/infra/db/mongodb/helpers/mongo-helper'
import env from '@app/main/config/env'
import MockDate from 'mockdate'
import { SurveyModel } from '@app/domain/models/survey'
import { AccountModel } from '@app/domain/models/account'
import { SaveSurveyResultModel } from '@app/domain/usecases/save-survey-result'
import { SurveyResultMongoRepository } from './survey-result-mongo-repository'

let surveyCollection: Collection
let surveyResultCollection: Collection
let accountCollection: Collection

const makeFakeSurveyResultData = async (): Promise<SaveSurveyResultModel> => {
  const survey = await makeSurvey()
  const account = await makeAccount()

  return {
    surveyId: survey.id,
    accountId: account.id,
    answer: survey.answers[0].answer,
    date: new Date()
  }
}

const makeSurvey = async (): Promise<SurveyModel> => {
  const res = await surveyCollection.insertOne({
    question: 'any_question',
    answers: [
      {
        image: 'any_image',
        answer: 'any_answer'
      },
      {
        answer: 'other_answer'
      }
    ],
    date: new Date()
  })
  const find = await surveyCollection.findOne({ _id: res.insertedId }) as unknown as SurveyModel
  return find
}

const makeAccount = async (): Promise<AccountModel> => {
  const res = await accountCollection.insertOne({
    name: 'any_name',
    email: 'any_email@mail.com',
    password: 'any_password',
    accessToken: 'any_token'
  })
  const find = await accountCollection.findOne({ _id: res.insertedId }) as unknown as AccountModel
  return find
}

const makeSut = (): SurveyResultMongoRepository => {
  return new SurveyResultMongoRepository()
}
describe('Survey Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoUrl)
    MockDate.set(new Date())
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
    MockDate.reset()
  })
  beforeEach(async () => {
    surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.deleteMany({})
    surveyResultCollection = await MongoHelper.getCollection('surveyResults')
    await surveyResultCollection.deleteMany({})
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('save()', () => {
    test('Should add a survey result if its new', async () => {
      const sut = makeSut()
      const surveyResult = await sut.save(await makeFakeSurveyResultData())
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.answer).toBe('any_answer')
    })
  })
})
