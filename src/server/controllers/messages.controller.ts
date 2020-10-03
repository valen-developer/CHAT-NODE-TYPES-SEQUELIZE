import { Request, Response } from "express";
import { Op } from "sequelize";

import { MessageSentModel, Message } from "../database/models/message_model.db";
import { checkMessage } from "../middlewares/messages_middlewares/checkmessage.middleware";

//GET EVERY MESSAGE OF A USER

export let getAllMessagesById = async (req: Request, resp: Response) => {
  const id = req.params.id;

  const messages = await MessageSentModel.findAndCountAll({
    where: {
      [Op.or]: [{ user_send: id }, { user_receive: id }],
    },
    order: [["createdAt", "ASC"]],
  });

  resp.json({
    ok: true,
    messages,
  });
};

//CREATE NEW MESSAGE BETWEEN TWO USERS

export let createMessage = async (req: Request, resp: Response) => {
  const newMessage: Message = {
    message: req.body.message,
    user_send: Number(req.body.user_send_id),
    user_receive: req.body.user_receive,
    group: req.body.group ? req.body.group : null,
  };

  try {
    const message = await MessageSentModel.create(newMessage);
    resp.json({
      ok: true,
      message,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      error,
    });
  }
};
