import { CreateUserInputDto } from "../../../application/dtos/User.js";
import { User } from "../../../domain/entities/User.js";
import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";
import { prisma } from "../../../lib/prisma.js";

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
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    return new User(user);
  }

  async findByNameVulnerable(name: string): Promise<User[]> {
    const query = `SELECT * FROM "User" WHERE name = '${name}'`;
    const users = await prisma.$queryRawUnsafe(query);
    return users as User[];
  }

  async findByNameSecure(name: string): Promise<User[]> {
    const users =
      await prisma.$queryRaw`SELECT * FROM "User" WHERE name = ${name}`;
    return users as User[];
  }
}
