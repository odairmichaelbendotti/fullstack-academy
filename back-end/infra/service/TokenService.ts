import { ITokenService } from "../../domain/services/ITokenService";
import jwt from "jsonwebtoken";

export class TokenService implements ITokenService {
  generateToken(payload: object, save: boolean = false): string {
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: save ? "180d" : "7d",
    });
    return token;
  }
  validateToken(token: string): object | null {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!) as object;
      return payload;
    } catch (err) {
      return null;
    }
  }
}
