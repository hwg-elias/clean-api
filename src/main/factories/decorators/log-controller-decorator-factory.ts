import { LogControllerDecorator } from '@app/main/decorators/log-controller-decorator'
import { LogMongoRepository } from '@app/infra/db/mongodb/log/log-mongo-repository'
import { Controller } from '@app/presentation/protocols'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}
