import { QueryResult } from "pg";
interface IMovie {
  id: number;
  name: string;
  category: string;
  duration: number;
  price: number;
}

type TMovieRequest = Omit<IMovie, "id">;
type TMovieUpdateRequest = Partial<TMovieRequest>;
type TMoviesResult = QueryResult<IMovie>;

export { IMovie, TMovieRequest, TMovieUpdateRequest, TMoviesResult };
