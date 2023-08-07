
export type AuthenticationModel = {
  email: string
  password: string
}
export interface Authentication {
  auth: (Authentication: AuthenticationModel) => Promise<string | null>
}
