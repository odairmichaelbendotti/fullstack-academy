import { JwtPayload } from "jsonwebtoken";
import { LoginOutputDto } from "./domain/repositories/ILoginRepository";

declare global {
  namespace Express {
    interface Request {
      user?: LoginOutputDto | JwtPayload; // ou seu tipo customizado
    }
  }
}
