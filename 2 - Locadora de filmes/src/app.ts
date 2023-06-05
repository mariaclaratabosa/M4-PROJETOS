import express, { Application } from "express";
import {
  createMovie,
  deleteMovie,
  readMovieById,
  readMovies,
  updateMovie,
} from "./logic";
import { connectDatabase } from "./database";
import "dotenv/config";
import { ensureIdExist, ensureNameExists } from "./middlewares";

const app: Application = express();
app.use(express.json());

app.get("/movies", readMovies);
app.get("/movies/:id", ensureIdExist, readMovieById);
app.post("/movies", ensureNameExists, createMovie);
app.patch("/movies/:id", ensureIdExist, ensureNameExists, updateMovie);
app.delete("/movies/:id", ensureIdExist, deleteMovie);

const runningMsg: string = "Server is running";
app.listen(process.env.PORT, async () => {
  await connectDatabase();
  console.log(runningMsg);
});
