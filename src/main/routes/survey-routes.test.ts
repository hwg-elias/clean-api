import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import app from '../config/app'
import env from '../config/env'
import request from 'supertest'
import { sign } from 'jsonwebtoken'
import { Collection } from 'mongodb'

let surveyCollection: Collection
let accountCollection: Collection

describe('Survey Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoUrl)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  beforeEach(async () => {
    surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.deleteMany({})
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 403 on add survey without accessToken', async () => {
      await request(app)
        .post('/api/surveys')
        .send()
        .expect(403)
    })
  })

  test('Should return 204 on success', async () => {
    const res = await accountCollection.insertOne({
      name: 'Yasmin Paulina',
      email: 'paulina.yasminica@gmail.com',
      password: '123',
      role: 'admin'
    })
    const id = res.insertedId
    const accessToken = sign({ id }, env.jwtSecret)
    await accountCollection.updateOne({ _id: id }, {
      $set: {
        accessToken
      }
    })
    await request(app)
      .post('/api/surveys')
      .set('x-access-token', accessToken)
      .send({
        question: 'any_question',
        answers: [
          {
            image: 'http://image-name.com',
            answer: 'answer 1'
          },
          {
            answer: 'answer 2'
          }
        ]
      })
      .expect(204)
  })
})
