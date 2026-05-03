import { Router } from "express";
import { controller } from "../../../main/container";

export const userRouter = Router();

userRouter.post("/create", (req, res) => controller.create(req, res));
