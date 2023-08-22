import { LoadSurveyById } from '@app/domain/usecases/load-survey-by-id'
import { SurveyModel } from '@app/domain/models/survey'
import { LoadSurveyByIdRepository } from '@app/data/protocols/db/survey/load-survey-by-id-repository'

export class DbLoadSurveyById implements LoadSurveyById {
  constructor (private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository) {}
  async loadById (id: string): Promise<SurveyModel> {
    const survey = await this.loadSurveyByIdRepository.loadById(id)
    return survey
  }
}
