import { Request, Response } from "express";
import { IDeveloper } from "../interfaces";
import { developerServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const developer: IDeveloper = await developerServices.create(req.body);
  return res.status(201).json(developer);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const developer: IDeveloper = await developerServices.retrieve(req.params.id);
  return res.status(200).json(developer);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await developerServices.destroy(req.params.id);
  return res.status(204).json();
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const developer: IDeveloper = await developerServices.update(req.body, req.params.id);
  return res.status(200).json(developer);
};

export default { create, retrieve, destroy, update };
