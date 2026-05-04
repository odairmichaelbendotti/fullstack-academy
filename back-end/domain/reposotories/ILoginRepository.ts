export interface ILoginRepository {
  login(email: string, password: string): Promise<boolean>;
}
