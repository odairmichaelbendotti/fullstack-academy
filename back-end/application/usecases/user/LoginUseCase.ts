import { IUserRepository } from "../../../domain/reposotories/IUserRepository";
import { IHashService } from "../../../domain/services/IHashService";

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private hashService: IHashService,
  ) {}

  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    const passMatch = await this.hashService.compare(
      password,
      user.getPassword(),
    );

    if (!passMatch) {
      throw new Error("Invalid password");
    }

    return {
      id: user.getId(),
      name: user.getName(),
      lastName: user.getLastName(),
      email: user.getEmail(),
      phone: user.getPhone(),
      birthDate: user.getBirthDate(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
    };
  }
}
