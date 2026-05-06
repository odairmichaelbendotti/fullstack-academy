import { CreateUserUseCase } from "../../../application/usecases/user/CreateUserUseCase";
import { Request, Response } from "express";
import { LoginUseCase } from "../../../application/usecases/user/LoginUseCase";

export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private loginUseCase: LoginUseCase,
  ) {}

  async create(req: Request, res: Response) {
    try {
      const { user, token } = await this.createUserUseCase.execute(req.body);
      res.cookie("token", token, { httpOnly: true });
      res.status(201).json(user);
    } catch (error) {
      if ((error as any).code === "P2002") {
        return res.status(409).json({ error: "Email already exists" });
      }
      const message = error instanceof Error ? error.message : "Unknown error";
      res.status(400).json({ error: message });
    }
  }
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const { user, token } = await this.loginUseCase.execute(email, password);
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json(user);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      res.status(400).json({ error: message });
    }
  }
  async logout(req: Request, res: Response) {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  }
}
