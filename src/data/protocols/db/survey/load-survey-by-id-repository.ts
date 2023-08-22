import { SurveyModel } from '@app/domain/models/survey'

export class LoadSurveyByIdRepository {
  loadById: (id: string) => Promise<SurveyModel>
}
