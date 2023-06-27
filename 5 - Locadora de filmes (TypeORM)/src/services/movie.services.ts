import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import {
  MovieCreate,
  MovieRepo,
  MovieUpdate,
  Pagination,
  PaginationParams,
} from "../interfaces";

const create = async (payload: MovieCreate): Promise<Movie> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie);
  const movie: Movie = await repo.save(payload);

  return movie;
};

const read = async ({
  page,
  perPage,
  order,
  sort,
  prevPage,
  nextPage,
}: PaginationParams): Promise<Pagination> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie);
  const [movies, count]: [Movie[], number] = await repo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
};

const update = async (movie: Movie, payload: MovieUpdate): Promise<Movie> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie);

  return await repo.save({ ...movie, ...payload });
};

const destroy = async (movie: Movie): Promise<void> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie);

  await repo.remove(movie);
};

export default { create, read, update, destroy };
