import { Router } from "express";
import {
  createUserController,
  listUsersController,
  listenUserCoursesController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createUserSchema } from "../schemas/users.schemas";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureAdminTokenMiddleware } from "../middlewares/ensureAdminToken.middleware";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExists.middleware";

export const userRouter: Router = Router();

userRouter.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  ensureEmailExistsMiddleware,
  createUserController
);
userRouter.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureAdminTokenMiddleware,
  listUsersController
);
userRouter.get(
  "/:id/courses",
  ensureTokenIsValidMiddleware,
  ensureAdminTokenMiddleware,
  listenUserCoursesController
);
