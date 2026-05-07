import { IAuthMiddleware } from "./IAuthMiddleware.js";
import { NextFunction, Request, Response } from "express";
import { ITokenService } from "../../../domain/services/ITokenService.js";

export class AuthMiddleware implements IAuthMiddleware {
  constructor(private tokenService: ITokenService) {}

  execute(req: Request, res: Response, next: NextFunction) {
    try {
      const { token } = req.cookies;

      if (!token) {
        return next(new Error("Token not found"));
      }

      const decoded = this.tokenService.validateToken(token);

      if (!decoded) {
        return next(new Error("Invalid token"));
      }

      req.user = decoded;
      next();
    } catch (error: unknown) {
      next(error);
    }
  }
}
