import { Request, Response } from "express";

import { User, UserModel } from "../database/models/user_model.db";

export let getUserById = async (req: Request, resp: Response) => {
  const id = req.params.id;

  const user = await UserModel.findAll({
    where: {
      id,
    },
  });

  resp.json({
    ok: true,
    user,
  });
};

export let getAllUsers = async (req: Request, resp: Response) => {
  const users = await UserModel.findAll();

  resp.json({
    ok: true,
    users,
  });
};

export let createUser = async (req: Request, resp: Response) => {
  //Create in DB
  let newUser: User = { name: req.body.name };
  try {
    const user = await UserModel.create(newUser);
    resp.json({
      ok: true,
      user,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      error,
    });
  }
};
