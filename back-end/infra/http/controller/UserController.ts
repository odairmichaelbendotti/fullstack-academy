import { CreateUserUseCase } from "../../../application/usecases/user/CreateUserUseCase";
import { Request, Response } from "express";

export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async create(req: Request, res: Response) {
    try {
      const user = await this.createUserUseCase.execute(req.body);
      res.status(201).json(user);
    } catch (error) {
      if ((error as any).code === "P2002") {
        return res.status(409).json({ error: "Email already exists" });
      }
      const message = error instanceof Error ? error.message : "Unknown error";
      res.status(400).json({ error: message });
    }
  }
}
