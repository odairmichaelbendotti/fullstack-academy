import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { CreateUserInputDto } from "../../dtos/User";
import { IHashService } from "../../../domain/services/IHashService";
import { ITokenService } from "../../../domain/services/ITokenService";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private hashService: IHashService,
    private tokenService: ITokenService,
  ) {}

  async execute(input: CreateUserInputDto) {
    const password = await this.hashService.hash(input.password);

    const payload = { ...input, password };
    const token = this.tokenService.generateToken(payload);
    const user = await this.userRepository.create(payload);

    return { user, token };
  }
}
