import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const verifyDay = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const date: Date = new Date(req.body.date);
  const day: number = date.getDay();

  if (day === 0 || day === 6) throw new AppError("Invalid date, work days are monday to friday", 400);

  return next();
};
