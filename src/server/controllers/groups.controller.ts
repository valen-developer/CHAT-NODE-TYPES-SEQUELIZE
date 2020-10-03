import { Request, Response } from "express";

import { GroupModel, Group } from "../database/models/group_model.db";

export let createGroup = async (req: Request, resp: Response) => {
  const body = req.body;

  const newGroup: Group = {
    name: body.name,
    ownerID: body.id,
  };

  try {
    await GroupModel.create(newGroup);
    resp.json({
      ok: true,
      newGroup,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      error,
    });
  }
};
