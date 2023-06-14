import { NextFunction, Request, Response } from "express";
import { TProjectResult } from "../interfaces";
import { client } from "../database";
import AppError from "../error";

const verifyProjectIdParams = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const query: TProjectResult = await client.query(
    'SELECT * FROM "developers" WHERE "id" = $1',
    [req.params.id]
  );
  if (query.rowCount === 0) {
    throw new AppError("Project not found", 404);
  }
  return next();
};

export default verifyProjectIdParams;