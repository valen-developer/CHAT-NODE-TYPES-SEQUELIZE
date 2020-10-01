import { Router } from "express";

import * as userController from "../controllers/user.controller";

export const userRouter: Router = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);


userRouter.post("/", userController.createUser);
