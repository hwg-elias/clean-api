import { AddAccountModel } from '@app/domain/usecases/add-account'
import { AccountModel } from '@app/domain/models/account'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
