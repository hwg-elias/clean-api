import { AccountModel } from '@app/domain/models/account'

export interface LoadAccountByToken {
  load: (accessToken: string, role?: string) => Promise<AccountModel | null>
}
