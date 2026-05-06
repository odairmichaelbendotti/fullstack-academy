import { Router } from "express";
import { controller } from "../../../main/container";

export const userRouter = Router();

userRouter.post("/create", (req, res) => controller.create(req, res));
userRouter.post("/login", (req, res) => controller.login(req, res));
userRouter.post("/logout", (req, res) => controller.logout(req, res));
