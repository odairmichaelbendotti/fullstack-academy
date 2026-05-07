import { Router } from "express";
import { controller, authMiddleware } from "../../../main/container.js";

export const userRouter = Router();

userRouter.post("/create", (req, res) => controller.create(req, res));
userRouter.post("/login", (req, res) => controller.login(req, res));
userRouter.post("/logout", (req, res) => controller.logout(req, res));
userRouter.post(
  "/me",
  (req, res, next) => authMiddleware.execute(req, res, next),
  (req, res) => controller.me(req, res),
);
