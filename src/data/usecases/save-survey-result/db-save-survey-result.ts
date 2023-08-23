import { SaveSurveyResultRepository } from '@app/data/protocols/db/survey/save-survey-result-repository'
import { SurveyResultModel } from '@app/domain/models/survey-result'
import { SaveSurveyResult, SaveSurveyResultModel } from '@app/domain/usecases/save-survey-result'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (private readonly saveSurveyResultRepository: SaveSurveyResultRepository) {}
  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    return await this.saveSurveyResultRepository.save(data)
  }
}
