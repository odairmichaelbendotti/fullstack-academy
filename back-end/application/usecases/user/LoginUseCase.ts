import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { IHashService } from "../../../domain/services/IHashService";
import { ITokenService } from "../../../domain/services/ITokenService";

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private hashService: IHashService,
    private tokenService: ITokenService,
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

    const payload = {
      id: user.getId(),
      name: user.getName(),
      lastName: user.getLastName(),
      email: user.getEmail(),
      phone: user.getPhone(),
      birthDate: user.getBirthDate(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
    };

    const token = this.tokenService.generateToken(payload);

    return { user: payload, token };
  }
}
