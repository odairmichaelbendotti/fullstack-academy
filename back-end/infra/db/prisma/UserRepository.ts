import { CreateUserInputDto } from "../../../application/dtos/User";
import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/reposotories/IUserRepository";
import { prisma } from "../../../lib/prisma";

export class PrismaUserRepository implements IUserRepository {
  async create(user: CreateUserInputDto): Promise<User> {
    const userCreated = await prisma.user.create({
      data: user,
    });

    return new User({
      id: userCreated.id,
      name: userCreated.name,
      lastName: userCreated.lastName,
      email: userCreated.email,
      phone: userCreated.phone,
      birthDate: userCreated.birthDate,
      password: userCreated.password,
      createdAt: userCreated.createdAt,
      updatedAt: userCreated.updatedAt,
    });
  }
}
