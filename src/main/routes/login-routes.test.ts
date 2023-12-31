import request from 'supertest'
import app from '@app/main/config/app'
import { MongoHelper } from '@app/infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import { hash } from 'bcryptjs'
import env from '@app/main/config/env'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoUrl)
  })
  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  describe('POST /signup', () => {
    test('Should return an 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Yasmin Paulina',
          email: 'paulina.yasminica@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'Yasmin Paulina',
        email: 'paulina.yasminica@gmail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'paulina.yasminica@gmail.com',
          password: '123'
        })
        .expect(200)
    })
    test('Should return 401 if invalid credentials', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'paulina.yasminica@gmail.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
