import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoryRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyCategoryIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);
  const category: Category | null = await categoryRepository.findOneBy({
    id,
  });

  if (!category) throw new AppError("Category not found", 404);

  res.locals = { ...res.locals, category };
  
  return next();
};
