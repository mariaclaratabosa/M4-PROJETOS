import { Router } from "express";
import { movieController } from "../controllers";
import middlewares from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";

const movieRouter: Router = Router();

movieRouter.post(
  "",
  middlewares.validateBody(movieCreateSchema),
  middlewares.verifyNameExists,
  movieController.create
);

movieRouter.get("", middlewares.pagination, movieController.read);

movieRouter.use("/:id", middlewares.verifyIdExists);

movieRouter.get("/:id", movieController.retrieve);

movieRouter.patch(
  "/:id",
  middlewares.validateBody(movieUpdateSchema),
  middlewares.verifyNameExists,
  movieController.update
);

movieRouter.delete("/:id", movieController.destroy);

export default movieRouter;
