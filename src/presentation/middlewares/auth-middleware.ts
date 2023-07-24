import { forbidden } from '../../presentation/helpers/http/http-helper'
import { HttpResponse, HttpRequest, Middleware } from '../../presentation/protocols'
import { AccessDeniedError } from '../../presentation/errors'

export class AuthMiddleware implements Middleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = forbidden(new AccessDeniedError())
    return await new Promise(resolve => resolve(error))
  }
}
