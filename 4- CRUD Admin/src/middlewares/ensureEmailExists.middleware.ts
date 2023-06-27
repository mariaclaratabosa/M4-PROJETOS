import { NextFunction, Request, Response } from "express";
import { User, UserResult } from "../interfaces/users.interface";
import { client } from "../database";
import { AppError } from "../errors";

export const ensureEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email } = req.body;
  const queryResult: UserResult = await client.query(
    `SELECT * FROM users WHERE email = $1;`,
    [email]
  );

  const emailUser: User = queryResult.rows[0];

  if (emailUser) {
    throw new AppError("Email already registered", 409);
  };

  return next();
};
