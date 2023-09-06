import { AccountModel } from '@app/domain/models/account'
export type AddAccountModel = Omit<AccountModel, 'id'>

export interface AddAccount {
  add: (account: AddAccountModel) => Promise<AccountModel | null>
}
