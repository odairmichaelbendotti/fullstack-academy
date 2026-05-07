export type LoginOutputDto = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
};

export interface ILoginRepository {
  login(user: LoginOutputDto | null): Promise<LoginOutputDto>;
}
