import { SurveyModel } from '@app/domain/models/survey'

export interface LoadSurveyById {
  loadById: (id: string) => Promise<SurveyModel>
}
