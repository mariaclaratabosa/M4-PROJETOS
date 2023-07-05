import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../entities";
import { realEstateRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyRealEstateIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let realEstateId: number = 0;

  if (req.method === "GET") {
    realEstateId = Number(req.params.id);
  }

  if (req.method === "POST") {
    realEstateId = Number(req.body.realEstateId);
  }

  const realEstate: RealEstate | null = await realEstateRepository.findOneBy({id: realEstateId});

  if (!realEstate) throw new AppError("RealEstate not found", 404);

  res.locals = { ...res.locals, realEstate };

  return next();
};
