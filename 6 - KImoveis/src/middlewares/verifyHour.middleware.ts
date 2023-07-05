import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const verifyHour = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const hour: number = req.body.hour.substring(0, 2);

  if (hour < 8 || hour > 18) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

  return next();
};
