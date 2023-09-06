import { SurveyModel } from '@app/domain/models/survey'

export interface LoadSurveys {
  load: () => Promise<SurveyModel[]>
}
