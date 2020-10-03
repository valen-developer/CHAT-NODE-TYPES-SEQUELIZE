import { Request, Response, NextFunction } from "express";

export let checkMessage = (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const body = req.body;

  if (body.group) {
    console.log("Entra1");
    req.body.user_receive = null;
    return next();
  }

  if ((!body.group || body.group === null) && !body.user_receive) {
    console.log("entra 2");
    return resp
      .status(400)
      .json({ ok: false, error: "Mensaje sin destinatario concreto" });
  }

  req.body.group = null;

  console.log("No entra");

  next();
};
