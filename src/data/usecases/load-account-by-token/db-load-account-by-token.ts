import { LoadAccountByTokenRepository } from '@app/data/protocols/db/account/load-account-by-token-repository'
import { AccountModel } from '@app/domain/models/account'
import { LoadAccountByToken } from '@app/domain/usecases/load-account-by-token'
import { Decrypter } from '@app/data/protocols/criptography/decrypter'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<AccountModel | null> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken(accessToken, role)
      if (account) {
        return account
      }
    }
    return null
  }
}
