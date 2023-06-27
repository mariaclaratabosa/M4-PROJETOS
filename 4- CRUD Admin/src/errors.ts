import { ZodError } from "zod";
import { NextFunction } from "connect";
import { Request, Response } from "express";

export class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const handleErrors = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  if (error instanceof ZodError) {
    return res.status(400).json(error.flatten().fieldErrors);
  }
  console.log(error);
  return res.status(500).json({ message: error.message });
};
