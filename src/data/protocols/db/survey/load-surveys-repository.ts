import { SurveyModel } from '@app/domain/models/survey'

export class LoadSurveysRepository {
  loadAll: () => Promise<SurveyModel[]>
}
