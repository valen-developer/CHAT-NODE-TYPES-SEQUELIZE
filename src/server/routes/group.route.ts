import { Router } from "express";

import { createGroup } from "../controllers/groups.controller";

export const groupRouter = Router();

groupRouter.post("/", createGroup);
