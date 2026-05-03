export class CreateUserInputDto {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly phone: string,
    public readonly birthDate: Date,
    public readonly password: string,
    public readonly acceptTerms: boolean,
  ) {}
}
