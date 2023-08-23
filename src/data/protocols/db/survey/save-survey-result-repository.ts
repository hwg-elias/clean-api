import { SurveyResultModel } from '@app/domain/models/survey-result'
import { SaveSurveyResultModel } from '@app/domain/usecases/save-survey-result'

export class SaveSurveyResultRepository {
  save: (data: SaveSurveyResultModel) => Promise<SurveyResultModel>
}
