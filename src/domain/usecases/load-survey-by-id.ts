import { SurveyModel } from '@app/domain/models/survey'

export interface LoadSurveysById {
  loadById: (id: string) => Promise<SurveyModel>
}
