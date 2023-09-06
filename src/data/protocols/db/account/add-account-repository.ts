import { AddAccountModel } from '@app/domain/usecases/account/add-account'
import { AccountModel } from '@app/domain/models/account'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
