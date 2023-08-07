import { LoadSurveysRepository } from '@app/data/protocols/db/survey/load-surveys-repository'
import { SurveyModel } from '@app/domain/models/survey'
import { LoadSurveys } from '@app/domain/usecases/load-surveys'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}
  async load (): Promise<SurveyModel[]> {
    const surveys = await this.loadSurveysRepository.loadAll()
    return surveys
  }
}
