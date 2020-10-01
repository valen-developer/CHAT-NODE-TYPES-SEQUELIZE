import { Router, Request, Response } from "express";

import * as messageController from "../controllers/messages.controller";

export const messagesRoute = Router();

messagesRoute.get("/:id", messageController.getAllMessagesById);

messagesRoute.post("/", messageController.createMessage);
