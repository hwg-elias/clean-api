import { makeSaveSurveyResultController } from '@app/main/factories/controllers/survey-result/save-survey-result/save-survey-result-controller-factory'
import { adaptRoute } from '@app/main/adapters/express-routes-adapter'
import { auth } from '@app/main/middlewares/auth'
import { Router } from 'express'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
}
