import { Request, Response } from "express";
import { Category } from "../entities";
import { categoryServices } from "../services";
import { CategoryRead } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = await categoryServices.create(req.body);
  return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const categories: CategoryRead = await categoryServices.read();
  return res.status(200).json(categories);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const id: number = res.locals.category.id
  const realEstates: Category | null = await categoryServices.retrieve(id)
  return res.status(200).json(realEstates)
}

export default { create, read, retrieve };
