import { AccountModel } from '@app/domain/models/account'

export interface LoadAccountByTokenRepository {
  loadByToken: (token: string, role?: string) => Promise<AccountModel>
}
