import { Router } from "express";

import * as messageController from "../controllers/messages.controller";

//Middlewares
import { checkMessage } from "../middlewares/messages_middlewares/checkmessage.middleware";

export const messagesRoute = Router();

messagesRoute.get("/:id", messageController.getAllMessagesById);

messagesRoute.post("/", checkMessage, messageController.createMessage);
