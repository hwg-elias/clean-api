import { AddAccount, AddAccountModel, AccountModel, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (addAccount: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(addAccount.password)
    return await new Promise(resolve => { resolve(null) })
  }
}
