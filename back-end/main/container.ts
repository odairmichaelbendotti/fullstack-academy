import { PrismaUserRepository } from "../infra/db/prisma/UserRepository";
import { CreateUserUseCase } from "../application/usecases/user/CreateUserUseCase";
import { UserController } from "../infra/http/controller/UserController";
import { BcryptHashService } from "../infra/service/BcryptHashService";
import { LoginUseCase } from "../application/usecases/user/LoginUseCase";

const repository = new PrismaUserRepository();
const hashService = new BcryptHashService();
const createUserUseCase = new CreateUserUseCase(repository, hashService);
const loginUseCase = new LoginUseCase(repository, hashService);
const controller = new UserController(createUserUseCase, loginUseCase);

export { controller };
