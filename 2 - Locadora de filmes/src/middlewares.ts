import { NextFunction, Request, Response } from "express";
import { TMoviesResult } from "./interfaces";
import { client } from "./database";

const ensureIdExist = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
  const queryString: string = `
    SELECT * FROM movies
    WHERE id = $1;
    `;
  const queryResult: TMoviesResult = await client.query(queryString, [
    req.params.id,
  ]);
  if (queryResult.rowCount === 0) {
    return res.status(404).json({ error: "Movie not found!" });
  };
  return next();
};

const ensureNameExists = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
  const queryString: string = `
    SELECT * FROM movies WHERE name = $1
    `;
  const queryResult: TMoviesResult = await client.query(queryString, [
    req.body.name,
  ]);
  if (queryResult.rowCount !== 0) {
    return res.status(409).json({ error: "Movie name already exists!" });
  };
  return next();
};

export { ensureIdExist, ensureNameExists };
