import { IUserRepository } from "../../../domain/reposotories/IUserRepository";
import { CreateUserInputDto } from "../../dtos/User";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(input: CreateUserInputDto) {
    return await this.userRepository.create(input);
  }
}
