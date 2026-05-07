import { PrismaUserRepository } from "../infra/db/prisma/UserRepository";
import { CreateUserUseCase } from "../application/usecases/user/CreateUserUseCase";
import { UserController } from "../infra/http/controller/UserController";
import { BcryptHashService } from "../infra/service/BcryptHashService";
import { LoginUseCase } from "../application/usecases/user/LoginUseCase";
import { TokenService } from "../infra/service/TokenService";
import { AuthMiddleware } from "../infra/http/middleware/AuthMiddleware";

const repository = new PrismaUserRepository();
const hashService = new BcryptHashService();
const tokenService = new TokenService();
const createUserUseCase = new CreateUserUseCase(
  repository,
  hashService,
  tokenService,
);
const loginUseCase = new LoginUseCase(repository, hashService, tokenService);
const controller = new UserController(createUserUseCase, loginUseCase);
const authMiddleware = new AuthMiddleware(tokenService);

export { controller, authMiddleware };
