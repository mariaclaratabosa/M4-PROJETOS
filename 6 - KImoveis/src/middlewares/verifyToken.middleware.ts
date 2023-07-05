import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { verify } from "jsonwebtoken";
import "dotenv/config"

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authorization: string | undefined = req.headers.authorization;
  if (!authorization) throw new AppError("Missing bearer token", 401);

  const [_bearer, token]: Array<string> = authorization.split(" ");

  verify(token, String(process.env.SECRET_KEY), (error: any, decoded: any) => {
    if (error) throw new AppError(error.message, 401);
    res.locals.user = {
      id: Number(decoded.sub),
      admin: decoded.admin
    };
    res.locals.decoded = decoded
  });

  return next();
};
