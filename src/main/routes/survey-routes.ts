import { Router } from 'express'
import { adaptRoute } from '@app/main/adapters/express-routes-adapter'
import { makeAddSurveyController } from '@app/main/factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeLoadSurveysController } from '@app/main/factories/controllers/survey/load-surveys/load-surveys-controller-factory'
import { adminAuth } from '@app/main/middlewares/admin-auth'
import { auth } from '@app/main/middlewares/auth'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}
