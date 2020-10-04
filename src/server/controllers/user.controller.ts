import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

import { TOKENCONFIG } from "../../config/config";

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
  let newUser: User = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  };
  try {
    const userDB = await UserModel.create(newUser);
    const user = JSON.parse(JSON.stringify(userDB.toJSON()));
    delete user.password;
    resp.json({
      ok: true,
      user,
      token: jwt.sign(user, TOKENCONFIG.seed, {
        expiresIn: TOKENCONFIG.expireIn,
      }),
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      error,
    });
  }
};

export let userLogin = async (req: Request, resp: Response) => {
  const userLogin: User = req.body;

  try {
    const userDB = await UserModel.findOne({
      where: { email: userLogin.email },
    });
    const user = JSON.parse(JSON.stringify(userDB?.toJSON()));

    if (bcrypt.compareSync(userLogin.password, user.password)) {
      delete user.password;
      console.log("Contraseña correcta");
      resp.json({
        ok: true,
        user,
        token: jwt.sign(user, TOKENCONFIG.seed, {
          expiresIn: TOKENCONFIG.expireIn,
        }),
      });
    } else {
      resp.status(400).json({
        ok: false,
        error: "Usuario o contraseña incorrectos",
      });
    }
  } catch (error) {
    resp.status(400).json({
      ok: false,
      error: "El usuario no existe. Por favor, registrese",
    });
  }
};
