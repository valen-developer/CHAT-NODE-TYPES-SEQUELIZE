import { Router } from "express";

import { userRouter } from "./user.route";
import { messagesRoute } from "./message.route";
import { groupRouter } from "./group.route";

export const routes: Router = Router();

routes.use("/api/user", userRouter);
routes.use("/api/message", messagesRoute);
routes.use("/api/group", groupRouter);
