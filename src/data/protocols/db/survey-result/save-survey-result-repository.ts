import { SurveyResultModel } from '@app/domain/models/survey-result'
import { SaveSurveyResultModel } from '@app/domain/usecases/survey-result/save-survey-result'

export class SaveSurveyResultRepository {
  save: (data: SaveSurveyResultModel) => Promise<SurveyResultModel>
}
