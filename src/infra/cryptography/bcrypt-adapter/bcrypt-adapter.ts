import { HashComparer } from '@app/data/protocols/criptography/hash-comparer'
import { Hasher } from '@app/data/protocols/criptography/hasher'
import bcrypt from 'bcryptjs'

export class BcryptAdapter implements Hasher, HashComparer {
  constructor (private readonly salt: number) {}

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
