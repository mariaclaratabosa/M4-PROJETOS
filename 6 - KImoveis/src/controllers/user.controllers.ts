import { Request, Response } from "express";
import { userServices } from "../services";
import { UserRead, UserReturn, UserUpdate } from "../interfaces";
import { User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userServices.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const admin: boolean = res.locals.user.admin;
  const users: UserRead = await userServices.read(admin);

  return res.status(200).json(users);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const payload: UserUpdate = req.body
  const user = await userServices.update(req.params.id, payload)
  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userServices.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, read, update, destroy };
