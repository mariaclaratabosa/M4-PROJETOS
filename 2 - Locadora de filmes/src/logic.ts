import { Request, Response } from "express";
import {
  TMovieRequest,
  TMovieUpdateRequest,
  TMoviesResult,
} from "./interfaces";
import format from "pg-format";
import { client } from "./database";

const createMovie = async (req: Request, res: Response): Promise<Response> => {
  const payload: TMovieRequest = req.body;
  const queryString: string = format(
    `
        INSERT INTO movies(%I)
        VALUES (%L)
        RETURNING *;
        `,
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: TMoviesResult = await client.query(queryString);

  return res.status(201).json(queryResult.rows[0]);
};

const readMovies = async (req: Request, res: Response): Promise<Response> => {
  const queryStringCategory: string = `SELECT * FROM movies WHERE category = $1`;
  const queryResultCategory: TMoviesResult = await client.query(
    queryStringCategory,
    [req.query.category]
  );
  if (queryResultCategory.rowCount > 0) {
    return res.status(200).json(queryResultCategory.rows);
  };
  const queryStringAll: string = `SELECT * FROM movies`;
  const queryResultAll: TMoviesResult = await client.query(queryStringAll);
  return res.json(queryResultAll.rows);
};

const readMovieById = async (req: Request, res: Response): Promise<Response> => {
  const queryString: string = `SELECT * FROM movies WHERE id = $1`;
  const queryResult: TMoviesResult = await client.query(queryString, [
    req.params.id,
  ]);
  if (queryResult.rowCount === 0) {
    return res.status(404).json({ error: "Movie not found!" });
  };
  return res.status(200).json(queryResult.rows[0]);
};

const updateMovie = async (req: Request, res: Response): Promise<Response> => {
  const payload: TMovieUpdateRequest = req.body;
  const queryString: string = format(
    `
        UPDATE movies
        SET(%I) = ROW(%L)
        WHERE id = $1
        RETURNING *;
        `,
    Object.keys(payload),
    Object.values(payload)
  );
  const queryResult: TMoviesResult = await client.query(queryString, [
    req.params.id,
  ]);
  return res.status(200).json(queryResult.rows[0]);
};

const deleteMovie = async (req: Request, res: Response): Promise<Response> => {
  const queryString: string = `
    DELETE FROM movies WHERE id = $1;
    `;
  await client.query(queryString, [req.params.id]);
  return res.status(204).send();
};

export { createMovie, readMovies, readMovieById, updateMovie, deleteMovie };
