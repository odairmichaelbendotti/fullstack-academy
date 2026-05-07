import { Request, NextFunction, Response } from "express";

export interface IAuthMiddleware {
  execute(req: Request, res: Response, next: NextFunction): void;
}
