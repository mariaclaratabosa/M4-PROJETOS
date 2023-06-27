import { Request, Response } from "express";
import { Movie } from "../entities";
import { movieServices } from "../services";
import { MovieUpdate, Pagination } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await movieServices.create(req.body);

  return res.status(201).json(movie);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const pagination: Pagination = await movieServices.read(
    res.locals.pagination
  );

  return res.status(200).json(pagination);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json(res.locals.movie);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const payload: MovieUpdate = req.body;
  const movie: Movie = await movieServices.update(res.locals.movie, payload);

  return res.status(200).json(movie);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await movieServices.destroy(res.locals.movie);

  return res.status(204).json();
};

export default { create, read, retrieve, update, destroy };