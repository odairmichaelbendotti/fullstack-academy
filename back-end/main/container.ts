import { PrismaUserRepository } from "../infra/db/prisma/UserRepository";
import { CreateUserUseCase } from "../application/usecases/user/CreateUserUseCase";
import { UserController } from "../infra/http/controller/UserController";

const repository = new PrismaUserRepository();
const createUserUseCase = new CreateUserUseCase(repository);
const controller = new UserController(createUserUseCase);

export { repository, createUserUseCase, controller };
