import { IUserRepository } from "../../../domain/reposotories/IUserRepository";
import { CreateUserInputDto } from "../../dtos/User";
import { IHashService } from "../../../domain/services/IHashService";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private hashService: IHashService,
  ) {}

  async execute(input: CreateUserInputDto) {
    const password = await this.hashService.hash(input.password);
    console.log(password);

    return await this.userRepository.create({ ...input, password });
  }
}
