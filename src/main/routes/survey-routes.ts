import { Router } from 'express'
import { adaptRoute } from '../adapters/express-routes-adapter'
import { makeAddSurveyController } from '../../main/factories/controllers/survey/add-survey/add-survey-controller-factory'
import { adaptMiddleware } from '../../main/adapters/express-middleware-adapter'
import { makeAuthMiddlewares } from '../../main/factories/middlewares/auth-middleware-factory'
import { makeLoadSurveysController } from '../../main/factories/controllers/survey/load-surveys/load-surveys-controller-factory'

export default (router: Router): void => {
  const adminAuth = adaptMiddleware(makeAuthMiddlewares('admin'))
  const auth = adaptMiddleware(makeAuthMiddlewares())
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}
