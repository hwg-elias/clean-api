import { AccountModel } from '@app/domain/models/account'

export interface LoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<AccountModel | null>
}
